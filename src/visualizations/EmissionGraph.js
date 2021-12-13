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

const EmissionGraph = () => {
    useEffect(() => {
        const margin = { top: 10, right: 30, bottom: 30, left: 60 }
        const width = 500 - margin.left - margin.right;
        const height = 460 - margin.top - margin.bottom;

        const svg = d3.select('#my_dataviz')
            .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom +10)
            .append("g")
                .attr("transform", `translate(${margin.left}, ${margin.top})`);

        d3.csv("https://raw.githubusercontent.com/cashenkes/Data-Visualization-14/main/co2-em.csv?token=AC4QHJWYWKLKWPAV6ZNNT53BYCC74", d => { 
          return {
            iso_code : d.iso_code,
            country : d.country,
            year : d.year,
            co2 : d.co2,
            co2_per_capita : d.co2_per_capita,
            trade_co2 : d.trade_co2,
            cement_co2 : d.cement_co2,
            cement_co2_per_capita : d.cement_co2_per_capita,
            coal_co2 : d.coal_co2,
            coal_co2_per_capita : d.coal_co2_per_capita,
            flaring_co2 : d.flaring_co2,
            flaring_co2_per_capita : d.flaring_co2_per_capita,
            gas_co2 : d.gas_co2,
            gas_co2_per_capita : d.gas_co2_per_capita,
            oil_co2 : d.oil_co2,
            oil_co2_per_capita : d.oil_co2_per_capital,
            other_industry_co2 : d.other_industry_co2,
            other_co2_per_capita : d.other_co2_per_capita,
            co2_growth_prct : d.co2_growth_prct,
            co2_growth_abs : d.co2_growth_abs,
            co2_per_gdp : d.co2_per_gdp,
            co2_per_unit_energy : d.co2_per_unit_energy,
            consumption_co2 : d.consumption_co2,
            consumption_co2_per_capita : d.consumption_co2_per_capita,
            consumption_co2_per_gdp : d.consumption_co2_per_gdp,
            cumulative_co2 : d.cumulative_co2,
            cumulative_cement_co2 : d.cumulative_cement_co2,
            cumulative_coal_co2 : d.cumulative_coal_co2,
            cumulative_flaring_co2 : d.cumulative_flaring_co2,
            cumulative_gas_co2 : d.cumulative_gas_co2,
            cumulative_oil_co2 : d.cumulative_oil_co2,
            cumulative_other_co2 : d.cumulative_other_co2,
            trade_co2_share : d.trade_co2_share,
            share_global_co2 : d.share_global_co2,
            share_global_cement_co2 : d.share_global_cement_co2,
            share_global_coal_co2 : d.share_global_coal_co2,
            share_global_flaring_co2 : d.share_global_flaring_co2,
            share_global_gas_co2 : d.share_global_gas_co2,
            share_global_oil_co2 : d.share_global_oil_co2,
            share_global_other_co2 : d.share_global_other_co2,
            share_global_cumulative_co2 : d.share_global_cumulative_co2,
            share_global_cumulative_cement_co2 : d.share_global_cumulative_cement_co2,
            share_global_cumulative_coal_co2 : d.share_global_cumulative_coal_co2,
            share_global_cumulative_flaring_co2 : d.share_global_cumulative_flaring_co2,
            share_global_cumulative_gas_co2 : d.share_global_cumulative_gas_co2,
            share_global_cumulative_oil_co2 : d.share_global_cumulative_oil_co2,
            share_global_cumulative_other_co2 : d.share_global_cumulative_other_co2,
            total_ghg : d.total_ghg,
            ghg_per_capita : d.ghg_per_capita,
            methane : d.methane,
            methane_per_capita : d.methane_per_capita,
            nitrous_oxide : d.nitrous_oxide,
            nitrous_oxide_per_capita : d.nitrous_oxide_per_capita,
            population : d.population,
            gdp : d.gdp,
            primary_energy_consumption : d.primary_energy_consumption,
            energy_per_capita : d.energy_per_capita,
            energy_per_gdp : d.energy_per_gdp
          }
        }).then( function(fullData) {
            const minYear = 1990;
            const data = fullData.filter(function(d) {return d.year >= minYear});
            var dataPerYear = d3.groups(data, d => d.year)

            function emYear(year) {
                var total = 0;
                //dataPerYear[dataPerYear.findIndex(year)].forEach(element => {
                //    total += Number(element.co2);
                //});

                dataPerYear.forEach(e => {
                  if(e[0] == year) {
                    e[1].forEach(e2 => {
                      if(!isNaN(e2.co2)) {total += Number(e2.co2)}
                    })
                  }
                });
                console.log(total)
                return total;
            }

            console.log(dataPerYear)

            const years = []
            for(var i = 0; i < dataPerYear.length; i++) {
              years[i] = minYear + i + "";
            }

            // X axis
            const xScale = d3.scaleBand()
              .range([ 0,width])
              .domain(years)
              .padding(0.1);
            svg.append("g")
              .attr("transform", `translate(0, ${height})`)
              //.attr("transform", `rotate(90)`)
              .call(d3.axisBottom(xScale))
                .selectAll("text")
                .attr("transform", "translate(13,20)rotate(90)");
            
            // Add Y axis
            const yScale = d3.scaleLinear()
              .domain([0, 130000])
              .range([ height, 0]);
            svg.append("g")
              .call(d3.axisLeft(yScale));
            
            // Bars
            svg.selectAll(".mybar")
              .data(dataPerYear)
              .enter().append("rect")
                .attr("class", "bar")
                .attr('width', xScale.bandwidth())
                .attr('height', function(d) { return height - yScale(emYear(d[0])); })
                .attr('x', function(d) { return xScale(d[0]); })
                .attr('y', function(d) { return yScale(emYear(d[0])); })
                .attr("fill", "white")

            console.log(emYear("2020"))
        });
    }, []);
    return ( <Wrapper id="my_dataviz"></Wrapper> );
};

export default EmissionGraph;