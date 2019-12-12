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
    var distToShip;
    for(var i = 0; i < ships.length; i++){
      distToShip = this.loc.dist(ships[i].loc);
      if(distToShip < 100){
        this.loc.x = random(width);
        this.loc.y = random(height);
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
