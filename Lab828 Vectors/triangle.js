//start triangle class (8/20)
class Triangle{
  constructor(x1,y1,x2,y2,x3,y3,dx,dy){
    //create new var for trianlge points
    this.x1 = x1;
    this.x2 = x2;
    this.x3 = x3;
    this.y1 = y1;
    this.y2 = y2;
    this.y3 = y3;
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
    if(this.x1 < 0){
      this.dx = -this.dx;
    }
    if(this.x2 < 0){
      this.dx = -this.dx;
    }
    if(this.x3 < 0){
      this.dx = -this.dx;
    }
    if(this.x1 > width){
      this.dx = -this.dx;
    }
    if(this.x2 > width){
      this.dx = -this.dx;
    }
    if(this.x3 > width){
      this.dx = -this.dx;
    }
    if(this.y1 < 0){
      this.dy = -this.dy;
    }
    if(this.y2 < 0){
      this.dy = -this.dy;
    }
    if(this.y3 < 0){
      this.dy = -this.dy;
    }
    if(this.y1 > height){
      this.dy = -this.dy;
    }
    if(this.y2 > height){
      this.dy = -this.dy;
    }
    if(this.y3 > height){
      this.dy = -this.dy;
    }
  }

  update(){
    this.x1 = this.x1 + this.dx;
    this.x2 = this.x2 + this.dx;
    this.x3 = this.x3 + this.dx;
    this.y1 = this.y1 + this.dy;
    this.y2 = this.y2 + this.dy;
    this.y3 = this.y3 + this.dy;
  }
  render(){
    fill(this.clr);
    triangle(this.x1,this.y1,this.x2,this.y2,this.x3,this.y3)
  }
}// end triangle class
