//Food class
//1031
//SnakeGame
class Food{
  constructor(x,y){
    this.loc = createVector(x,y);
    this.clr = color(255,0,0);
  }

  run(){
    this.checkEdges();
    this.render();
  }

  isColliding(){
    if(this.loc.x === snake.head.x &&
      this.loc.y === snake.head.y){
        return true;
      }else{
        return false;
      }
  }

  checkEdges(){
    for(var i = food.length-1; i >= 0; i--){
      if(food[i].isColliding()){
        console.log("is colliding");
        this.render();
        score = score + 1;
      }
    }
  }

  render(){
    fill(this.clr);
    rect(this.loc.x,this.loc.y,20,20);
  }




}
