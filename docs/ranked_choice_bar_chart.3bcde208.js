parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"I3Dm":[function(require,module,exports) {
var t=2e3,e=500,n=15,r=600,a=960,o=d3.select("body").append("svg").attr("width",a).attr("height",r),i={top:80,right:100,bottom:5,left:0},u=(r-(i.bottom+i.top))/(5*n),l=o.append("text").attr("class","title").attr("y",24).html("New York City 2021 Ranked Choice Mayoral Primary Results"),s=o.append("text").attr("class","subTitle").attr("y",55).html("Unofficial vote count for the Democratic primary as of July 6, 2021"),c=1,f="./boe_primary_results.csv";d3.csv(f).then(function(l){console.log(l),l.forEach(function(t){t.value=isNaN(t.value)?0:+t.value,t.round=+t.round,t.colour="cornflowerblue"}),console.log(l);var s=l.filter(function(t){return t.round==c&&!isNaN(t.value)}).sort(function(t,e){return e.value-t.value}).slice(0,n);s.forEach(function(t,e){return t.rank=e}),console.log("roundSlice: ",s);var f=d3.scaleLinear().domain([0,d3.max(s,function(t){return t.value})]).range([i.left,a-i.right-65]),v=d3.scaleLinear().domain([n,0]).range([r-i.bottom,i.top]),m=d3.axisTop().scale(f).ticks(a>500?5:2).tickSize(-(r-i.top-i.bottom)).tickFormat(function(t){return d3.format(",")(t)});o.append("g").attr("class","axis xAxis").attr("transform","translate(0, ".concat(i.top,")")).call(m).selectAll(".tick line").classed("origin",function(t){return 0==t}),o.selectAll("rect.bar").data(s,function(t){return t.name}).enter().append("rect").attr("class","bar").attr("x",f(0)+1).attr("width",function(t){return f(t.value)-f(0)}).attr("y",function(t){return v(t.rank)+5}).attr("height",v(1)-v(0)-u).style("fill",function(t){return"Inactive ballots"===t.name?"gray":t.colour}),o.selectAll("text.innerLabel").data(s,function(t){return t.name}).enter().append("text").attr("class","innerLabel").attr("x",function(t){return f(t.value)-8}).attr("y",function(t){return v(t.rank)+5+(v(1)-v(0))/2+1}).style("text-anchor","end").html(function(t){return t.value<1e5?"":t.name}),o.selectAll("text.outerLabel").data(s,function(t){return t.name}).enter().append("text").attr("class","outerLabel").attr("x",function(t){return f(t.value)+5}).attr("y",function(t){return v(t.rank)+5+(v(1)-v(0))/2+1}).html(function(t){return(t.value<1e5?"<tspan>"+t.name+"</tspan> ("+d3.format(",")(t.value)+" votes)":"("+d3.format(",")(t.value)+" votes)").replace("Inactive ballots","0 voters had all their choices eliminated").replace("(0 votes)","")}).style("font-style",function(t){return"Inactive ballots"===t.name?"italic":"normal"});var p=o.append("text").attr("class","roundText").attr("x",a).attr("y",r-40).style("text-anchor","end").html("Round "+~~c).call(d,10),h=(o.append("text").attr("class","caption").attr("x",a).attr("y",r-5).style("text-anchor","end").html("Chart by Sharon Lurye. Source: NYC Board of Elections").call(d,10),d3.interval(function(t){(s=l.filter(function(t){return t.round==c&&!isNaN(t.value)}).sort(function(t,e){return e.value-t.value}).slice(0,n)).forEach(function(t,e){return t.rank=e}),console.log("Intervalround: ",c,s),f.domain([0,d3.max(s,function(t){return t.value})]),o.select(".xAxis").transition().duration(e).ease(d3.easeLinear).call(m);var r=o.selectAll(".bar").data(s,function(t){return t.name});r.enter().append("rect").attr("x",f(0)+1).attr("y",function(t){return v(n+1)+5}).attr("height",v(1)-v(0)-u).style("fill",function(t){return t.colour}).transition().duration(e).ease(d3.easeLinear).attr("y",function(t){return v(t.rank)+5}),r.transition().duration(e).ease(d3.easeLinear).attr("width",function(t){return f(t.value)-f(0)}).attr("y",function(t){return v(t.rank)+5}),r.exit().transition().duration(e).ease(d3.easeLinear).attr("width",function(t){return f(t.value)-f(0)-1}).attr("y",function(t){return v(n+1)+5}).remove();var a=o.selectAll(".innerLabel").data(s,function(t){return t.name});a.enter().append("text").attr("class","innerLabel").attr("x",function(t){return f(t.value)-8}).attr("y",function(t){return v(n+1)+5+(v(1)-v(0))/2}).style("text-anchor","end").html(function(t){return t.value<1e5?"":t.name}).transition().duration(e).ease(d3.easeLinear).attr("y",function(t){return v(t.rank)+5+(v(1)-v(0))/2+1}),a.transition().duration(e).ease(d3.easeLinear).attr("x",function(t){return f(t.value)-8}).attr("y",function(t){return v(t.rank)+5+(v(1)-v(0))/2+1}),a.exit().transition().duration(e).ease(d3.easeLinear).attr("x",function(t){return f(t.value)-8}).attr("y",function(t){return v(n+1)+5}).remove();var i=o.selectAll(".outerLabel").data(s,function(t){return t.name});i.enter().append("text").attr("class","outerLabel").attr("x",function(t){return f(t.value)+5}).attr("y",function(t){return v(n+1)+5}).html(function(t){return t.value<1e5?"<tspan>"+t.name+"</tspan> ("+d3.format(",")(t.value)+" votes )":"("+d3.format(",")(t.value)+" votes)"}).transition().duration(e).ease(d3.easeLinear).attr("y",function(t){return v(t.rank)+5+(v(1)-v(0))/2+1}),i.html(function(t){var e;return e=t.value<1e5?"<tspan>"+t.name+"</tspan> ("+d3.format(",")(t.value)+" votes)":"("+d3.format(",")(t.value)+" votes)",e="Inactive ballots"===t.name?d3.format(",")(t.value)+" voters had all their choices eliminated":e.replace("(0 votes)","(eliminated)")}).transition().duration(e).ease(d3.easeLinear).attr("x",function(t){return f(t.value)+5}).attr("y",function(t){return v(t.rank)+5+(v(1)-v(0))/2+1}),i.exit().transition().duration(e).ease(d3.easeLinear).attr("x",function(t){return f(t.value)+5}).attr("y",function(t){return v(n+1)+5}).remove(),p.html("Round "+~~c),8==c&&h.stop(),c+=1},t))});var d=function(t,e){t.select(function(){return this.parentNode.insertBefore(this.cloneNode(!0),this)}).style("fill","#ffffff").style("stroke","#ffffff").style("stroke-width",e).style("stroke-linejoin","round").style("opacity",1)};
},{}]},{},["I3Dm"], null)
//# sourceMappingURL=/ranked_choice_bar_chart.3bcde208.js.map