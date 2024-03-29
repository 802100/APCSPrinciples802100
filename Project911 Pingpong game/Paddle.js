//start Paddle class (8/20)
class Paddle{
  constructor(x,y,w,h){
    this.loc = createVector(x,y);
    this.size = createVector(w,h);
    this.w = 80;
    this.h = 20;
  }

  run(){
    // console.log("running");
    this.checkEdges();
    this.update();
    this.render();

  }

  checkEdges(){
    if(this.loc.x < 0){
      this.loc.x = -this.loc.x;
    }
    if(this.loc.x > 720){
      this.loc.x = 710;
    }

  }


  update(){
    // console.log("movement");
    var mouseLoc = createVector(mouseX-50,700);
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09);


    if(gameState === 2 && mode === "easy"){
      this.w = 100;
    }
    if(gameState === 2 && mode === "med"){
      this.w = 90;
    }
    if(gameState === 2 && mode === "hard"){
      this.w = 70;
    }

  }

  render(){
    fill(255,0,0);
    rect(this.loc.x,this.loc.y,this.w,this.h);
  }
}// end Paddle class
