/**
This file is for plotting the line graph
*
Reference: https://www.d3-graph-gallery.com/
 */
import React, { useEffect } from 'react';
import * as d3 from "d3";
import styled from 'styled-components';

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

    d3.csv(link, d => {
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
    }).then(function (fullData) {
      const minYear = 1800;
      const maxYear = 2020;
      const data = fullData.filter(function (d) { return d.year >= minYear });
      var dataPerYear = d3.groups(data, d => d.year).sort(function (a, b) { return b[0] - a[0] })

      function emYear(year, mode) {
        var total = 0;
        dataPerYear.forEach(e => {
          if (e[0] == year) {
            e[1].forEach(e2 => {
              if (mode == "total") {
                if (!isNaN(e2.co2)) { total += Number(e2.co2) + Number(e2.trade_co2) }
              }
              else if (mode == "coal") {
                if (!isNaN(e2.coal_co2)) { total += Number(e2.coal_co2) }
              }
              else if (mode == "gas") {
                if (!isNaN(e2.gas_co2)) { total += Number(e2.gas_co2) }
              }
              else if (mode == "oil") {
                if (!isNaN(e2.oil_co2)) { total += Number(e2.oil_co2) }
              }
              else {
                if (!isNaN(e2.other_industry_co2)) { total += Number(e2.other_industry_co2) }
              }
            })
          }
        });
        return total;
      }
      var currentgraph = 0;

      const emissionData =
        [annualEmission(minYear, maxYear, dataPerYear, "total"),
        annualEmission(minYear, maxYear, dataPerYear, "coal"),
        annualEmission(minYear, maxYear, dataPerYear, "gas"),
        annualEmission(minYear, maxYear, dataPerYear, "oil")];

      function annualEmission(min, max, data, mode) {
        const result = []
        for (var i = 0; i <= max - min; i++) {
          result[i] = [i + min, emYear(i + Number(min), mode)]
        }
        return result;
      }

      const selectOptions = ["total", "coal", "gas", "oil"];
      d3.select("#selectButton")
        .selectAll('myOptions')
        .data(selectOptions)
        .enter()
        .append('option')
        .text(function (d) { return d; })
        .attr("value", function (d) { return d; })

      function updateGraph(option) {
        console.log("hello! " + option);
        if (option == selectOptions[0]) { currentgraph = 0; }
        if (option == selectOptions[1]) { currentgraph = 1; }
        if (option == selectOptions[2]) { currentgraph = 2; }
        if (option == selectOptions[3]) { currentgraph = 3; }
        console.log(currentgraph);
        line
          .selectAll('.line')
          .datum(emissionData[currentgraph])
          .transition()
          .duration(1000)
          .attr("d", d3.line()
            .x((d) => xScale(d3.timeParse("%Y")(d[0])))
            .y((d) => yScale(d[1]))
          )
      }

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

      const clip = svg.append("defs").append("svg:clipPath")
        .attr("id", "clip")
        .append("svg:rect")
        .attr("width", width)
        .attr("height", height)
        .attr("x", 0)
        .attr("y", 0);

      const brush = d3.brushX()
        .extent([[0, 0], [width, height]])
        .on("end", update)


      const line = svg.append('g')
        .attr("clip-path", "url(#clip)")

      line.append("path")
        .datum(emissionData[currentgraph])
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", "#D99056")
        .attr("stroke-width", 2)
        .attr("d", d3.line()
          .x((d) => xScale(d3.timeParse("%Y")(d[0])))
          .y((d) => yScale(d[1]))
        )

      line
        .append("g")
        .attr("class", "brush")
        .call(brush);

      let idleTimeout
      function idled() { idleTimeout = null; }

      // handles updating the region of the graph
      function update(event, d) {
        const extent = event.selection

        if (!extent) {
          if (!idleTimeout) return idleTimeout = setTimeout(idled, 350);
          xScale.domain([4, 8])
        } else {
          xScale.domain([xScale.invert(extent[0]), xScale.invert(extent[1])])
          line.select(".brush").call(brush.move, null) // This remove the brush area as soon as the user is done
        }

        xAxis.transition().duration(1000).call(d3.axisBottom(xScale))
        line
          .selectAll('.line')
          .transition()
          .duration(1000)
          .attr("d", d3.line()
            .x((d) => xScale(d3.timeParse("%Y")(d[0])))
            .y((d) => yScale(d[1]))
          )
      }

      // resets the graph if the user doubleclicks
      svg.on("dblclick", function () {
        xScale.domain([d3.timeParse("%Y")(minYear), d3.timeParse("%Y")(maxYear)])
        line
          .selectAll('.line')
          .transition()
          .attr("d", d3.line()
            .x((d) => xScale(d3.timeParse("%Y")(d[0])))
            .y((d) => yScale(d[1]))
          )
        xAxis.transition().call(d3.axisBottom(xScale))
      })
      // When the button is changed, run the updateChart function
      d3.select("#selectButton").on("change", function (d) {
        // recover the option that has been chosen
        var selectedOption = d3.select(this).property("value")
        // run the updateChart function with this selected option
        updateGraph(selectedOption);
      })
    });
  }, []);
  return (<Wrapper id="co2emission"><Select id="selectButton"></Select></Wrapper>);
};
export default EmissionGraph;