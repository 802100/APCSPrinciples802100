//Snake class
//1031
//SnakeGame
class Snake{
  constructor(x,y,dx,dy){
    this.head = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.clr = color(0,255,0);
    this.body = [];
  }

  loadSegments(){
    this.body.push(createVector(0,0));
  }

  run(){
    this.checkEdges();
    this.update();
    this.render();
    this.loadSegments();
  }


checkEdges(){

  if(this.head.x < 0){
    this.head.x = -this.head.x;
  }
  if(this.head.x > width){
    this.head.x = 780;
  }
  if(this.head.y <0){
    this.head.y = -this.head.y;
  }
  if(this.head.y > height){
    this.head.y = 780;
  }
}


update(){
  if(keyIsDown(RIGHT_ARROW)){
    this.vel.x = 20;
    this.vel.y = 0;
  }else if(keyIsDown(LEFT_ARROW)){
    this.vel.x = -20;
    this.vel.y = 0;
  }else if(keyIsDown(UP_ARROW)){
    this.vel.y = -20;
    this.vel.x = 0;
  }else if(keyIsDown(DOWN_ARROW)){
    this.vel.y = 20;
    this.vel.x = 0;
  }else{
    // this.vel.x = 0;
    // this.vel.y = 0
  }
  //update Body
  this.body[0].x = this.head.x;
  this.body[0].y = this.head.y;
  //update head
  this.head.add(this.vel);

}

render(){
  //load head
  fill(this.clr);
  rect(this.head.x, this.head.y, 20,20);
//load body
  for(var i = 0; i < this.body.length; i++){
    rect(this.body[i].x, this.body[i].y, 20,20);
  }
}


}
