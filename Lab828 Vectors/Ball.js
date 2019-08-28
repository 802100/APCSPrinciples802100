//start ball class (8/20)
class Ball{
  constructor(x,y,dx,dy,rx,ry){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.clr = color(random(255),random(255),random(255));
  }

  run(){
    this.checkEdges();
    this.update();
    this.render();


  }

  checkEdges(){
    if(this.x < 0){
      this.dx = -this.dx;
    }
    if(this.x > width){
      this.dx = -this.dx;
    }
    if(this.y <0){
      this.dy = -this.dy;
    }
    if(this.y > height){
      this.dy = -this.dy;
    }
  }

  update(){
    this.x = this.x + this.dx;
    this.y = this.y + this.dy;
  }
  render(){
    fill(this.clr);
    ellipse(this.x,this.y,20,20)
  }
}// end ball class
