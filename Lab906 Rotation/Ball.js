//start ball class (8/20)
//rotation
class Ball{
  constructor(x,y,dx,dy,id){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.acc = createVector(0,0);
    this.id = id;
    this.w = 20;
    this.clr = color(random(255),random(255),random(255));

    if(this.id < 0){
      this.clr = (255);
      this.w = 50;
    }
  }

  run(){
    this.checkEdges();
    this.update();
    this.render();


  }

  checkEdges(){
    //mainball warp code(still needs adjusting)
    if(this.id < 0){
      if(this.loc.x < 0){
        this.loc.x = width;
      }
      if(this.loc.x > width){
        this.loc.x = 0;
      }
      if(this.loc.y < 0){
        this.loc.y = height;
      }
      if(this.loc.y > height){
        this.loc.y = 0;
      }

    }else{
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

  }

  update(){
    var distToAtBall;
    if(this.id >= 0){
      distToAtBall = this.loc.dist(atBall.loc);
      if(distToAtBall < 450){
        //add atraction
        this.acc = p5.Vector.sub(atBall.loc, this.loc);
        this.acc.normalize();
        this.acc.mult(0.1);
      }
      if(distToAtBall < 150){
        //add atraction
        this.acc = p5.Vector.sub( this.loc, atBall.loc);
        this.acc.normalize();
        this.acc.mult(0.5);
      }

    }
    this.vel.add(this.acc);
    this.vel.limit(4);
    this.loc.add(this.vel);
  }
  render(){
    fill(this.clr);
    ellipse(this.loc.x,this.loc.y,this.w,this.w);
  }
}// end ball class
