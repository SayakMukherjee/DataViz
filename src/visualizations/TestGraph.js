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
    box-shadow: inset 0 0 0 1000px #252B2F;
    object-fit: contain;
    padding: 2px;
`;

const TestGraph = () => {

    useEffect(() => {
        const margin = {
            top: 10, right: 30, bottom: 30, left: 60
        }

        const width = 460 - margin.left - margin.right;
        const height = 450 - margin.top - margin.bottom;

        const svg = d3.select('#my_dataviz')
            .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
            .append("g")
                .attr("transform",
                    `translate(${margin.left}, ${margin.top})`);

        


                    //Read the data
d3.csv("https://raw.githubusercontent.com/cashenkes/Data-Visualization-14/main/Temperature_change_cleaned_part.csv?token=ACJFLPBK5LYJFFZF2XRRT43BXCDHI",

// When reading the csv, I must format variables:
d => {
    return {Day : d3.timeParse("%Y")(d.Day), temperature_anomaly : d.temperature_anomaly}}).then(

// Now I can use this dataset:
function(data) {

  // Add X axis --> it is a date format
  const x = d3.scaleTime()
    .domain(d3.extent(data, d => d.Day))
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x));

  // Add Y axis
  const y = d3.scaleLinear()
    .domain( [-0.5,1.5])
    .range([ height, 0 ]);
  svg.append("g")
    .call(d3.axisLeft(y));

  // Add the line
  svg.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "white")
    .attr("stroke-width", 1.5)
    .attr("d", d3.line()
      .x(d => x(d.Day))
      .y(d => y(d.temperature_anomaly))
      )

  // create a tooltip
  const Tooltip = d3.select("#my_dataviz")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "2px")
    .style("border-radius", "5px")
    .style("padding", "5px")
    .style("position", "absolute")
    .style("color", "black")


    // Three function that change the tooltip when user hover / move / leave a cell
    const mouseover = function(event,d) {
      Tooltip
        .style("opacity", 1)
    }
    const mousemove = function(event,d) {
      Tooltip
        .html("Year: "+ d.Day.getFullYear() + "<br>Temperature " + (Math.round(d.temperature_anomaly*100))/100)
        .style("left", (event.pageX) + "px") // It is important to put the +90: other wise the tooltip is exactly where the point is an it creates a weird effect
        .style("top", (event.pageY) + "px");
    }
    const mouseleave = function(event,d) {
      Tooltip
        .style("opacity", 0)
    }

    

  // Add the points
  svg
    .append("g")
    .selectAll("dot")
    .data(data)
    .join("circle")
      .attr("class", "myCircle")
      .attr("cx", d => x(d.Day))
      .attr("cy", d => y(d.temperature_anomaly))
      .attr("r", 2)
      .attr("stroke", "#69b3a2")
      .attr("stroke-width", 2)
      .attr("fill", "#69b3a2")
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave)



                    
            });
    }, []);

    return (
        <Wrapper id="my_dataviz"></Wrapper>
    );
};

export default TestGraph;