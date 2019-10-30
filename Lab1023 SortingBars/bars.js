// square class (1007)
//checkerBoard
class Bar{
  constructor(x,m){
    this.loc = x;
    this.w = barWidth;
    this.h = height - this.loc.y;
  }


render(){
  fill(250,0,250);
  rect(this.loc.x, this.loc.y, this.w, this.h);
}

slide(i){
  this.loc.x = i*20;
}
}
