// square class (1007)
//checkerBoard
class Square{
  constructor(x,y,d){
    this.loc = createVector(x,y);
    this.d = d;

  }

run(){
  this.update();
  this.render();
}

update(){



}

render(){
  fill(150,0,150);
  rect(this.loc.x, this.loc.y, this.d, this.d);
}







}
