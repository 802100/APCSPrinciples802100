//start ship class
//1203 ship
class Ship{
  constructor(x,y,dx,dy,id){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.id = id;
    this.angle = 0;
    this.clr = color(random(255),random(255),random(255));
  }

  run(){
    this.checkEdges();
    this.update();
    this.render();

  }

  checkEdges(){

    // if(this.loc.x < 0){
    //   this.vel.x = -this.vel.x;
    // }
    // if(this.loc.x > width){
    //   this.vel.x = -this.vel.x;
    // }
    // if(this.loc.y <0){
    //   this.vel.y = -this.vel.y;
    // }
    // if(this.loc.y > height){
    //   this.vel.y = -this.vel.y;
    // }
    if(this.loc.x < 0) this.loc.x = width;
    if(this.loc.x > width) this.loc.x = 0;
    if(this.loc.y < 0) this.loc.y = height;
    if(this.loc.y > height) this.loc.y = 0;
  }

  update(){
    var distToplanet;
    if(this.id >= 0){
      distToplanet = this.loc.dist(planet.loc);
      if(distToplanet < 450){
        //add atraction
        this.acc = p5.Vector.sub(planet.loc, this.loc);
        this.acc.normalize();
        this.acc.mult(sliderAtt.value()/2);
      }

    this.vel.add(this.acc);
    this.vel.limit(4);
    this.loc.add(this.vel);


  }
}

  render(){
    fill(this.clr);
    push();
    translate(this.loc.x, this.loc.y);
    this.angle = this.vel.heading() + PI/2;
    rotate(this.angle);
    triangle(-11,14,11,14,0,-14);
    pop();


  }


}
