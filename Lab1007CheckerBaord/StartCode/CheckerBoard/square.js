// square class (1007)
//checkerBoard
class Square{
  constructor(x,y,d){
    this.loc = createVector(x,y);
    this.d = d;
    this.clr = color(0);
  }

run(){
  this.render();
}

render(){
  fill(this.clr);
  rect(this.loc.x, this.loc.y, this.d, this.d);
}







}
