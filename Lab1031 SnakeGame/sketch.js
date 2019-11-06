//  Evangeline Viray
// 	10/31/19
//  SnakeGame
//  The setup function function is called once when your program begins
var score = 0;
var food;
var snake;
var rowH = 800/20;
var colW = 800/20;
var s = 1;
var p = 0;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  loadFood();
  loadSnake();

}

//  The draw function is called @ 30 fps
function draw() {
  frameRate(15);
  background(5, 5, 5);
  textSize(20);
  fill(255);
  text("score = " + score,20,20);
  runFood();
  runSnake();

}

function loadFood(){
    food = new Food(colW*round(random(20)),rowH*round(random(20)));

  }

function runFood(){
  food.run();
  }

function loadSnake(){
  snake = new Snake(colW*10,rowH*10,0,0);
}


function runSnake(){
  snake.run();
}
