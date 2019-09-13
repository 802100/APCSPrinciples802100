//start rect class (8/20)
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
    //colliding with ball?
    function isColliding(){
      if(this.loc.x>paddle.loc.x &&
        this.loc.x<paddle.loc.x + w &&
        this.loc.y>paddle.loc.y &&
        this.loc.y<paddle.loc.y + h){
          return true;
        }else{
          return false;
        }
    }
  }


  update(){
    var mouseLoc = createVector(mouseX,mouseY);
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09);

  }

  render(){
    fill(this.clr);
    rect(this.loc.x,this.loc.y,this.w, this.h);
  }
}// end rect class
