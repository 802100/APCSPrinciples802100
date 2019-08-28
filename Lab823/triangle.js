//start triangle class (8/20)
class Triangle{
  constructor(x1,x2,y1,y2,dx,dy){
    //create new var for trianlge points
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
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
    triangle(this.x,this.y,20,20)
  }
}// end triangle class
