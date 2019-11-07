//  Evangeline Viray
// 	10/31/19
//  SnakeGame
//  The setup function function is called once when your program begins
var score = 0;
var food;
var snake;
var rowH = 800/20;
var colW = 800/20;
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
// load food in random location
function loadFood(){
    food = new Food(colW*round(random(20)),rowH*round(random(20)));

  }
// render food in random location
function runFood(){
  food.run();
  }
//load snake head
function loadSnake(){
  snake = new Snake(colW*10,rowH*10,0,0);
}

// run snake head
function runSnake(){
  snake.run();
}
