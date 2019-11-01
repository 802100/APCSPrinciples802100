//Snake class
//1031
//SnakeGame
class Snake{
  constructor(x,y,dx,dy){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.clr = color(0,255,0);
  }

  run(){
    this.checkEdges();
    this.update();
    this.render();
  }

checkEdges(){
  if(this.loc.x < 0){
    this.loc.x = -this.loc.x;
  }
  if(this.loc.x > width){
    this.loc.x = 780;
  }
  if(this.loc.y <0){
    this.loc.y = -this.loc.y;
  }
  if(this.loc.y > height){
    this.loc.y = 780;
  }
}


update(){
  if(keyIsDown(RIGHT_ARROW)){
    this.vel.x = 20;
  }else if(keyIsDown(LEFT_ARROW)){
    this.vel.x = -20;
  }else if(keyIsDown(UP_ARROW)){
    this.vel.y = -20;
  }else if(keyIsDown(DOWN_ARROW)){
    this.vel.y = 20;
  }else{
    this.vel.x = 0;
    this.vel.y = 0
  }
  this.loc.add(this.vel);

}

render(){
  fill(this.clr);
  rect(this.loc.x, this.loc.y, 20,20);
}


}
