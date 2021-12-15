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

const TestGraph2 = () => {

    useEffect(() => {

     // set the dimensions and margins of the graph
var margin = {top: 30, right: 10, bottom: 10, left: 10},
width = 900 - margin.left - margin.right,
   height = 700 - margin.top - margin.bottom;


   const svg = d3.select("#my_dataviz2")
    .append("svg")
       .attr("width", width + margin.left + margin.right)
       .attr("height", height + margin.top + margin.bottom)
       .append("g")
       .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//Thanks to http://bl.ocks.org/dougdowson/9832019

var legendText = ["0", "5", "10", "15", "20", "25", "30", "35"];
var legendColors = ["#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"];

const colorScale = d3.scaleThreshold()
.domain([0,1, 2,5,8,10,13,15,20,25,30,35,40])
.range(["#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"])

var year=2019;

// Map and projection
const path = d3.geoPath();
const projection = d3.geoMercator()
  .scale(120)
  .center([0,20])
  .translate([width / 2, height / 2]);

  const codeData = new Map();


  

// Load external data and boot
Promise.all([
  d3.json("https://raw.githubusercontent.com/cashenkes/Data-Visualization-14/main/world.geojson"),
  d3.csv("https://raw.githubusercontent.com/cashenkes/Data-Visualization-14/main/DisasterPerYearPerCountry.csv"),
  d3.csv("https://raw.githubusercontent.com/cashenkes/Data-Visualization-14/main/CountryCodeMapping.csv", function(d) {
    codeData.set(d.ISO, d.Country)
  })
  ]).then(function(loadData){
      let topo = loadData[0]  
  
  
            // create a tooltip
    var tooltip = d3.select('#my_dataviz').append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "#58656D")
        .style("border", "solid")
        .style("border-width", "1px")
        .style("border-radius", "5px")
        .style("padding", "5px")
        .style("position", "absolute")
  
  const mouseOver = function(event,d) {
  
  
    d3.selectAll(".Country")
      .transition()
      .duration(200)
      .style("opacity", .5)
  
    d3.select(this)
      .transition()
      .duration(200)
      .style("opacity", 1)
      .style("stroke", "black")
  
    var current_ISO = d.id

    d.total= function (a) {
                  var refinedData=loadData[1].filter(function(k) {
                      return k.ISO == current_ISO && k.Year==year })
  
                  if(refinedData.length>0 ) { return  refinedData[0].Count}
                  else return 0
        }
  
    d.country = codeData.get(d.id);
  
  
    tooltip
      .style("opacity", 0.8)
      .html("<b>"+d.country +  "</b><br> Year: " + year+ " <br> Disasters: <b>" + d.total() +"</b>")
      .style("left", (event.pageX) + "px")		
      .style("top", (event.pageY) + "px");
  }
  
  let mouseLeave = function(d) {
    d3.selectAll(".Country")
      .style("opacity", 1)
    d3.selectAll(".Country")
      .transition()
      .duration(200)
      .style("stroke", "black")
      .style("stroke-width", 0.1)
  
    tooltip
      .style("opacity", 0)
  }
    
      // Draw the map
      var countryShapes= svg.append("g")
        .selectAll("path")
        .data(topo.features)
        .enter()
        .append("path")
          // draw each country
          .attr("d", d3.geoPath()
            .projection(projection)
          )
         
          .style("stroke", "black")
          .style("stroke-width", 0.1)
          .attr("class", function(d){ return "Country" } )
          .style("opacity", 1)
          .on("mouseover", mouseOver )
           .on("mouseleave", mouseLeave )
  
        
      function update(year){
        slider.property("value", year);
        d3.select(".year").text(year);
           countryShapes
              .attr("fill", function (d) {
                  var refinedData=loadData[1].filter(function(k) {
                      return k.ISO == d.id && k.Year==year })
                  
  
                  if(refinedData.length>0 ) { d.total = refinedData[0].Count}
                  else d.total=0
  
                  return colorScale(d.total);
              })
          }
          
  
          var slider = d3.select(".slider")
      .append("input")
        .attr("type", "range")
        .attr("min", 1960)
        .attr("max", 2019)
        .attr("step", 1)
        .on("input", function() {
          year = this.value;
  
          update(year);
        });
  
              update(2019);
  
  
              var legend = svg.append("g")
      .attr("id", "legend");
  
    var legenditem = legend.selectAll(".legenditem")
      .data(d3.range(8))
      .enter()
      .append("g")
        .attr("class", "legenditem")
        .attr("transform", function(d, i) { return "translate(" + i * 31 + ",0)"; });
  
    legenditem.append("rect")
      .attr("x", width - 240)
      .attr("y", -7)
      .attr("width", 30)
      .attr("height", 6)
      .attr("class", "rect")
      .style("fill", function(d, i) { return legendColors[i]; });
  
    legenditem.append("text")
      .attr("x", width - 240)
      .attr("y", -10)
      .style("text-anchor", "middle")
      .style("fill","white")
      .text(function(d, i) { return legendText[i]; });
                    
            });
    }, []);

    return (
        <Wrapper id="my_dataviz2" >
          <h2 class="year"></h2>
          <div class="slider"> </div>
        </Wrapper>
    );
};

export default TestGraph2;