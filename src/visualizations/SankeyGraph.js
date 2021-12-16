/**
This file is for plotting the sankey graph
*
Reference: https://www.d3-graph-gallery.com/
 */
import React, { useEffect } from 'react';
import * as d3 from "d3";
import * as d3sankey from "d3-sankey"
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

const SankeyGraph = () => {

    useEffect(() => {
        const units = "USD Millions";

        // set the dimensions and margins of the graph
        const margin = { top: 10, right: 10, bottom: 10, left: 10 },
            width = 900 - margin.left - margin.right,
            height = 900 - margin.top - margin.bottom;

        // format variables
        const formatNumber = d3.format(",.0f"), // zero decimal places
            format = function (d) { return formatNumber(d) + " " + units; },
            color = d3.scaleOrdinal(Array(10).fill('#D99056'));

        // append the svg object to the body of the page
        const svg = d3.select("#my_dataviz3").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

        // Set the sankey diagram properties
        const sankey = d3sankey.sankey()
            .nodeWidth(5)
            .nodePadding(40)
            .size([width, height]);

        //const path = sankey.links();

        // load the data
        d3.csv("https://raw.githubusercontent.com/cashenkes/Data-Visualization-14/main/contributions.csv").then(function (data) {

            //set up graph in same style as original example but empty
            var sankeydata = { "nodes": [], "links": [] };

            data.forEach(function (d) {
                sankeydata.nodes.push({ "name": d.source });
                sankeydata.nodes.push({ "name": d.target });
                sankeydata.links.push({
                    "source": d.source,
                    "target": d.target,
                    "value": +d.value
                });
            });

            // return only the distinct / unique nodes
            sankeydata.nodes = Array.from(
                d3.group(sankeydata.nodes, d => d.name),
                ([value]) => (value)
            );

            // loop through each link replacing the text with its index from node
            sankeydata.links.forEach(function (d, i) {
                sankeydata.links[i].source = sankeydata.nodes
                    .indexOf(sankeydata.links[i].source);
                sankeydata.links[i].target = sankeydata.nodes
                    .indexOf(sankeydata.links[i].target);
            });

            // now loop through each nodes to make nodes an array of objects
            // rather than an array of strings
            sankeydata.nodes.forEach(function (d, i) {
                sankeydata.nodes[i] = { "name": d };
            });
            const graph = sankey(sankeydata);

            // add in the links
            const link = svg.append("g").selectAll(".link")
                .data(graph.links)
                .enter().append("path")
                .attr("class", "link")
                .attr("d", d3sankey.sankeyLinkHorizontal())
                .attr("stroke-width", function (d) { return d.width; })
                .style("fill", "none")
                .style("stroke", "#58656D")
                .style("stroke-opacity", 0.5);

            // add the link titles
            link.append("title")
                .text(function (d) {
                    return d.source.name + " → " +
                        d.target.name + "\n" + format(d.value);
                })
                .style("fill", "white");

            // add in the nodes
            const node = svg.append("g").selectAll(".node")
                .data(graph.nodes)
                .enter().append("g")
                .attr("class", "node");

            // add the rectangles for the nodes
            node.append("rect")
                .attr("x", function (d) { return d.x0; })
                .attr("y", function (d) { return d.y0; })
                .attr("height", function (d) { return d.y1 - d.y0; })
                .attr("width", sankey.nodeWidth())
                .style("fill", function (d) {
                    return d.color = color(d.name.replace(/ .*/, ""));
                })
                .style("stroke", function (d) {
                    return d3.rgb(d.color).darker(2);
                })
                .append("title")
                .text(function (d) {
                    return d.name + "\n" + format(d.value);
                })
                .style("fill-opacity", 0.9)
                .style("shape-rendering", "crispEdges");

            // add in the title for the nodes
            node.append("text")
                .attr("x", function (d) { return d.x0 - 6; })
                .attr("y", function (d) { return (d.y1 + d.y0) / 2; })
                .attr("dy", "0.35em")
                .attr("text-anchor", "end")
                .style("fill", "white")
                .text(function (d) { return d.name; })
                .filter(function (d) { return d.x0 < width / 2; })
                .attr("x", function (d) { return d.x1 + 6; })
                .attr("text-anchor", "start")
                .style("pointer-events", "none");

        });
    }, []);

    return (
        <Wrapper id="my_dataviz3"></Wrapper>
    );
};

export default SankeyGraph;