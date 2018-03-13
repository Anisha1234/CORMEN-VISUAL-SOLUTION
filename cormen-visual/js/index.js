var svg= d3.select('body')
		  .select('#trans')
		  .append('svg')
		  .attr('height',600)
		  .attr('width',1430)
		  .attr('x',0)
		  .attr('y',0)
for (var i = 0; i < 15; i++) {
	for (var j = 0; j < 20; j++) {
	 d3.selectAll('svg').append("rect")
	    .attr("rx",100)
	    .attr("ry",100)
	    .attr("x",function() {
	    	var gap = 100/21
	    	return gap*j + "%"
	    })
	    .attr("y",function(){
	    	var gap = 100/16
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
                      return i * 150;
                    })
                    .duration(1000)
                    .attr("rx",100)
	    			.attr("ry",100)
	    			.attr("fill","gray")
	    			.attr("width",23)
					.attr("height",23)
	    			.on("end",function(){
	    					console.log("again called")
	    					d3.select(this)
		                    .transition()
	                        .delay(function(d, i) {
	                          return i * 150;
	                        })
		                    .duration(1000)
		                    .attr("rx",0)
			    			.attr("ry",0)
			    			.attr("fill","lightblue")
			    			.attr("width",30)
							.attr("height",30)
			    			.on("end",repeated);
	    			})
                    
                    
          };

d3.selectAll('rect')
    .transition()
    .delay(function(d, i) {
            return i * 150;
          })
    .duration(1000)
    .attr("rx",0)
    .attr("ry",0)
    .attr("fill","lightblue")
    .attr("width",30)
	.attr("height",30)
    .on("end",repeated);
svg.append('rect')
		.attr("width", 570)
       	.attr("height", 800)
       	.attr("x", "50%")
       	.attr("y", "0%")
       	.attr("fill","white")
svg.append("svg:image")
              .attr("xlink:href", "./image/1.png")
              .attr("width", 570)
              .attr("height", 400)
              .attr("x", "50%")
              .attr("y", "54%")
svg.append("svg:image")
              .attr("xlink:href", "./image/1.jpg")
              .attr("width", 570)
              .attr("height", 450)
              .attr("x", "50%")
              .attr("y", "2%")
              