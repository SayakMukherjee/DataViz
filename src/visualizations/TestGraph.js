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

        d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/2_TwoNum.csv")
        .then((data) => {
            // Add X axis
            const x = d3.scaleLinear()
                .domain([0, 3000])
                .range([ 0, width ]);

            svg.append("g")
                .attr("transform", `translate(0, ${height})`)
                .call(d3.axisBottom(x));

            // Add Y axis
            const y = d3.scaleLinear()
                .domain([0, 400000])
                .range([ height, 0]);

            svg.append("g")
                .call(d3.axisLeft(y));

            // Add a tooltip div. Here I define the general feature of the tooltip: stuff that do not depend on the data point.
            // Its opacity is set to 0: we don't see it by default.
            const tooltip = d3.select("#my_dataviz")
                .append("div")
                .style("opacity", 1)
                .style("background-color", "white")
                .style("position", "absolute")
                .style("color", "black")

            // A function that change this tooltip when the user hover a point.
            // Its opacity is set to 1: we can now see it. Plus it set the text and position of tooltip depending on the datapoint (d)
            const mouseover = function(event, d) {
                tooltip
                .style("opacity", 1)
            }

            const mousemove = function(event, d) {
                tooltip
                .html(`The exact value of<br>the Ground Living area is: ${d.GrLivArea}`)
                .style("left", (event.pageX) + "px") // It is important to put the +90: other wise the tooltip is exactly where the point is an it creates a weird effect
                .style("top", (event.pageY) + "px");
            }

            // A function that change this tooltip when the leaves a point: just need to set opacity to 0 again
            const mouseleave = function(event,d) {
                tooltip
                .transition()
                .duration(200)
                .style("opacity", 0)
            }

            // Add dots
            svg.append('g')
                .selectAll("dot")
                .data(data.filter(function(d,i){return i<50})) // the .filter part is just to keep a few dots on the chart, not all of them
                .enter()
                .append("circle")
                .attr("cx", function (d) { return x(d.GrLivArea); } )
                .attr("cy", function (d) { return y(d.SalePrice); } )
                .attr("r", 7)
                .style("fill", "#69b3a2")
                .style("opacity", 0.3)
                .style("stroke", "white")
                .style("position", "fixed")
                .style("z-index", -1)
                .on("mouseover", mouseover )
                .on("mousemove", mousemove )
                .on("mouseout", mouseleave )
                    
            });
    }, []);

    return (
        <Wrapper id="my_dataviz"></Wrapper>
    );
};

export default TestGraph;