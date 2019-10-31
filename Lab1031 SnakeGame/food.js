//Food class
//1031
//SnakeGame
class Food{
  constructor(x,y){
    this.loc = createVector(x,y);
    this.clr = color(255,0,0);
  }

  render(){
    fill(this.clr);
    rect(this.loc.x,this.loc.y,20,20);
  }




}
