(this.webpackJsonpinfovizreact=this.webpackJsonpinfovizreact||[]).push([[0],{234:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/heroImage.4272cdb0.mp4"},235:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/floods.97248d07.jpg"},236:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/drought.f09050d6.jpg"},237:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/forest-fire.8d85e1a5.jpg"},238:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/melting.f10df119.jpg"},239:function(t,e,n){"use strict";n.r(e);var a,i,r,o,c,s,l,d,p,u,h,g,f,b,x,m,_,y,j,v,O,w,k,z,T,B,D,F,L,C,E,A,S,Y,N,W,V,M,I,P,U,q,G,H,J,X,R,Z,K,Q=n(1),$=n.n(Q),tt=n(94),et=n.n(tt),nt=n(5),at=n(6),it=Object(at.a)(a||(a=Object(nt.a)(["\n*{\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: 'Lucida Sans', sans-serif;\n}\n"]))),rt=at.b.div(i||(i=Object(nt.a)(["\nz-index: 1;\nwidth: 100%;\nmax-width: 1300px;\nmargin-right: auto;\nmargin-left: auto;\npadding-right: 50px;\npadding-left: 50px;\n\n@media screen and (max-width: 991px){\n    padding-right: 30px;\n    padding-left: 30px;\n}\n"]))),ot=(at.b.button(r||(r=Object(nt.a)(["\nborder-radius: 4px;\nbackground: ",";\nwhite-space: nowrap;\npadding: ",";\ncolor: '#fff';\nfont-size: ",";\noutline: none;\nborder: none;\ncursor: pointer;\n\n&::hover{\n    transition: all 0.3s ease-out;\n    background: '#fff';\n    background: ",";\n}\n\n@media screen and (max-width: 960px) {\n    width: 100%;\n}\n"])),(function(t){return t.primary?"#4B59F7":"#0467FB"}),(function(t){return t.big?"12px 64px":"10px 24px"}),(function(t){return t.fontSize?"20px":"16px"}),(function(t){return t.primary?"#0467FB":"#4B59F7"})),it),ct=n(15),st=n(7),lt=n(12),dt=n(3),pt=n(2),ut=at.b.div(o||(o=Object(nt.a)(["\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    box-shadow: inset 0 0 0 1000px #252B2F;\n    object-fit: contain;\n    padding: 2px;\n"]))),ht=function(){return Object(Q.useEffect)((function(){var t=10,e=30,n=30,a=60,i=500-a-e,r=460-t-n,o=dt.v("#my_dataviz").append("svg").attr("width",i+a+e).attr("height",r+t+n+10).append("g").attr("transform","translate(".concat(a,", ").concat(t,")"));dt.e("https://raw.githubusercontent.com/cashenkes/Data-Visualization-14/main/Temperature_change_cleaned_part.csv",(function(t){return{Day:dt.z("%Y")(t.Day),temperature_anomaly:t.temperature_anomaly}})).then((function(e){var n=dt.t().domain(dt.g(e,(function(t){return t.Day}))).range([0,i]);o.append("g").attr("transform","translate(0, ".concat(r,")")).call(dt.b(n)),o.append("text").attr("text-anchor","end").attr("x",i).attr("y",r+t+25).attr("fill","white").text("Year");var c=dt.q().domain([-.5,1.3]).range([r,0]);o.append("g").call(dt.c(c)),o.append("text").attr("text-anchor","end").attr("transform","rotate(-90)").attr("y",20-a).attr("x",-t).text("Relative temperature increase(\xb0C)").attr("fill","white");var s=dt.v("#my_dataviz").append("div").style("opacity",0).attr("class","tooltip").style("background-color","white").style("border","solid").style("border-width","2px").style("border-radius","5px").style("padding","5px").style("position","absolute").style("color","black");!function(){var t=o.append("path").datum(e).attr("fill","none").attr("stroke","#D99056").attr("stroke-width",3).attr("d",dt.n().x((function(t){return n(t.Day)})).y((function(t){return c(t.temperature_anomaly)}))),a=t.node().getTotalLength();!function e(){t.attr("stroke-dasharray",a+" "+a).attr("stroke-dashoffset",a).transition().duration(4e3).ease(dt.f).attr("stroke-dashoffset",0).transition().duration(1e3).on("end",e)}()}(),o.append("g").selectAll("dot").data(e).join("circle").attr("class","myCircle").attr("cx",(function(t){return n(t.Day)})).attr("cy",(function(t){return c(t.temperature_anomaly)})).attr("r",2.5).attr("stroke","#80847E").attr("stroke-width",2).attr("fill","#80847E").on("mouseover",(function(t,e){s.style("opacity",1)})).on("mousemove",(function(t,e){s.html("Year: "+e.Day.getFullYear()+"<br>Temperature increase: "+Math.round(100*e.temperature_anomaly)/100+"\xb0C").style("left",t.pageX+"px").style("top",t.pageY+"px")})).on("mouseleave",(function(t,e){s.style("opacity",0)}))}))}),[]),Object(pt.jsx)(ut,{id:"my_dataviz"})},gt=at.b.div(c||(c=Object(nt.a)(["\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    box-shadow: inset 0 0 0 1000px #252B2F;\n    object-fit: contain;\n    padding: 2px;\n"]))),ft=function(){return Object(Q.useEffect)((function(){var t=30,e=10,n=10,a=10,i=900-a-e,r=700-t-n,o=dt.v("#my_dataviz2").append("svg").attr("width",i+a+e).attr("height",r+t+n).append("g").attr("transform","translate("+a+","+t+")"),c=["0","5","10","15","20","25","30","35"],s=["#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],l=dt.s().domain([0,1,2,5,8,10,13,15,20,25,30,35,40]).range(["#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"]),d=2019,p=(dt.j(),dt.i().scale(120).center([0,20]).translate([i/2,r/2])),u=new Map;Promise.all([dt.m("https://raw.githubusercontent.com/cashenkes/Data-Visualization-14/main/world.geojson"),dt.e("https://raw.githubusercontent.com/cashenkes/Data-Visualization-14/main/DisasterPerYearPerCountry.csv"),dt.e("https://raw.githubusercontent.com/cashenkes/Data-Visualization-14/main/CountryCodeMapping.csv",(function(t){u.set(t.ISO,t.Country)}))]).then((function(t){var e=t[0],n=dt.v("#my_dataviz").append("div").style("opacity",0).attr("class","tooltip").style("background-color","#58656D").style("border","solid").style("border-width","1px").style("border-radius","5px").style("padding","5px").style("position","absolute"),a=o.append("g").selectAll("path").data(e.features).enter().append("path").attr("d",dt.j().projection(p)).style("stroke","black").style("stroke-width",.1).attr("class",(function(t){return"Country"})).style("opacity",1).on("mouseover",(function(e,a){dt.w(".Country").transition().duration(200).style("opacity",.5),dt.v(this).transition().duration(200).style("opacity",1).style("stroke","black");var i=a.id;a.total=function(e){var n=t[1].filter((function(t){return t.ISO==i&&t.Year==d}));return n.length>0?n[0].Count:0},a.country=u.get(a.id),n.style("opacity",.8).html("<b>"+a.country+"</b><br> Year: "+d+" <br> Disasters: <b>"+a.total()+"</b>").style("left",e.pageX+"px").style("top",e.pageY+"px")})).on("mouseleave",(function(t){dt.w(".Country").style("opacity",1),dt.w(".Country").transition().duration(200).style("stroke","black").style("stroke-width",.1),n.style("opacity",0)}));function r(e){h.property("value",e),dt.v(".year").text(e),a.attr("fill",(function(n){var a=t[1].filter((function(t){return t.ISO==n.id&&t.Year==e}));return a.length>0?n.total=a[0].Count:n.total=0,l(n.total)}))}var h=dt.v(".slider").append("input").attr("type","range").attr("min",1960).attr("max",2019).attr("step",1).on("input",(function(){r(d=this.value)}));r(2019);var g=o.append("g").attr("id","legend").selectAll(".legenditem").data(dt.o(8)).enter().append("g").attr("class","legenditem").attr("transform",(function(t,e){return"translate("+31*e+",0)"}));g.append("rect").attr("x",i-240).attr("y",-7).attr("width",30).attr("height",6).attr("class","rect").style("fill",(function(t,e){return s[e]})),g.append("text").attr("x",i-240).attr("y",-10).style("text-anchor","middle").style("fill","white").text((function(t,e){return c[e]}))}))}),[]),Object(pt.jsxs)(gt,{id:"my_dataviz2",children:[Object(pt.jsx)("h2",{class:"year"}),Object(pt.jsx)("div",{class:"slider",children:" "})]})},bt=at.b.div(s||(s=Object(nt.a)(["\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    box-shadow: inset 0 0 0 1000px #80847E;\n    object-fit: contain;\n    padding: 2px;\n"]))),xt=at.b.select(l||(l=Object(nt.a)(["\n  width: 20%;\n  height: 35px;\n  background: #252B2F;\n  color: #80847E;\n  padding-left: 5px;\n  font-size: 14px;\n  border-left: none;\n  border-top:none;\n  border-right:none;\n  border-color: #80847E;\n  margin-left: 10px;\n\n  option {\n    color: #80847E;\n    background: #252B2F;\n    display: flex;\n    white-space: pre;\n    min-height: 20px;\n    padding: 0px 2px 1px;\n  }\n"]))),mt=function(){return Object(Q.useEffect)((function(){var t=10,e=30,n=30,a=60,i=500-a-e,r=460-t-n,o=dt.v("#co2emission").append("svg").attr("width",i+a+e).attr("height",r+t+n+10).append("g").attr("transform","translate(".concat(a,", ").concat(t,")"));dt.e("https://raw.githubusercontent.com/cashenkes/Data-Visualization-14/main/co2-em.csv?token=AC4QHJRH7YZZU2WCTTOUU4TBYHVNK",(function(t){return{iso_code:t.iso_code,country:t.country,year:t.year,co2:t.co2,co2_per_capita:t.co2_per_capita,trade_co2:t.trade_co2,cement_co2:t.cement_co2,cement_co2_per_capita:t.cement_co2_per_capita,coal_co2:t.coal_co2,coal_co2_per_capita:t.coal_co2_per_capita,flaring_co2:t.flaring_co2,flaring_co2_per_capita:t.flaring_co2_per_capita,gas_co2:t.gas_co2,gas_co2_per_capita:t.gas_co2_per_capita,oil_co2:t.oil_co2,oil_co2_per_capita:t.oil_co2_per_capital,other_industry_co2:t.other_industry_co2,other_co2_per_capita:t.other_co2_per_capita,co2_growth_prct:t.co2_growth_prct,co2_growth_abs:t.co2_growth_abs,co2_per_gdp:t.co2_per_gdp,co2_per_unit_energy:t.co2_per_unit_energy,consumption_co2:t.consumption_co2,consumption_co2_per_capita:t.consumption_co2_per_capita,consumption_co2_per_gdp:t.consumption_co2_per_gdp,cumulative_co2:t.cumulative_co2,cumulative_cement_co2:t.cumulative_cement_co2,cumulative_coal_co2:t.cumulative_coal_co2,cumulative_flaring_co2:t.cumulative_flaring_co2,cumulative_gas_co2:t.cumulative_gas_co2,cumulative_oil_co2:t.cumulative_oil_co2,cumulative_other_co2:t.cumulative_other_co2,trade_co2_share:t.trade_co2_share,share_global_co2:t.share_global_co2,share_global_cement_co2:t.share_global_cement_co2,share_global_coal_co2:t.share_global_coal_co2,share_global_flaring_co2:t.share_global_flaring_co2,share_global_gas_co2:t.share_global_gas_co2,share_global_oil_co2:t.share_global_oil_co2,share_global_other_co2:t.share_global_other_co2,share_global_cumulative_co2:t.share_global_cumulative_co2,share_global_cumulative_cement_co2:t.share_global_cumulative_cement_co2,share_global_cumulative_coal_co2:t.share_global_cumulative_coal_co2,share_global_cumulative_flaring_co2:t.share_global_cumulative_flaring_co2,share_global_cumulative_gas_co2:t.share_global_cumulative_gas_co2,share_global_cumulative_oil_co2:t.share_global_cumulative_oil_co2,share_global_cumulative_other_co2:t.share_global_cumulative_other_co2,total_ghg:t.total_ghg,ghg_per_capita:t.ghg_per_capita,methane:t.methane,methane_per_capita:t.methane_per_capita,nitrous_oxide:t.nitrous_oxide,nitrous_oxide_per_capita:t.nitrous_oxide_per_capita,population:t.population,gdp:t.gdp,primary_energy_consumption:t.primary_energy_consumption,energy_per_capita:t.energy_per_capita,energy_per_gdp:t.energy_per_gdp}})).then((function(e){var n=1800,c=2020,s=e.filter((function(t){return t.year>=n})),l=dt.l(s,(function(t){return t.year})).sort((function(t,e){return e[0]-t[0]}));function d(t,e){var n=0;return l.forEach((function(a){a[0]==t&&a[1].forEach((function(t){"total"==e?isNaN(t.co2)||(n+=Number(t.co2)+Number(t.trade_co2)):"coal"==e?isNaN(t.coal_co2)||(n+=Number(t.coal_co2)):"gas"==e?isNaN(t.gas_co2)||(n+=Number(t.gas_co2)):"oil"==e?isNaN(t.oil_co2)||(n+=Number(t.oil_co2)):isNaN(t.other_industry_co2)||(n+=Number(t.other_industry_co2))}))})),n}var p=0,u=[h(n,c,l,"total"),h(n,c,l,"coal"),h(n,c,l,"gas"),h(n,c,l,"oil")];function h(t,e,n,a){for(var i=[],r=0;r<=e-t;r++)i[r]=[r+t,d(r+Number(t),a)];return i}var g=["total","coal","gas","oil"];dt.v("#selectButton").selectAll("myOptions").data(g).enter().append("option").text((function(t){return t})).attr("value",(function(t){return t}));var f=dt.t().domain([dt.z("%Y")(n),dt.z("%Y")(c)]).range([0,i]),b=o.append("g").attr("transform","translate(0, ".concat(r,")")).call(dt.b(f)).attr("color","#252B2F").attr("stroke","#252B2F").attr("stroke-width",1);o.append("text").attr("text-anchor","end").attr("x",i+15).attr("y",r+t+25).attr("fill","#252B2F").text("Year").attr("stroke","#252B2F").attr("stroke-width",1);var x=dt.q().domain([0,13e4]).range([r,0]);o.append("g").call(dt.c(x)).attr("color","#252B2F").attr("stroke","#252B2F").attr("stroke-width",1),o.append("text").attr("text-anchor","end").attr("y",66-a).attr("x",73-t).attr("font-size",11).text("* 10E+9 kg").attr("fill","#252B2F").attr("stroke","#252B2F").attr("stroke-width",1);o.append("defs").append("svg:clipPath").attr("id","clip").append("svg:rect").attr("width",i).attr("height",r).attr("x",0).attr("y",0);var m,_=dt.d().extent([[0,0],[i,r]]).on("end",(function(t,e){var n=t.selection;if(n)f.domain([f.invert(n[0]),f.invert(n[1])]),y.select(".brush").call(_.move,null);else{if(!m)return m=setTimeout(j,350);f.domain([4,8])}b.transition().duration(1e3).call(dt.b(f)),y.selectAll(".line").transition().duration(1e3).attr("d",dt.n().x((function(t){return f(dt.z("%Y")(t[0]))})).y((function(t){return x(t[1])})))})),y=o.append("g").attr("clip-path","url(#clip)");function j(){m=null}y.append("path").datum(u[p]).attr("class","line").attr("fill","none").attr("stroke","#252B2F").attr("stroke-width",2).attr("d",dt.n().x((function(t){return f(dt.z("%Y")(t[0]))})).y((function(t){return x(t[1])}))),y.append("g").attr("class","brush").call(_),o.on("dblclick",(function(){f.domain([dt.z("%Y")(n),dt.z("%Y")(c)]),y.selectAll(".line").transition().attr("d",dt.n().x((function(t){return f(dt.z("%Y")(t[0]))})).y((function(t){return x(t[1])}))),b.transition().call(dt.b(f))})),dt.v("#selectButton").on("change",(function(t){var e,n=dt.v(this).property("value");e=n,console.log("hello! "+e),e==g[0]&&(p=0),e==g[1]&&(p=1),e==g[2]&&(p=2),e==g[3]&&(p=3),console.log(p),y.selectAll(".line").datum(u[p]).transition().duration(1e3).attr("d",dt.n().x((function(t){return f(dt.z("%Y")(t[0]))})).y((function(t){return x(t[1])})))}))}))}),[]),Object(pt.jsx)(bt,{id:"co2emission",children:Object(pt.jsx)(xt,{id:"selectButton"})})},_t=n(8),yt=n(41),jt=at.b.div(d||(d=Object(nt.a)(["\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    box-shadow: inset 0 0 0 1000px #252B2F;\n    object-fit: contain;\n    padding: 2px;\n"]))),vt=function(){return Object(Q.useEffect)((function(){var t=10,e=10,n=10,a=10,i=900-a-e,r=900-t-n,o=dt.h(",.0f"),c=function(t){return o(t)+" USD Millions"},s=dt.r(Array(10).fill("#D99056")),l=dt.v("#my_dataviz3").append("svg").attr("width",i+a+e).attr("height",r+t+n).append("g").attr("transform","translate("+a+","+t+")"),d=yt.a().nodeWidth(5).nodePadding(40).size([i,r]);d.links();dt.e("https://raw.githubusercontent.com/cashenkes/Data-Visualization-14/main/contributions.csv").then((function(t){var e={nodes:[],links:[]};t.forEach((function(t){e.nodes.push({name:t.source}),e.nodes.push({name:t.target}),e.links.push({source:t.source,target:t.target,value:+t.value})})),e.nodes=Array.from(dt.k(e.nodes,(function(t){return t.name})),(function(t){return Object(_t.a)(t,1)[0]})),e.links.forEach((function(t,n){e.links[n].source=e.nodes.indexOf(e.links[n].source),e.links[n].target=e.nodes.indexOf(e.links[n].target)})),e.nodes.forEach((function(t,n){e.nodes[n]={name:t}})),console.log(e);var n=d(e),a=l.append("g").selectAll(".link").data(n.links).enter().append("path").attr("class","link").attr("d",yt.b()).attr("stroke-width",(function(t){return t.width})).style("fill","none").style("stroke","#58656D").style("stroke-opacity",.5);a.append("title").text((function(t){return t.source.name+" \u2192 "+t.target.name+"\n"+c(t.value)})).style("fill","white");var r=l.append("g").selectAll(".node").data(n.nodes).enter().append("g").attr("class","node");r.append("rect").attr("x",(function(t){return t.x0})).attr("y",(function(t){return t.y0})).attr("height",(function(t){return t.y1-t.y0})).attr("width",d.nodeWidth()).style("fill",(function(t){return t.color=s(t.name.replace(/ .*/,""))})).style("stroke",(function(t){return dt.p(t.color).darker(2)})).append("title").text((function(t){return t.name+"\n"+c(t.value)})).style("fill-opacity",.9).style("shape-rendering","crispEdges"),r.append("text").attr("x",(function(t){return t.x0-6})).attr("y",(function(t){return(t.y1+t.y0)/2})).attr("dy","0.35em").attr("text-anchor","end").style("fill","white").text((function(t){return t.name})).filter((function(t){return t.x0<i/2})).attr("x",(function(t){return t.x1+6})).attr("text-anchor","start").style("pointer-events","none")}))}),[]),Object(pt.jsx)(jt,{id:"my_dataviz3"})},Ot=at.b.div(p||(p=Object(nt.a)(["\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    box-shadow: inset 0 0 0 1000px #252B2F;\n    object-fit: contain;\n    padding: 2px;\n"]))),wt=function(){return Object(Q.useEffect)((function(){var t=10,e=30,n=30,a=60,i=500-a-e,r=460-t-n,o=dt.v("#my_dataviz4").append("svg").attr("width",i+a+e).attr("height",r+t+n+10).append("g").attr("transform","translate(".concat(a,", ").concat(t,")"));dt.e("https://raw.githubusercontent.com/cashenkes/Data-Visualization-14/main/topicsCOP.csv").then((function(t){var e=t.columns.slice(1);console.log(t);var n=dt.q().domain(dt.g(t,(function(t){return t.years}))).range([0,i]);o.append("g").attr("transform","translate(0, ".concat(.8*r,")")).call(dt.b(n).tickSize(.7*-r).tickValues([1995,2e3,2005,2010,2015])).select(".domain").remove(),o.selectAll(".tick line").attr("stroke","#000"),o.append("text").attr("text-anchor","end").attr("x",i).attr("y",r-30).text("Time (years)").style("fill","#fff");var a=dt.q().domain([-500,500]).range([r,0]),c=dt.r().domain(e).range(["#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"]);console.log(dt.u);var s=dt.x().offset(dt.y).keys(e)(t),l=dt.v("#my_dataviz4").append("div").style("opacity",0).attr("class","tooltip").attr("x",0).attr("y",0).style("background-color","#58656D").style("border","solid").style("border-width","1px").style("border-radius","5px").style("padding","5px").style("position","absolute"),d=dt.a().x((function(t){return n(t.data.years)})).y0((function(t){return a(t[0])})).y1((function(t){return a(t[1])}));o.selectAll("mylayers").data(s).join("path").attr("class","myArea").style("fill",(function(t){return c(t.key)})).attr("d",d).on("mouseover",(function(t,e){l.style("opacity",.8),dt.w(".myArea").style("opacity",.2),dt.v(this).style("stroke","black").style("opacity",1)})).on("mousemove",(function(t,e,n){var a=e.key;l.html("<b>"+a+"</b>").style("left",t.pageX+"px").style("top",t.pageY+"px")})).on("mouseleave",(function(t,e){l.style("opacity",0),dt.w(".myArea").style("opacity",1).style("stroke","none")}))}))}),[]),Object(pt.jsx)(Ot,{id:"my_dataviz4"})},kt={vid:n(234),headLine:"Climate Change",description:"What is climate change?                 What are its effects?                 What can we do?                 Lets find out."},zt={lightBg:!1,imgStart:"",lightTopLine:!0,lightTextDesc:!0,description:"Earth's temperature is increasing alarmingly year by year. The graph alongside shows deviation per year from the 1951 - 1980 mean. We can clearly see an increasing trend which is a topic of grave concern. Earth's temperature has already increased by 1\xb0C and its impact is very serious and devastating. ",headLine:"Global Warming",lightText:!0,topLine:"What is Climate Change?",viz:ht},Tt={lightBg:!1,imgStart:"start",lightTopLine:!0,lightTextDesc:!0,description:"Changes in the climate conditions have affected the likelihoof of disasters significantly. The plot below shows a dramatic rise in the number of catastrophic natural disasters across different parts of the world.  ",headLine:"Never Ending Natural Disasters ",lightText:!0,topLine:"",viz:ft,additional:"*Countries whose disaster data was not available have been deleted from the graph"},Bt={lightBg:!0,imgStart:"",lightTopLine:!1,lightTextDesc:!1,description:"It is well known that the increase in greenhouse gasses has led to climate change. This plot, showing the annual global emissions of carbon dioxide (CO2), measured in million tonnes,shows the amount of CO2 that has been released in the atmosphere over the years.",headLine:"CO2",lightText:!1,topLine:"Why the climate is changing",viz:mt},Dt={lightBg:!1,imgStart:"start",lightTopLine:!0,lightTextDesc:!0,description:"Adaptation funds and their exchange cover almost all countries in the world, however only thirty countries contribute to 86% of all money. These ten countries deposited this amount of money from 2002 to 2015. After being deposited, the money then needs to be approved. When approved, money is already allocated by each fund between the countries who need them.",headLine:"The funds' journey: from donors to recipients",lightText:!0,topLine:"Adaptation Funds",viz:vt},Ft={lightBg:!1,imgStart:"start",lightTopLine:!0,lightTextDesc:!0,description:"Adaptation funds and their exchange cover almost all countries in the world, however only thirty countries contribute to 86% of all money. These ten countries deposited this amount of money from 2002 to 2015. After being deposited, the money then needs to be approved. When approved, money is already allocated by each fund between the countries who need them.",headLine:"The funds' journey: from donors to recipients",lightText:!0,topLine:"Adaptation Funds",viz:wt},Lt=n(98),Ct=(at.b.nav(u||(u=Object(nt.a)(["\nbackground: #252B2F;\nheight: 80px;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nfont-size: 1.2rem;\nposition: sticky;\ntop: 0;\nz-index: 999;\n"]))),Object(at.b)(rt)(h||(h=Object(nt.a)(["\ndisplay: flex;\njustify-content: space-between;\nheight: 80px;\n\n","\n"])),rt),Object(at.b)(ct.b)(g||(g=Object(nt.a)(["\ncolor: #D99056;\njustify-self: flex-start;\ncursor: pointer;\ntext-decoration: none;\nfont-size: 2rem;\ndisplay: flex;\nalign-items: center;\n"]))),Object(at.b)(Lt.a)(f||(f=Object(nt.a)(["\nmargin-right: 0.5;\n"]))),at.b.div(b||(b=Object(nt.a)(["\ncolor: #fff;\npadding: 160px 0;\nbackground: ",";\n"])),(function(t){return t.lightBg?"#80847E":"#252B2F"}))),Et=at.b.div(x||(x=Object(nt.a)(["\ndisplay: flex;\nmargin: 0 -15px -15px -15px;\nflex-wrap: wrap;\nalign-items: center;\nflex-direction: ",";\n"])),(function(t){return t.imgStart?"row-reverse":"row"})),At=at.b.div(m||(m=Object(nt.a)(["\nmargin-bottom: 15px;\npadding-right: 15px;\npadding-left: 15px;\nflex: 1;\nmax-width: 50%;\nflex-basis: 50%;\n\n@media screen and (max-width: 768px) {\n    max-width: 100%;\n    flex-basis: 100%;\n    display: flex;\n    justify-content: center;\n}\n"]))),St=at.b.div(_||(_=Object(nt.a)(["\nmax-width: 540px;\npadding-top: 0;\npadding-bottom: 60px;\n\n@media screen and (max-width: 768px) {\n    padding-bottom: 65px;\n}\n"]))),Yt=at.b.div(y||(y=Object(nt.a)(["\ncolor: ",";\nfont-size: 18px;\nline-height: 16px;\nletter-spacing: 1.4px;\nmargin-bottom: 16px;\n"])),(function(t){return t.lightTopLine?"#a9b3c1":"#252B2F"})),Nt=at.b.h1(j||(j=Object(nt.a)(["\nmargin-bottom: 24px;\nfont-size: 48px;\nline-height: 1.1;\ncolor: ",";\n"])),(function(t){return t.lightText?"#D99056":"#252B2F"})),Wt=at.b.p(v||(v=Object(nt.a)(["\nmax-width: 440px;\nmargin-bottom: 35px;\nfont-size: 18px;\nline-height: 24px;\ncolor: ",";\n"])),(function(t){return t.lightTextDesc?"#a9b3c1":"#1c2237"})),Vt=(at.b.div(O||(O=Object(nt.a)(["\nmax-width: 555px;\ndisplay: block;\njustify-content: ",";\n"])),(function(t){return t.start?"flex-start":"flex-end"})),at.b.img(w||(w=Object(nt.a)(["\npadding-right: 0;\nborder: 0;\nmax-width: 100%;\nvertical-align: middle;\ndisplay: inline-block;\nmax-height: 500px;\n"]))),function(t){var e=t.lightBg,n=t.imgStart,a=t.lightTopLine,i=t.lightTextDesc,r=t.description,o=t.headLine,c=t.lightText,s=t.topLine,l=t.viz;return Object(pt.jsx)(pt.Fragment,{children:Object(pt.jsx)(Ct,{lightBg:e,children:Object(pt.jsx)(rt,{children:Object(pt.jsxs)(Et,{imgStart:n,children:[Object(pt.jsx)(At,{children:Object(pt.jsxs)(St,{children:[Object(pt.jsx)(Yt,{lightTopLine:a,children:s}),Object(pt.jsx)(Nt,{lightText:c,children:o}),Object(pt.jsx)(Wt,{lightTextDesc:i,children:r})]})}),Object(pt.jsx)(At,{children:l()})]})})})})}),Mt=n(99),It=at.b.div(k||(k=Object(nt.a)(["\nbackground-color: #101522;\npadding: 4rem 0 2rem 0;\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\n"]))),Pt=at.b.section(z||(z=Object(nt.a)(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\ntext-align: center;\nmargin-bottom: 24px;\npadding: 24px;\ncolor: #fff;\n"]))),Ut=(at.b.p(T||(T=Object(nt.a)(["\nfont-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\nmargin-bottom: 24px;\nfont-size: 24px;\n"]))),at.b.p(B||(B=Object(nt.a)(["\nmargin-bottom: 24px;\nfont-size: 20px;\n"])))),qt=function(){return Object(pt.jsx)(It,{children:Object(pt.jsx)(Pt,{children:Object(pt.jsxs)(Ut,{children:["Made with ",Object(pt.jsx)(Mt.a,{})," at Delft University of Technology"]})})})},Gt=at.b.div(D||(D=Object(nt.a)(["\n    height: 100vh;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.2);\n    object-fit: contain;\n"]))),Ht=at.b.video(F||(F=Object(nt.a)(["\n    object-fit: cover;\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    z-index: -1;\n"]))),Jt=at.b.h1(L||(L=Object(nt.a)(["\n    font-size: 100px;\n    color: #fff;\n    margin-top: -100px;\n\n    @media screen and (max-width: 960px) {\n        font-size: 70px;\n        margin-top: -150px;\n    }\n\n    @media screen and (max-width: 768) {\n        font-size: 50px;\n        margin-top: -100px;\n    }\n"]))),Xt=at.b.p(C||(C=Object(nt.a)(["\n    margin-top: 8px;\n    color: #fff;\n    font-size: 32px;\n    text-align: center;\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n\n    @media screen and (max-width: 768) {\n        font-size: 30px;\n    }\n"]))),Rt=function(t){var e=t.vid,n=t.headLine,a=t.description;return Object(pt.jsxs)(Gt,{children:[Object(pt.jsx)(Ht,{src:e.default,autoPlay:!0,loop:!0,muted:!0}),Object(pt.jsx)(Jt,{children:n}),Object(pt.jsx)(Xt,{children:a})]})},Zt=(at.b.div(E||(E=Object(nt.a)(["\n    color: #D99056;\n    padding: 160px 0;\n    background: ",";\n"])),(function(t){return t.lightBg?"#80847E":"#252B2F"})),at.b.li(A||(A=Object(nt.a)(["\n    display: flex;\n    flex: 1;\n    margin: 0 1rem;\n    border-radius: 10px;\n    background-color: #fff;\n\n    @media only screen and (max-width: 1024px) {\n        display: flex;\n        margin-bottom: 2rem;\n    }\n"])))),Kt=Object(at.b)(ct.b)(S||(S=Object(nt.a)(["\n    display: flex;\n    flex-flow: column;\n    width: 100%;\n    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);\n    -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.17));\n    filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));\n    border-radius: 10px;\n    overflow: hidden;\n    text-decoration: none;\n"]))),Qt=at.b.figure(Y||(Y=Object(nt.a)(["\n    position: relative;\n    width: 100%;\n    padding-top: 67%;\n    overflow: hidden;\n"]))),$t=at.b.img(N||(N=Object(nt.a)(["\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    display: block;\n    width: 100%;\n    max-width: 100%;\n    height: 100%;\n    max-height: 100%;\n    object-fit: cover;\n    transition: all 0.2s linear;\n\n    &:hover {\n        transform: scale(1.1);\n    }\n"]))),te=at.b.div(W||(W=Object(nt.a)(["\n    padding: 20px 30px 30px;\n    text-align: center;\n"]))),ee=at.b.h5(V||(V=Object(nt.a)(["\n    color: #252e48;\n    font-size: 18px;\n    line-height: 24px;\n"]))),ne=at.b.div(M||(M=Object(nt.a)(["\n    color: #fff;\n    padding: 160px 0;\n    background: ",";\n"])),(function(t){return t.lightBg?"#80847E":"#252B2F"})),ae=at.b.h1(I||(I=Object(nt.a)(["\n    color: #1c2237;\n    text-align: center;\n"]))),ie=at.b.div(P||(P=Object(nt.a)(["\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n    max-width: 1120px;\n    width: 90%;\n    margin: 0 auto;\n"]))),re=at.b.div(U||(U=Object(nt.a)(["\n    position: relative;\n    margin: 50px 0 45px;\n"]))),oe=at.b.ul(q||(q=Object(nt.a)(["\n    margin-bottom: 24px;\n\n    @media only screen and (min-width: 1024px) {\n        display: flex;\n    }\n"]))),ce=function(t){return Object(pt.jsx)(pt.Fragment,{children:Object(pt.jsx)(Zt,{children:Object(pt.jsxs)(Kt,{to:t.path,children:[Object(pt.jsx)(Qt,{"data-category":t.label,children:Object(pt.jsx)($t,{alt:"Travel Image",src:t.src.default})}),Object(pt.jsx)(te,{children:Object(pt.jsx)(ee,{children:t.text})})]})})})},se=function(){return Object(pt.jsxs)(ne,{lightBg:!0,children:[Object(pt.jsx)(ae,{children:"Effects of Climate Change"}),Object(pt.jsx)(ie,{children:Object(pt.jsx)(re,{children:Object(pt.jsxs)(oe,{children:[Object(pt.jsx)(ce,{src:n(235),text:"Floods are causing havoc across the world",path:"/"}),Object(pt.jsx)(ce,{src:n(236),text:"Droughts have become a regular phenomenon",path:"/"}),Object(pt.jsx)(ce,{src:n(237),text:"Forst fires are raging through the amazons",path:"/"}),Object(pt.jsx)(ce,{src:n(238),text:"Melting of ice caps increases risk of flooding",path:"/"})]})})})]})},le=at.b.div(G||(G=Object(nt.a)(["\ncolor: #fff;\npadding: 160px 0;\nbackground: ",";\n"])),(function(t){return t.lightBg?"#80847E":"#252B2F"})),de=at.b.div(H||(H=Object(nt.a)(["\npadding-right: 0;\nmargin: 0 -15px -15px -15px;\nborder: 0;\nmax-width: 100%;\nheight: 100%;\nvertical-align: middle;\njustify-content: middle;\ndisplay: flex;\n"]))),pe=at.b.div(J||(J=Object(nt.a)(["\nmax-width: 100%;\npadding-top: 0;\npadding-bottom: 60px;\ntext-align: center;\n\n@media screen and (max-width: 768px) {\n    padding-bottom: 65px;\n}\n"]))),ue=at.b.div(X||(X=Object(nt.a)(["\ncolor: ",";\nfont-size: 18px;\nline-height: 16px;\nletter-spacing: 1.4px;\nmargin-bottom: 16px;\n"])),(function(t){return t.lightTopLine?"#a9b3c1":"#252B2F"})),he=at.b.h1(R||(R=Object(nt.a)(["\nmargin-bottom: 24px;\nfont-size: 48px;\nline-height: 1.1;\ncolor: ",";\n"])),(function(t){return t.lightText?"#D99056":"#252B2F"})),ge=at.b.p(Z||(Z=Object(nt.a)(["\nmax-width: 100%;\nmargin-bottom: 35px;\nfont-size: 18px;\nline-height: 24px;\ncolor: ",";\n"])),(function(t){return t.lightTextDesc?"#a9b3c1":"#1c2237"})),fe=at.b.p(K||(K=Object(nt.a)(["\nmax-width: 100%;\nmargin-bottom: 35px;\nfont-size: 10px;\nline-height: 24px;\ntext-align: right;\ncolor: ",";\n"])),(function(t){return t.lightTextDesc?"#a9b3c1":"#1c2237"})),be=function(t){var e=t.lightBg,n=(t.imgStart,t.lightTopLine),a=t.lightTextDesc,i=t.description,r=t.headLine,o=t.lightText,c=t.topLine,s=t.viz,l=t.additional;return Object(pt.jsx)(pt.Fragment,{children:Object(pt.jsx)(le,{lightBg:e,children:Object(pt.jsxs)(rt,{children:[Object(pt.jsxs)(pe,{children:[Object(pt.jsx)(ue,{lightTopLine:n,children:c}),Object(pt.jsx)(he,{lightText:o,children:r}),Object(pt.jsx)(ge,{lightTextDesc:a,children:i})]}),Object(pt.jsx)(de,{children:s()}),Object(pt.jsx)(pe,{children:Object(pt.jsx)(fe,{lightTextDesc:a,children:l})})]})})})},xe=function(){return Object(pt.jsxs)(pt.Fragment,{children:[Object(pt.jsx)(Rt,Object(lt.a)({},kt)),Object(pt.jsx)(Vt,Object(lt.a)({},zt)),Object(pt.jsx)(se,{}),Object(pt.jsx)(be,Object(lt.a)({},Tt)),Object(pt.jsx)(Vt,Object(lt.a)({},Bt)),Object(pt.jsx)(Vt,Object(lt.a)({},Ft)),Object(pt.jsx)(be,Object(lt.a)({},Dt)),Object(pt.jsx)(qt,{})]})};var me=function(){return Object(pt.jsxs)(ct.a,{basename:"/DataViz",children:[Object(pt.jsx)(ot,{}),Object(pt.jsx)(st.c,{children:Object(pt.jsx)(st.a,{path:"/",element:Object(pt.jsx)(xe,{})})})]})};et.a.render(Object(pt.jsx)($.a.StrictMode,{children:Object(pt.jsx)(me,{})}),document.getElementById("root"))}},[[239,1,2]]]);
//# sourceMappingURL=main.e1cec554.chunk.js.map