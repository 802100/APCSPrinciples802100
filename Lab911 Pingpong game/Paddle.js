//start Paddle class (8/20)
class Paddle{
  constructor(x,y,w,h){
    this.loc = createVector(x,y);
    this.size = createVector(w,h);
    this.clr = color(255);
  }

  run(){
    this.checkEdges();
    this.update();
    this.render();

  }

  checkEdges(){


  }


  update(){
    // console.log("movement");
    var mouseLoc = createVector(mouseX,mouseY);
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09);

  }

  render(){
    // console.log("hi");
    fill(255);
    rect(this.loc.x,this.loc.y,this.size.w,this.size.h);
  }
}// end Paddle class
