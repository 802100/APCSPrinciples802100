// square class (1007)
//checkerBoard
class Ball{
  constructor(x,c){
    this.loc = x;
    this.w = ballWidth;
    this.h = 20;
    this.c = c;
    this.clr = color(c,0,0);
  }
  run(){
    for(var i = 0; i < balls.length; i++){
      balls[i].slide(i);
    }
    this.render();
  }

render(){
  fill(this.clr);
  ellipse(this.loc.x, this.loc.y, this.w, this.h);
}

slide(i){
  this.loc.x = i*20+200;
}
}
