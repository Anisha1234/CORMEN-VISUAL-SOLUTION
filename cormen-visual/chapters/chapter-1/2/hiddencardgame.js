class backendh {
  constructor(){
    this.matrixh = [5,6,8,0];
  }


};

class frontendh {
  constructor(parenth){
    this.beh = new backendh();
    this.parenth = parenth 
    this.widthh = 468
    this.heighth = 140
    this.matrixh1 = new Array //div-1 values
    this.matrixh2 = new Array //div-2 values
    this.imagearrayh = [5,6,8,0] 
    this.imagearray0h = new Array //div-2 images
    this.transitionarrayh = new Array
    this.imagearray1h = ["../../.././image/5card.png","../../.././image/6card.png","../../.././image/8card.png","../../.././image/0card.png"]
    this.checkrepeath = [0,0,0,0]
    this.drawh() 
  }
drawh(){
  this.svg1h = this.parenth
                  .select(".problem1")
                  .append('svg')
                  .attr("height",this.heighth)
                  .attr("width",this.widthh);
  this.svg1h.append('rect')
                  .attr("x",0)
                  .attr("y",0)
                  .attr("height",this.heighth)
                  .attr("width",this.widthh-20)
                  .attr("fill","red")
                  .attr("stroke","black");
  this.svg2h = this.parenth
                  .select(".solution1")
                  .append('svg')
                  .attr("height",this.heighth)
                  .attr("width",this.widthh)
  this.rect2h = this.svg2h.append('rect')
                  .attr("x",10)
                  .attr("y",0)
                  .attr("height",this.heighth)
                  .attr("width",this.widthh-20)
                  .attr("fill","yellow")
                  .attr("stroke","black")
    for (var i = 0; i < 4; i++) {
       this.repeath(i);
    }
 
  }//end of draw

  repeath(i){
        var prob = Math.round(Math.random()*3)
        if (this.checkrepeath[prob]==1) {
          console.log("mismatch encountered")
          this.repeath(i);
        }
        else{
          this.matrixh1.push(this.imagearrayh[prob])
          this.checkrepeath[prob]= 1
          this.svg1h.append("svg:image")
                      .attr("xlink:href", "../../.././image/unknown.jpeg")
                      .attr("width", 115)
                      .attr("height",115)
                      .attr("x", i*115)
                      .attr("y", 15)
                      .on('click',() => {this.addedh(prob)})
        }
    }// end of repeat for avoidance of repeating of cards
  addedh(prob){
    var prob1 = this.imagearrayh[prob]
      if(this.matrixh2.length>3){
        alert("CAN NOT APPEND MORE CARDS")
      }
      else{
        var i = this.imagearray0h.length
        this.imagearray0h[i]=this.svg2h.append("svg:image")
                                                    .attr("xlink:href",this.imagearray1h[prob])
                                                    .attr("width", 115)
                                                    .attr("height", 115)
                                                    .attr("x", this.matrixh2.length*115)
                                                    .attr("y", 15)
                                                   .on('click',() => {this.updateh(i,prob1)})
      this.transitionarrayh.push(this.imagearray0h[i])
      this.matrixh2.push(prob1)
      //console.log("index of card selected : "+i)
      console.log("value that is added : "+this.matrixh2)
      console.log(this.transitionarrayh)
      if (this.matrixh2.length==4 && this.matrixh2[0]==this.imagearrayh[0] && this.matrixh2[1]==this.imagearrayh[1] && this.matrixh2[2]==this.imagearrayh[2] && this.matrixh2[3]==this.imagearrayh[3]) {
       this.rect2h
              .transition()
              .delay(0)
              .duration(500)
              .attr("fill","green")
      }
    }
  }
  updateh(i,prob1){
    // console.log("index of card removed : "+i)
    // console.log("value that is removed" + prob1)
    this.imagearray0h[i].remove();
      var index = this.matrixh2.indexOf(prob1);
      if (index > -1) {
            this.matrixh2.splice(index, 1);
      }
    var index1 = this.transitionarrayh.indexOf( this.imagearray0h[i]);
    if (index1 > -1) {
            this.transitionarrayh.splice(index1, 1);
    }
    // console.log("sorted array : "+this.matrix2)
    // console.log(this.transitionarray)
    for (var k= 0; k < this.transitionarrayh.length; k++) {
      this.transitionarrayh[k]
              .transition()
              .delay(0)
              .duration(1000)
              .attr("x", k*115) 
    }
  }
};

var feh = new frontendh(d3.select('body').select("#cardgame"))
d3.select("#restart1")
  .on("click",function() {
    restarting1();
    reassigning1();
  })
function restarting1() {
  d3.selectAll('.solution1').selectAll("svg").remove()
  d3.selectAll('.problem1').selectAll("svg").remove()
  }
function reassigning1() {
  new frontendh(d3.select('body').select("#cardgame"))
  }