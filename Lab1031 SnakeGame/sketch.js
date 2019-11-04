//  Evangeline Viray
// 	10/31/19
//  SnakeGame
//  The setup function function is called once when your program begins
var score;
var food = [];
var snake = [];
var rowH = 800/20;
var colW = 800/20;
var s = 1;
var p = 0;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  loadFood(5);
  loadSnake(s);

}

//  The draw function is called @ 30 fps
function draw() {
  frameRate(15);
  background(5, 5, 5);
  runFood();
  runSnake();

}

function loadFood(n){
  for(var i = 0; i < n; i++){
    food[i] = new Food(colW*round(random(20)),rowH*round(random(20)));
  }
}

function runFood(){
  for(var i = 0; i < food.length; i++){
    food[i].run();
  }
}

function loadSnake(n){
  for(var i = 0; i<n; i++){
    if(i === 0){
      //snake head
      snake[i] = new Snake(colW*10,rowH*10,0,0);
    }else if(i > 0){
      //snake body
      snake[i] = new Snake(snake[0].loc.x - 20,snake[0].loc.y,0,0);
    }
  }
}

function runSnake(){
  for(var i = 0; i < snake.length; i++){
    snake[i].run();
  }
}
