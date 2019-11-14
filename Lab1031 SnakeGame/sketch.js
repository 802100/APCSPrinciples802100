//  Evangeline Viray
// 	10/31/19
//  SnakeGame
//  The setup function function is called once when your program begins
var score = 0;
var gameState = 2;
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
  //title screen load 
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
  text("Snake Game", 260,200);
  //instructions
  textSize(16);
  fill(255);
  text("Use the arrow keys to controll the snake and eat the apples to grow \n" +
"Don't run into your body or the edges of the screen otherwise you lose \n" +
"                      Press the Up_Arrow to start the game", 155,400);
  if(keyCode === 38){
    gameState = 2;
  }
}

// play game screen
function playGame(){
  frameRate(10);
  background(5, 5, 5);
  textSize(20);
  fill(255);
  text("score = " + score,20,20);
  runFood();
  runSnake();
}

// end game screen
function endGame(){
  background(5,5,5);
  textSize(50);
  fill(255,0,0);
  text("You Lose!",270,200);
  textSize(20);
  fill(255);
  text("press the spacebar to restart",255,400);
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
