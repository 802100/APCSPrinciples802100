//start Paddle class (8/20)
class Paddle{
  constructor(x,y,w,h){
    this.loc = createVector(x,y);
    this.size = createVector(w,h);
    this.clr = color(255);
  }

  run(){
    // console.log("running");
    this.checkEdges();
    this.update();
    this.render();

  }

  checkEdges(){


  }


  update(){
    // console.log("movement");
    var mouseLoc = createVector(mouseX,700);
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09);

    if(this.loc.x < 0){
      this.loc.x = -this.loc.x;
    }
    if(this.loc.x > width-80){
      this.loc.x = -this.loc.x;
    }

  }

  render(){
    // console.log("render");
    fill(255);
    rect(this.loc.x,this.loc.y,80,20);
  }
}// end Paddle class
