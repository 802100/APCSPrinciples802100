//  Evangeline
// 	8/20/19
//  This is a comment
var balls = []
var paddle;
var gameState = 1;
var mode = "easy";
var difficulty = 0;
var w = 80;
var h = 20;
var lives = 10;


//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  // background(5, 5, 5);
  loadBalls(10);
  loadPaddles();



}

//  The draw function is called @ 30 fps
function draw() {
  if(gameState === 1){
    startGame();
  }else if(gameState === 2){
    playGame();
  }else if(gameState === 3){
    endGame();
  }

}

//sart Game screen
function startGame(){
  background(50,50,50);
  //title
  textSize(50);
  fill(255);
  text("PaddleBall",270,200);
  //dificulty setting
  textSize(20);
  fill(0,50,250);
  rect(200,600,70,40);
  fill(255);
  text("easy",215,625);
  fill(250,0,250);
  rect(350,600,70,40);
  fill(255);
  text("med",365,625);
  fill(255,0,0);
  rect(500,600,70,40);
  fill(255);
  text("hard",515,625);
  //dificulty
  if(mouseIsPressed &&
    mouseX>200 && mouseX<280 &&
    mouseY>600 && mouseY<640){
      mode = "easy";
      gameState = 2;
    }
  if(mouseIsPressed &&
    mouseX>350 && mouseX<430 &&
    mouseY>600 && mouseY<640){
      mode = "med";
      gameState = 2;
    }
  if(mouseIsPressed &&
    mouseX>500 && mouseX<580 &&
    mouseY>600 && mouseY<640){
      mode = "hard";
      gameState = 2;
    }

}

//play game screen
function playGame(){
  background(0);
  textSize(10);
  fill(255);
  text("lives = " + lives,20,20);
  runBalls();
  runPaddles();
}
//end game scren
function endGame(){
  background(50,50,50);
  //title
  textSize(50);
  fill(255);
  text("PaddleBall",270,200);
  //new game?
  textSize(30);
  fill(250,0,250);
  rect(300,600,80,50);
  fill(255);
  text("New Game",315,625);
  fill(255,0,0);
  rect(300,600,80,50);
  fill(255);
  text("Quit",315,625);

}


//load balls
function loadBalls(n){

  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width),random(height),random(-8,8),random(-8,8), i);
  }
}

function runBalls(){
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}

function loadPaddles(){
  paddle = new Paddle(400,700,w,h);
}

function runPaddles(){
  // console.log("inside runPaddles");
  paddle.run();
}
