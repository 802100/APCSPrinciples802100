//start ball class
//1203 ship
class Ball{
  constructor(x,y,dx,dy){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.acc = createVector(0,0);
    this.w = 50;
    this.clr = color(255);


  }

  run(){
    this.checkEdges();
    this.update();
    this.render();


  }

  checkEdges(){
    //planet warp code(still needs adjusting)
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
    var distToplanet;
    distToplanet = this.loc.dist(planet.loc);
    if(distToplanet < 450){
      //add atraction
      this.acc = p5.Vector.sub(planet.loc, this.loc);
      this.acc.normalize();
      this.acc.mult(0.1);
    }
    if(distToplanet < 100){
      //add atraction
      this.acc = p5.Vector.sub( this.loc, planet.loc);
      this.acc.normalize();
      this.acc.mult(0.5);
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
