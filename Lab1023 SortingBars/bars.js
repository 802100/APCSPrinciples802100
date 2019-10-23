// square class (1007)
//checkerBoard
class Bar{
  constructor(x){
    this.x = x;
    this.h = random(0,height);
    this.clr = color(255,0,0);
  }

run(){
  this.render();
}

render(){
  fill(this.clr);
  rect(this.x, height, 50, this.h);
}
}
