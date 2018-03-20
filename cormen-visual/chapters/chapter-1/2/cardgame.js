class backend {
  constructor(){
    this.matrix = [5,6,8,0];
  }


};

class frontend {
  constructor(parent){
    this.be = new backend();
    this.parent = parent 
    this.width = 468
    this.height = 140
    this.matrix1 = new Array //div-1 values
    this.matrix2 = new Array //div-2 values
    this.imagearray = [5,6,8,0] 
    this.imagearray0 = new Array //div-2 images
    this.transitionarray = new Array
    this.imagearray1 = ["../../.././image/5card.png","../../.././image/6card.png","../../.././image/8card.png","../../.././image/0card.png"]
    this.checkrepeat = [0,0,0,0]
    this.draw() 
  }
draw(){
  this.svg1 = this.parent
                  .select(".problem")
                  .append('svg')
                  .attr("height",this.height)
                  .attr("width",this.width);
  this.svg1.append('rect')
                  .attr("x",0)
                  .attr("y",0)
                  .attr("height",this.height)
                  .attr("width",this.width-20)
                  .attr("fill","red")
                  .attr("stroke","black");
  this.svg2 = this.parent
                  .select(".solution")
                  .append('svg')
                  .attr("height",this.height)
                  .attr("width",this.width)
  this.rect2 = this.svg2.append('rect')
                  .attr("x",10)
                  .attr("y",0)
                  .attr("height",this.height)
                  .attr("width",this.width-20)
                  .attr("fill","yellow")
                  .attr("stroke","black")
    for (var i = 0; i < 4; i++) {
       this.repeat(i);
    }
 
  }//end of draw

  repeat(i){
        var prob = Math.round(Math.random()*3)
        if (this.checkrepeat[prob]==1) {
          console.log("mismatch encountered")
          this.repeat(i);
        }
        else{
          this.matrix1.push(this.imagearray[prob])
          this.checkrepeat[prob]= 1
          this.svg1.append("svg:image")
                      .attr("xlink:href", this.imagearray1[prob])
                      .attr("width", 115)
                      .attr("height",115)
                      .attr("x", i*115)
                      .attr("y", 15)
                      .on('click',() => {this.added(prob)})
        }
    }// end of repeat for avoidance of repeating of cards
  added(prob){
    var prob1 = this.imagearray[prob]
      if(this.matrix2.length>3){
        alert("CAN NOT APPEND MORE CARDS")
      }
      else{
        var i = this.imagearray0.length
        this.imagearray0[i]=this.svg2.append("svg:image")
                                                    .attr("xlink:href",this.imagearray1[prob])
                                                    .attr("width", 115)
                                                    .attr("height", 115)
                                                    .attr("x", this.matrix2.length*115)
                                                    .attr("y", 15)
                                                   .on('click',() => {this.update(i,prob1)})
      this.transitionarray.push(this.imagearray0[i])
      this.matrix2.push(prob1)
      //console.log("index of card selected : "+i)
      console.log("value that is added : "+this.matrix2)
      console.log(this.transitionarray)
      if (this.matrix2.length==4 && this.matrix2[0]==this.imagearray[0] && this.matrix2[1]==this.imagearray[1] && this.matrix2[2]==this.imagearray[2] && this.matrix2[3]==this.imagearray[3]) {
       this.rect2
              .transition()
              .delay(0)
              .duration(500)
              .attr("fill","green")
      }
    }
  }
  update(i,prob1){
    // console.log("index of card removed : "+i)
    // console.log("value that is removed" + prob1)
    this.imagearray0[i].remove();
      var index = this.matrix2.indexOf(prob1);
      if (index > -1) {
            this.matrix2.splice(index, 1);
      }
    var index1 = this.transitionarray.indexOf( this.imagearray0[i]);
    if (index1 > -1) {
            this.transitionarray.splice(index1, 1);
    }
    // console.log("sorted array : "+this.matrix2)
    // console.log(this.transitionarray)
    for (var k= 0; k < this.transitionarray.length; k++) {
      this.transitionarray[k]
              .transition()
              .delay(0)
              .duration(1000)
              .attr("x", k*115) 
    }
  }
};

var fe = new frontend(d3.select('body').select("#cardgame"))
d3.select("#restart")
  .on("click",function() {
    restarting();
    reassigning();
  })
function restarting() {
  d3.selectAll('.solution').selectAll("svg").remove()
  d3.selectAll('.problem').selectAll("svg").remove()
  }
function reassigning() {
  new frontend(d3.select('body').select("#cardgame"))
  }