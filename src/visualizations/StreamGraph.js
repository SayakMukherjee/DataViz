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

const StreamGraph = () => {

    useEffect(() => {

        const margin = {
            top: 10, right: 30, bottom: 30, left: 60
        }

        const width = 500 - margin.left - margin.right;
        const height = 460 - margin.top - margin.bottom;

        const svg = d3.select('#my_dataviz4')
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom + 10)
            .append("g")
            .attr("transform",
                `translate(${margin.left}, ${margin.top})`);

        // set the dimensions and margins of the graph
        // const margin = { top: 20, right: 30, bottom: 0, left: 10 },
        //     width = 460 - margin.left - margin.right,
        //     height = 400 - margin.top - margin.bottom;

        // append the svg object to the body of the page
        // const svg = d3.select("#my_dataviz4")
        //     .append("svg")
        //     .attr("width", width + margin.left + margin.right)
        //     .attr("height", height + margin.top + margin.bottom)
        //     .append("g")
        //     .attr("transform",
        //         `translate(${margin.left}, ${margin.top})`);

        // Parse the Data
        d3.csv("https://raw.githubusercontent.com/cashenkes/Data-Visualization-14/main/topicsCOP.csv").then(function (data) {

            // List of groups = header of the csv files
            const keys = data.columns.slice(1)

            console.log(data);

            // Add X axis
            const x = d3.scaleLinear()
                .domain(d3.extent(data, function (d) { return d.years; }))
                .range([0, width]);
            svg.append("g")
                .attr("transform", `translate(0, ${height * 0.8})`)
                .call(d3.axisBottom(x).tickSize(-height * .7).tickValues([1995, 2000, 2005, 2010, 2015]))
                .select(".domain").remove()
            // Customization
            svg.selectAll(".tick line").attr("stroke", "#000")

            // Add X axis label:
            svg.append("text")
                .attr("text-anchor", "end")
                .attr("x", width)
                .attr("y", height - 30)
                .text("Time (years)")
                .style("fill", "#fff");

            // Add Y axis
            const y = d3.scaleLinear()
                .domain([-500, 500])
                .range([height, 0]);

            // color palette
            const color = d3.scaleOrdinal()
                .domain(keys)
                .range(["#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"]);
            console.log(d3.schemeDark2)
            //stack the data?
            const stackedData = d3.stack()
                .offset(d3.stackOffsetSilhouette)
                .keys(keys)
                (data)

            // create a tooltip
            // const Tooltip = d3.select('#my_dataviz4')
            //     .append("text")
            //     .attr("x", 0)
            //     .attr("y", 0)
            //     .style("opacity", 0)
            //     .style("font-size", 17)

            const Tooltip = d3.select('#my_dataviz4').append("div")
                .style("opacity", 0)
                .attr("class", "tooltip")
                .attr("x", 0)
                .attr("y", 0)
                .style("background-color", "#58656D")
                .style("border", "solid")
                .style("border-width", "1px")
                .style("border-radius", "5px")
                .style("padding", "5px")
                .style("position", "absolute")

            // Three function that change the tooltip when user hover / move / leave a cell
            const mouseover = function (event, d) {
                //Tooltip.style("opacity", 1)
                Tooltip
                    .style("opacity", 0.8)
                d3.selectAll(".myArea").style("opacity", .2)
                d3.select(this)
                    .style("stroke", "black")
                    .style("opacity", 1)
            }
            const mousemove = function (event, d, i) {
                const grp = d.key
                Tooltip.html("<b>" + grp + "</b>")
                    .style("left", (event.pageX) + "px")
                    .style("top", (event.pageY) + "px");
                //Tooltip.text(grp)
            }
            const mouseleave = function (event, d) {
                Tooltip.style("opacity", 0)
                d3.selectAll(".myArea").style("opacity", 1).style("stroke", "none")
            }

            // Area generator
            const area = d3.area()
                .x(function (d) { return x(d.data.years); })
                .y0(function (d) { return y(d[0]); })
                .y1(function (d) { return y(d[1]); })

            // Show the areas
            svg
                .selectAll("mylayers")
                .data(stackedData)
                .join("path")
                .attr("class", "myArea")
                .style("fill", function (d) { return color(d.key); })
                .attr("d", area)
                .on("mouseover", mouseover)
                .on("mousemove", mousemove)
                .on("mouseleave", mouseleave)

        })
    }, []);

    return (
        <Wrapper id="my_dataviz4"></Wrapper>
    );
};

export default StreamGraph;