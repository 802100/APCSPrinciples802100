//start ball class (8/20)
//rotation
class Ball{
  constructor(x,y,dx,dy){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.acc = createVector(0,0);
    this.w = 20;
    this.clr = color(random(255),random(255),random(255));


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
    this.vel.limit(4);
    this.loc.add(this.vel);
  }
  render(){
    fill(this.clr);
    ellipse(this.loc.x,this.loc.y,this.w,this.w);
  }
}// end ball class
