//  Evangeline Viray
// 	10/31/19
//  SnakeGame
//  The setup function function is called once when your program begins
var score;
var food = [];
var snake = [];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  loadFood(5);
  loadSnake(1);

}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5);
  runFood();
  runSnake();

}

function loadFood(n){
  for(var i = 0; i < n; i++){
    food[i] = new Food(random(width), random(height));
  }
}

function runFood(){
  for(var i = 0; i < food.length; i++){
    food[i].render();
  }
}

function loadSnake(n){
  for(var i = 0; i<n; i++){
    snake[i] = new Snake(400,400,0,0);
  }
}

function runSnake(){
  for(var i = 0; i < snake.length; i++){
    snake[i].run();
  }
}
