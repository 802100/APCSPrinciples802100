//start rect class (8/20)
class Rect{
  constructor(x,y,dx,dy,id){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.acc = createVector(0,0);
    this.id = id;
    this.clr = color(random(255),random(255),random(255));
  }

  run(){
    this.checkEdges();
    this.update();
    this.render();


  }

  checkEdges(){
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
    var distToMainBall;
    if(this.id >= 0){
      distToMainBall = this.loc.dist(mainBall.loc);
      if(distToMainBall < 450){
        //add atraction
        this.acc = p5.Vector.sub(mainBall.loc, this.loc);
        this.acc.normalize();
        this.acc.mult(0.1);
      }
      if(distToMainBall < 150){
        //add atraction
        this.acc = p5.Vector.sub( this.loc, mainBall.loc);
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
    rect(this.loc.x,this.loc.y,20,20)
  }
}// end rect class
