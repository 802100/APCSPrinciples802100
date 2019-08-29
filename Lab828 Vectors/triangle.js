//start triangle class (8/20)
//x1,y1,x2,y2,x3,y3,dx,dy(constructor)
class Triangle{
  constructor(x,y,dx,dy){
    //create new var for trianlge points
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy)
    //this.acc = createVector(0,1);
    this.clr = color(random(255),random(255),random(255));
  }

  run(){
    this.checkEdges();
    this.update();
    this.render();


  }
//keep playing with check edges
  checkEdges(){
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x;
    }
    //if(this.loc.x2 < 0){
      //this.vel.x = -this.vel.x;
    //}
    //if(this.loc.x3 < 0){
      //this.vel.x = -this.vel.x;
    //}
    if(this.loc.x > width){
      this.vel.x = -this.vel.x;
    }
    //if(this.loc.x2 > width){
      //this.vel.x = -this.vel.x;
    //}
    //if(this.loc.x3 > width){
      //this.vel.x = -this.vel.x;
    //}
    if(this.loc.y < 0){
      this.vel.y = -this.vel.y;
    }
    //if(this.loc.y2 < 0){
      //this.vel.y = -this.vel.y;
    //}
    //if(this.loc.y3 < 0){
      //this.vel.y = -this.vel.y;
    //}
    if(this.loc.y > height){
      this.vel.y = -this.vel.y;
    }
    //if(this.loc.y2 > height){
      //this.vel.y = -this.vel.y;
    //}
    //if(this.loc.y3 > height){
      //this.vel.y = -this.vel.y;
    //}
  }

  update(){
    //this.vel.add(this.acc);
    this.loc.add(this.vel);
  }
  render(){
    fill(this.clr);
    triangle(this.loc.x,this.loc.y,this.loc.x,this.loc.y,this.loc.x,this.loc.y)
  }
}// end triangle class
//line 65, add back in the individual x and y variables
