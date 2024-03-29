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
// snake eats apple?
  isColliding(){
    if(this.loc.x === snake.head.x &&
      this.loc.y === snake.head.y){
        return true;
      }else{
        return false;
      }
  }
// food appears on body?
  appearOnBody(){
    for(var i = snake.body.length -1; i > 0; i--){
      if(this.loc.x === snake.body[i].x &&
        this.loc.y === snake.body[i].y){
          return true;
        }else{
          return false;
        }
    }
  }

  checkEdges(){
    //if food is being eaten - load new food, load new body segment, update score
    if(food.isColliding()){
      snake.loadSegments();
      loadFood();

      score = score + 20;
    }
    //if food appears on body - reload
    if(food.appearOnBody()){
      console.log("colliding with body");
      loadFood();
    }
  }

  render(){
    fill(this.clr);
    rect(this.loc.x,this.loc.y,20,20);
  }




}
