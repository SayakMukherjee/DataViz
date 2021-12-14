import React, { useEffect } from 'react';
import * as d3 from "d3";
import styled from 'styled-components';

const link = "https://raw.githubusercontent.com/cashenkes/Data-Visualization-14/main/co2-em.csv?token=AC4QHJRH7YZZU2WCTTOUU4TBYHVNK"

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

        const svg = d3.select('#co2emission')
            .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom +10)
            .append("g")
                .attr("transform", `translate(${margin.left}, ${margin.top})`);

        d3.csv(link, d => { 
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
            if(!fullData) {console.log("ERROR")}
            const minYear = 1800;
            const maxYear = 2020;
            const data = fullData.filter(function(d) {return d.year >= minYear});
            //console.log(data)
            var dataPerYear = d3.groups(data, d => d.year).sort(function(a, b) {return b[0] - a[0]})

            function emYear(year) {
                var total = 0;
                dataPerYear.forEach(e => {
                  if(e[0] === year) {
                    e[1].forEach(e2 => {
                      if(!isNaN(e2.co2)) {total += Number(e2.co2)}
                    })
                  }
                });
                //console.log(total)
                return total;
            }


            // X axis
            const xScale = d3.scaleTime()
              .domain([d3.timeParse("%Y")(minYear), d3.timeParse("%Y")(maxYear)])
              .range([0, width])
            const xAxis = svg.append("g")
              .attr("transform", `translate(0, ${height})`)
              .call(d3.axisBottom(xScale));

            // Add X axis label:
            svg.append("text")
              .attr("text-anchor", "end")
              .attr("x", width + 15)
              .attr("y", height + margin.top + 25)
              .attr("fill", "white")
              .text("Year");
            
            // Add Y axis
            const yScale = d3.scaleLinear()
              .domain([0, 130000])
              .range([ height, 0]);
            svg.append("g")
              .call(d3.axisLeft(yScale));

            // Y axis label:
            svg.append("text")
              .attr("text-anchor", "end")
              .attr("y", -margin.left+66)
              .attr("x", -margin.top+70)
              .attr("font-size", 11)
              .text("* 10E+9 kg")
              .attr("fill", "white")

            const clip = svg.append("defs").append("svg:clipPath")
              .attr("id", "clip")
              .append("svg:rect")
              .attr("width", width )
              .attr("height", height )
              .attr("x", 0)
              .attr("y", 0);
  
            const brush = d3.brushX()
              .extent( [ [0,0], [width,height] ] )  // selects whole graph
              .on("end", update)               // calls update function

            const line = svg.append('g')
              .attr("clip-path", "url(#clip)")

            line.append("path")
              .datum(dataPerYear)
              .attr("class", "line")
              .attr("fill", "none")
              .attr("stroke", "white")
              .attr("stroke-width", 1.4)
              .attr("d", d3.line()
                .x((d) => xScale(d3.timeParse("%Y")(d[0])))
                .y((d) => yScale(emYear(d[0])))
              )

              line
              .append("g")
                .attr("class", "brush")
                .call(brush);
        
              let idleTimeout
              function idled() { idleTimeout = null; }

              // handles updating the region of the graph
              function update(event,d) {
                const extent = event.selection
          
                if(!extent){
                  if (!idleTimeout) return idleTimeout = setTimeout(idled, 350);
                  xScale.domain([ 4,8])
                }else{
                  xScale.domain([ xScale.invert(extent[0]), xScale.invert(extent[1]) ])
                  line.select(".brush").call(brush.move, null) // This remove the brush area as soon as the user is done
                }
          
                xAxis.transition().duration(1000).call(d3.axisBottom(xScale))
                line
                    .selectAll('.line')
                    .transition()
                    .duration(1000)
                    .attr("d", d3.line()
                      .x((d) => xScale(d3.timeParse("%Y")(d[0])))
                      .y((d) => yScale(emYear(d[0])))
                    )
              }
          
              // resets the graph if the user doubleclicks
              svg.on("dblclick",function(){
                xScale.domain([d3.timeParse("%Y")(minYear), d3.timeParse("%Y")(maxYear)])
                xAxis.transition().call(d3.axisBottom(xScale))
                line
                  .selectAll('.line')
                  .transition()
                  .attr("d", d3.line()
                    .x((d) => xScale(d3.timeParse("%Y")(d[0])))
                    .y((d) => yScale(emYear(d[0])))
                )
              })
        });
    }, []);
    return ( <Wrapper id="co2emission"></Wrapper> );
};
export default EmissionGraph;