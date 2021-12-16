/**
* This file plots a linegraph representing global co2 emission per year.
*
* Inspiration for the basic setup of a linechart using d3 was taken from: https://www.d3-graph-gallery.com/line.html
*/
import React, { useEffect } from 'react';
import * as d3 from "d3";
import styled from 'styled-components';

// the resource where the dataset is located.
// A codebook containing explanation for the dataset can be found here: https://github.com/owid/co2-data/blob/master/owid-co2-codebook.csv
const link = "https://raw.githubusercontent.com/cashenkes/Data-Visualization-14/main/co2-em.csv"

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

const Select = styled.select`
  width: 20%;
  height: 35px;
  background: #252B2F;
  color: #D99056;
  padding-left: 5px;
  font-size: 14px;
  border-left: none;
  border-top:none;
  border-right:none;
  border-color: #D99056;
  margin-left: 10px;

  option {
    color: #D99056;
    background: #252B2F;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

const EmissionGraph = () => {
  useEffect(() => {
    const margin = { top: 10, right: 30, bottom: 30, left: 60 }
    const width = 500 - margin.left - margin.right;
    const height = 460 - margin.top - margin.bottom;

    const svg = d3.select('#co2emission')
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom + 10)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    d3.csv(link, d => dataProcess(d)).then(function (fullData) {
      /*
      * This section defines constants and preprocessed data.
      */ 

      // Set the minimum and maximum year for easier processing.
      const minYear = 1820;                                                                         // minimum year is set to 1820 since there is not a lot of data available before then.
      const maxYear = 2020;                                                                         // no data available after 2020.
      const data = fullData.filter(function (d) { return d.year >= minYear });                      // filters the data based on the minimum year.
      var dataPerYear = d3.groups(data, d => d.year).sort(function (a, b) { return b[0] - a[0] })   // groups the data per year so calculations can be done.
      var currentgraph = 0;

      // Precalculates all the datasets for the different graphs such that it only has to be calculated once.
      const emissionData =
        [ annualEmission(minYear, maxYear, "total")
        , annualEmission(minYear, maxYear, "coal")
        , annualEmission(minYear, maxYear, "gas")
        , annualEmission(minYear, maxYear, "oil") ];

      /*
      * This sections adds the axis of the graph.
      */

      // X axis
      const xScale = d3.scaleTime()
        .domain([d3.timeParse("%Y")(minYear), d3.timeParse("%Y")(maxYear)])
        .range([0, width])
      const xAxis = svg.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(xScale))
        .attr("color", "#fff");

      // Add X axis label:
      svg.append("text")
        .attr("text-anchor", "end")
        .attr("x", width + 15)
        .attr("y", height + margin.top + 25)
        .attr("fill", "#fff")
        .text("Year");

      // Add Y axis
      const yScale = d3.scaleLinear()
        .domain([0, 130000])
        .range([height, 0]);
      svg.append("g")
        .call(d3.axisLeft(yScale))
        .attr("color", "#fff");

      // Y axis label:
      svg.append("text")
        .attr("text-anchor", "end")
        .attr("y", -margin.left + 66)
        .attr("x", -margin.top + 73)
        .attr("font-size", 11)
        .text("* 10E+9 kg")
        .attr("fill", "#fff");

      // Adds the clip to the svg.
      svg.append("defs").append("svg:clipPath")
        .attr("id", "clip")
        .append("svg:rect")
        .attr("width", width)
        .attr("height", height)
        .attr("x", 0)
        .attr("y", 0);

      // Defines the brush.
      const brush = d3.brushX()
        .extent([[0, 0], [width, height]])
        .on("end", zoom)

      /*
      * This sections draws the initial graph and adds the constants used for clipping and brushing
      */ 
      const line = svg.append('g')
        .attr("clip-path", "url(#clip)")                // Adds the clip so the area outside the clip will not be drawn.
      line.append("path")
        .datum(emissionData[currentgraph])              // Setting the standard data.
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", "#D99056")
        .attr("stroke-width", 2)
        .attr("d", d3.line()
          .x((d) => xScale(d3.timeParse("%Y")(d[0])))   // Parses the data (string) to a date so it can be used in the timeScale.
          .y((d) => yScale(d[1])))                      // Translates the data (number) to a value in the linearScale.
      line
        .append("g")
        .attr("class", "brush")                         // Adds the brush for zooming in and out.
        .call(brush);

      /*
      * This section adds selectbutton and the doubleclick event handler.
      */
      
      // Adds the options to the dropdown menu.
      const selectOptions = ["total", "coal", "gas", "oil"];
      d3.select("#selectButton")
      .selectAll('myOptions')
      .data(selectOptions)
      .enter()
      .append('option')
      .text(function (d) { return d; })
      .attr("value", function (d) { return d; })
              
      // resets the graph if the user doubleclicks
      svg.on("dblclick", function () {draw("none", [d3.timeParse("%Y")(minYear), d3.timeParse("%Y")(maxYear)])})        // Resets the zoom if the user doubleclicks.
      d3.select("#selectButton").on("change", function (d) { draw(d3.select(this).property("value"), xScale.domain); }) // When a different option is selected draw that graph at this zoom level.

      /*
      * This section contains helper functions.
      */

      // Redraws the graph with a given option and domain.
      function draw(option, domain) {
        if (option === selectOptions[0]) { currentgraph = 0; }
        else if (option === selectOptions[1]) { currentgraph = 1; }
        else if (option === selectOptions[2]) { currentgraph = 2; }
        else if (option === selectOptions[3]) { currentgraph = 3; }
        if (xScale.domain !== domain) {
          xScale.domain(domain);
          xAxis.transition().duration(500).call(d3.axisBottom(xScale));
        }
        line.selectAll('.line')
          .datum(emissionData[currentgraph])
          .transition()
          .duration(500)
          .attr("d", d3.line()
            .x((d) => xScale(d3.timeParse("%Y")(d[0])))
            .y((d) => yScale(d[1]))
          )
      }

      // Handles zooming in on the graph.
      function zoom(event) {
        const extent = event.selection
        if (extent) {
          line.select(".brush").call(brush.move, null)                          // Remove the brush area when the user is done.
          draw("none", [xScale.invert(extent[0]), xScale.invert(extent[1])]);   // Redraw the graph within the newly selected area
        }
        
      }
      
      // Precalculates the data for the graphs with the helperfunction bellow.
      function annualEmission(min, max, mode) {
        const result = []
        for (var i = 0; i <= max - min; i++) {
          result[i] = [i + min, emYear(i + Number(min), mode)]
        }
        return result;
      }

      // Takes a year (number) and a statistic as input and calculates the global emited co2 that year for the given statistic.
      function emYear(year, statistic) {
        var total = 0;
        dataPerYear.forEach(e => {
          if (e[0] == year) {
            e[1].forEach(e2 => {
              switch (statistic) {
                case "total" :
                  total += Number(e2.co2) + Number(e2.trade_co2)
                  break;
                case "coal" :
                  total += Number(e2.coal_co2)
                  break;
                case "gas" :
                  total += Number(e2.gas_co2)
                  break;
                case "oil" :
                  total += Number(e2.oil_co2)
                  break;
              }
            })
          }
        })
        return total;
      }
    });
  }, []);
  // wraps the graph in a wrapper and adds the selectbutton.
  return (<Wrapper id="co2emission"><Select id="selectButton"></Select></Wrapper>);
};
// Exports the graph so it can be drawn.
export default EmissionGraph;

// Used when reading the data.
function dataProcess(d) {
  return {
    iso_code: d.iso_code,
    country: d.country,
    year: d.year,
    co2: d.co2,
    co2_per_capita: d.co2_per_capita,
    trade_co2: d.trade_co2,
    cement_co2: d.cement_co2,
    cement_co2_per_capita: d.cement_co2_per_capita,
    coal_co2: d.coal_co2,
    coal_co2_per_capita: d.coal_co2_per_capita,
    flaring_co2: d.flaring_co2,
    flaring_co2_per_capita: d.flaring_co2_per_capita,
    gas_co2: d.gas_co2,
    gas_co2_per_capita: d.gas_co2_per_capita,
    oil_co2: d.oil_co2,
    oil_co2_per_capita: d.oil_co2_per_capital,
    other_industry_co2: d.other_industry_co2,
    other_co2_per_capita: d.other_co2_per_capita,
    co2_growth_prct: d.co2_growth_prct,
    co2_growth_abs: d.co2_growth_abs,
    co2_per_gdp: d.co2_per_gdp,
    co2_per_unit_energy: d.co2_per_unit_energy,
    consumption_co2: d.consumption_co2,
    consumption_co2_per_capita: d.consumption_co2_per_capita,
    consumption_co2_per_gdp: d.consumption_co2_per_gdp,
    cumulative_co2: d.cumulative_co2,
    cumulative_cement_co2: d.cumulative_cement_co2,
    cumulative_coal_co2: d.cumulative_coal_co2,
    cumulative_flaring_co2: d.cumulative_flaring_co2,
    cumulative_gas_co2: d.cumulative_gas_co2,
    cumulative_oil_co2: d.cumulative_oil_co2,
    cumulative_other_co2: d.cumulative_other_co2,
    trade_co2_share: d.trade_co2_share,
    share_global_co2: d.share_global_co2,
    share_global_cement_co2: d.share_global_cement_co2,
    share_global_coal_co2: d.share_global_coal_co2,
    share_global_flaring_co2: d.share_global_flaring_co2,
    share_global_gas_co2: d.share_global_gas_co2,
    share_global_oil_co2: d.share_global_oil_co2,
    share_global_other_co2: d.share_global_other_co2,
    share_global_cumulative_co2: d.share_global_cumulative_co2,
    share_global_cumulative_cement_co2: d.share_global_cumulative_cement_co2,
    share_global_cumulative_coal_co2: d.share_global_cumulative_coal_co2,
    share_global_cumulative_flaring_co2: d.share_global_cumulative_flaring_co2,
    share_global_cumulative_gas_co2: d.share_global_cumulative_gas_co2,
    share_global_cumulative_oil_co2: d.share_global_cumulative_oil_co2,
    share_global_cumulative_other_co2: d.share_global_cumulative_other_co2,
    total_ghg: d.total_ghg,
    ghg_per_capita: d.ghg_per_capita,
    methane: d.methane,
    methane_per_capita: d.methane_per_capita,
    nitrous_oxide: d.nitrous_oxide,
    nitrous_oxide_per_capita: d.nitrous_oxide_per_capita,
    population: d.population,
    gdp: d.gdp,
    primary_energy_consumption: d.primary_energy_consumption,
    energy_per_capita: d.energy_per_capita,
    energy_per_gdp: d.energy_per_gdp
  }
}