var svg= d3.select('body')
		  .select('#trans')
		  .append('svg')
		  .attr('height',600)
		  .attr('width',700)
		  .attr('x',0)
		  .attr('y',0)
for (var i = 0; i < 10; i++) {
	for (var j = 0; j < 15; j++) {
	 d3.selectAll('svg').append("rect")
	    .attr("rx",100)
	    .attr("ry",100)
	    .attr("x",function() {
	    	var gap = 100/16
	    	return gap*j + "%"
	    })
	    .attr("y",function(){
	    	var gap = 100/11
	    	return gap*i +5+ "%"
	    })
	    .attr("width",23)
	    .attr("height",23)
	    .attr("fill","gray")
	 }
}
var repeated=function() {
	console.log("repeated called")
              d3.select(this)
                    .transition()
                    .delay(function(d, i) {
                      return i * 100;
                    })
                    .duration(1000)
                    .attr("rx",100)
	    			.attr("ry",100)
	    			.attr("width",23)
					.attr("height",23)
	    			.on("end",function(){
	    					console.log("again called")
	    					d3.select(this)
		                    .transition()
	                        .delay(function(d, i) {
	                          return i * 100;
	                        })
		                    .duration(1000)
		                    .attr("rx",0)
			    			.attr("ry",0)
			    			.attr("width",30)
							.attr("height",30)
			    			.on("end",repeated);
	    			})
                    
                    
          };

d3.selectAll('rect')
    .transition()
    .delay(function(d, i) {
            return i * 100;
          })
    .duration(1000)
    .attr("rx",0)
    .attr("ry",0)
    .attr("width",30)
	.attr("height",30)
    .on("end",repeated);
svg.append("svg:image")
              .attr("xlink:href", "./image/1.png")
              .attr("width", 570)
              .attr("height", 300)
              .attr("x", "6%")
              .attr("y", "17%")
              