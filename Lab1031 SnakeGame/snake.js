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


}

update(){
  if(keyIsDown(RIGHT_ARROW)){
    this.vel.x = 20
  }else if(keyIsDown(LEFT_ARROW)){
    this.vel.x = -20
  }else{
    this.vel.x = 0;
  }
  this.loc.add(this.vel);

}

render(){
  fill(this.clr);
  rect(this.loc.x, this.loc.y, 20,20);
}


}
