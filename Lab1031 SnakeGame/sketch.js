//  Evangeline Viray
// 	10/31/19
//  SnakeGame
//  The setup function function is called once when your program begins
var score = 0;
var gameState = 1;
var food;
var snake;
var rowH = 800/20;
var colW = 800/20;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
// generate food and snake
  loadFood();
  loadSnake();

}

//  The draw function is called @ 30 fps
function draw() {
  if(gameState === 1){
    titleScreen();
  }else if(gameState === 2){
    playGame();
  }else if(gameState === 3){
    endGame();
  }


}

//title screen
function titleScreen(){
  //setup
  score = 0
  background(5,5,5);
  //title
  textSize(40);
  fill(0,255,0);
  text("Snake Game", 265,200);
  //instructions
  textSize(16);
  fill(255);
  text("                    Use the arrow keys to controll the snake\n" +
   "                      Eat the apples to grow and earn points \n" +
   "Don't run into your body or the edges of the screen otherwise you lose", 155,400);
   fill(250,0,250);
   text("Press Up_Arrow to start game", 275,500);
//start game key
  if(keyCode === 38){
    gameState = 2;
  }
}

// play game screen
function playGame(){
  frameRate(10);
  background(5, 5, 5);
  //score
  textSize(20);
  fill(255);
  text("score = " + score,20,20);
  //render the food and snake
  runFood();
  runSnake();
}

// end game screen
function endGame(){
  background(5,5,5);
  //Game Over text
  textSize(50);
  fill(255,0,0);
  text("Game Over",270,200);
  //final score
  textSize(20);
  fill(250,0,250);
  text("final score = " + score,320,400);
  //reset game
  textSize(20);
  fill(255);
  text("press the spacebar to restart",255,450);
  //reset key
  if(keyCode === 32){
    loadFood();
    loadSnake();
    gameState = 1;
  }

}

// load food in random location
function loadFood(){
    food = new Food(colW*Math.floor(random(20)),rowH*Math.floor(random(20)));

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
