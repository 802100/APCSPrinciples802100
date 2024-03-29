//start ball class (8/20)
//rotation
class Ball{
  constructor(x,y,dx,dy){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.acc = createVector(0,0.1);
    this.w = 20;
    this.clr = color(random(255),random(255),random(255));


    }

  run(){
    this.checkEdges();
    this.update();
    this.render();


  }

  isColliding(){
    if(this.loc.x>paddle.loc.x &&
      this.loc.x<paddle.loc.x + paddle.w &&
      this.loc.y>paddle.loc.y &&
      this.loc.y<paddle.loc.y + paddle.h){
        return true;
      }else{
        return false;
      }

  }


  checkEdges(){
    //if colliding with paddle
    for(var i = balls.length -1; i >= 0; i--){
      if(balls[i].isColliding() && this.vel.y < 0){
        console.log("collision");
        lives = lives - 1;
        loadBalls(b + 3);
        clear();
      }else if(balls[i].isColliding()){
        score = score + 20;
        balls.splice(i,1)
      }
    }

      if(this.loc.x < 0){
        this.vel.x = -this.vel.x;
      }
      if(this.loc.x > width){
        this.vel.x = -this.vel.x;
      }
      if(this.loc.y <0){
        this.vel.y = -this.vel.y;
      }
      if(this.loc.y > height){
        this.vel.y = -this.vel.y;
      }



  }

  update(){


    this.vel.add(this.acc);
    this.loc.add(this.vel);
  }
  render(){
    fill(this.clr);
    ellipse(this.loc.x,this.loc.y,this.w,this.w);
  }
}// end ball class
