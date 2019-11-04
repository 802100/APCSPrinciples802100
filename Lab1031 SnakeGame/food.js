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
    if(this.loc.x === snake[0].loc.x &&
      this.loc.y === snake[0].loc.y){
        return true;
      }else{
        return false;
      }
  }

  checkEdges(){
    // console.log("running checkEdges");
    for(var i = food.length-1; i >= 0; i--){
      if(food[i].isColliding()){
        console.log("is colliding");
        food.splice(i,1);
        p = p+1;
        loadSnake(s+p);
        loadFood(1);
      }
    }
  }

  render(){
    fill(this.clr);
    rect(this.loc.x,this.loc.y,20,20);
  }




}
