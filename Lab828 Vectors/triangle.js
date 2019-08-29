//start triangle class (8/20)
class Triangle{
  constructor(x1,y1,x2,y2,x3,y3,dx,dy){
    //create new var for trianlge points
    this.loc = createVector(x1,x2,x3,y1,y2,y3);
    this.vel = createVector(dx,dy);
    this.acc = createVector(0,1);
    this.clr = color(random(255),random(255),random(255));
  }

  run(){
    this.checkEdges();
    this.update();
    this.render();


  }

  checkEdges(){
    if(this.loc.x1 < 0){
      this.vel.dx = -this.vel.dx;
    }
    if(this.loc.x2 < 0){
      this.vel.dx = -this.vel.dx;
    }
    if(this.loc.x3 < 0){
      this.vel.dx = -this.vel.dx;
    }
    if(this.loc.x1 > width){
      this.vel.dx = -this.vel.dx;
    }
    if(this.loc.x2 > width){
      this.vel.dx = -this.vel.dx;
    }
    if(this.loc.x3 > width){
      this.vel.dx = -this.vel.dx;
    }
    if(this.loc.y1 < 0){
      this.vel.dy = -this.vel.dy;
    }
    if(this.loc.y2 < 0){
      this.vel.dy = -this.vel.dy;
    }
    if(this.loc.y3 < 0){
      this.vel.dy = -this.vel.dy;
    }
    if(this.loc.y1 > height){
      this.vel.dy = -this.vel.dy;
    }
    if(this.loc.y2 > height){
      this.vel.dy = -this.vel.dy;
    }
    if(this.loc.y3 > height){
      this.vel.dy = -this.vel.dy;
    }
  }

  update(){
    this.vel.add(this.acc);
    this.loc.add(this.vel);
  }
  render(){
    fill(this.clr);
    triangle(this.loc.x1,this.loc.y1,this.loc.x2,this.loc.y2,this.loc.x3,this.loc.y3)
  }
}// end triangle class
