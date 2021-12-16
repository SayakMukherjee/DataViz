/**
This file is for plotting the treemap graph
*
Reference: https://www.d3-graph-gallery.com/
 */
import React, { useEffect } from 'react';
import * as d3 from "d3";
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0 0 0 1000px #80847E;
    object-fit: contain;
    padding: 2px;
`;

const TreeMapGraph = () => {

  useEffect(() => {
    // set the dimensions and margins of the graph
    const margin = { top: 10, right: 10, bottom: 10, left: 10 },
      width = 600 - margin.left - margin.right,
      height = 600 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    const svg = d3.select("#my_dataviz5")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform",
        `translate(${margin.left}, ${margin.top})`);

    const legendText = ["Adaptation Funds", "Mitigation Funds"];
    const legendColors = ["#662506", "#fec44f"];
    const totalValue = ["3452 USD million", "7741 USD million"];

    // read json data
    d3.json("https://raw.githubusercontent.com/cashenkes/Data-Visualization-14/main/funds.json").then(function (data) {

      // Give the data to this cluster layout:
      const root = d3.hierarchy(data).sum(function (d) { return d.value }) // Here the size of each leave is given in the 'value' field in input data

      // Then d3.treemap computes the position of each element of the hierarchy
      d3.treemap()
        .size([width, height])
        .paddingTop(28)
        .paddingRight(7)
        .paddingInner(3)
        (root)

      // prepare a color scale
      const color = d3.scaleOrdinal()
        .domain(["Adaptation Funds", "Mitigation Funds"])
        .range(["#662506", "#fec44f"])

      // And a opacity scale
      const opacity = d3.scaleLinear()
        .domain([10, 30])
        .range([.5, 1])

      // create a tooltip
      var Tooltip = d3.select("#my_dataviz5")
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "#58656D")
        .style("border", "solid")
        .style("border-width", "2px")
        .style("border-radius", "5px")
        .style("padding", "5px")
        .style("position", "absolute")

      // Three function that change the tooltip when user hover / move / leave a cell
      var mouseover = function (event, d) {
        Tooltip
          .style("opacity", 0.8)
        d3.selectAll(".Fund")
          .style("stroke", "none")
          .style("opacity", 0.8)
        d3.select(this)
          .style("stroke", "black")
          .style("opacity", 1)
      }
      var mousemove = function (event, d) {
        Tooltip
          .html(d.data.name + ":" + d.data.value + " USD million")
          .style("left", (event.pageX) + "px")
          .style("top", (event.pageY) + "px")
      }
      var mouseleave = function (event, d) {
        Tooltip
          .style("opacity", 0)
        d3.selectAll(".Fund")
          .style("stroke", "none")
          .style("opacity", 1)
      }

      // use this information to add rectangles:
      svg
        .selectAll("rect")
        .data(root.leaves())
        .join("rect")
        .attr('x', function (d) { return d.x0; })
        .attr('y', function (d) { return d.y0; })
        .attr('width', function (d) { return d.x1 - d.x0; })
        .attr('height', function (d) { return d.y1 - d.y0; })
        .style("stroke", "black")
        .style("fill", function (d) { return color(d.parent.data.name) })
        .style("opacity", function (d) { return opacity(d.data.value) })
        .attr("class", function (d) { return "Fund" })
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave)

      // Add title for the 3 groups
      var legend = svg.append("g")
        .attr("id", "legend");

      var legenditem = legend.selectAll(".legenditem")
        .data(d3.range(2))
        .enter()
        .append("g")
        .attr("class", "legenditem")
        .attr("transform", function (d, i) { return "translate(" + i * 150 + ",0)"; });

      legenditem.append("rect")
        .attr("x", width - 350)
        .attr("y", 25)
        .attr("width", 100)
        .attr("height", 6)
        .attr("class", "rect")
        .style("fill", function (d, i) { return legendColors[i]; });

      legenditem.append("text")
        .attr("x", width - 300)
        .attr("y", 15)
        .style("text-anchor", "middle")
        .style("fill", "#000")
        .text(function (d, i) { return legendText[i]; });

      // Add title for the 3 groups
      svg
        .selectAll("titles")
        .data(root.descendants().filter(function (d) { return d.depth == 1 }))
        .enter()
        .append("text")
        .attr("x", function (d) { return d.x0 })
        .attr("y", function (d) { return d.y0 + 21 })
        .text(function (d, i) { return totalValue[i]; })
        .attr("font-size", "19px")
        .attr("fill", "#000")

    })
  }, []);

  return (
    <Wrapper id="my_dataviz5"></Wrapper>
  );
};

export default TreeMapGraph;