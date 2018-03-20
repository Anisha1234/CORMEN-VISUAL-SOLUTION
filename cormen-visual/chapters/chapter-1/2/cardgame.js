class backend {
  constructor(){
    this.matrix = [5,6,8,0];
  }


};

class frontend {
  constructor(parent){
    this.be = new backend();
    this.parent = parent 
    this.width = 668
    this.height = 210
    this.matrix1 = new Array
    this.matrix2 = new Array
    this.imagearray = [5,6,8,0]
    this.checkrepeat = [0,0,0,0]
    this.imagearray1 = ["../../.././image/5card.png","../../.././image/6card.png","../../.././image/8card.png","../../.././image/0card.png"]
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
                  .attr("fill","white")
                  .attr("stroke","black");
  this.svg2 = this.parent
                  .select(".solution")
                  .append('svg')
                  .attr("height",this.height)
                  .attr("width",this.width)
  this.svg2.append('rect')
                  .attr("x",10)
                  .attr("y",0)
                  .attr("height",this.height)
                  .attr("width",this.width-25)
                  .attr("fill","white")
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
                      .attr("width", 165)
                      .attr("height", 165)
                      .attr("x", i*165)
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
        this.svg2.append("svg:image")
                        .attr("xlink:href",this.imagearray1[prob])
                        .attr("width", 165)
                        .attr("height", 165)
                        .attr("x", this.matrix2.length*165)
                        .attr("y", 15)
                       .on('click',() => {this.update(prob1)})
      this.matrix2.push(this.imagearray[prob])
      console.log(this.matrix2)
      }
    }
  update(prob1){
    var index = this.matrix2.indexOf(prob1);
    if (index > -1) {
        this.matrix2.splice(index, 1);
    }
    for (var i = 0; i < this.matrix2.length; i++) {
      this.svg2.append("svg:image")
                        .attr("xlink:href",this.imagearray1[this.matrix2[i]])
                        .attr("width", 165)
                        .attr("height", 165)
                        .attr("x", this.matrix2.length*165)
                        .attr("y", 15)
                       .on('click',() => {this.update(prob1)})
    }
    console.log(this. matrix2)
  }
};

var fe = new frontend(d3.select('body').select("#cardgame"))