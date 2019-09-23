//  Evangeline
// 	8/20/19
//  This is a comment
var balls = []
var paddle;
var gameState = 1;
var difficulty = 0;
var n = 5;
var lives = 10;


//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  // background(5, 5, 5);
  loadBalls(n);
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
//edit out when finished fixing isCollinding
  // runBalls();
  // runPaddles();


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
      gameState = 2;
    }
  if(mouseIsPressed &&
    mouseX>350 && mouseX<430 &&
    mouseY>600 && mouseY<640){
      gameState = 2;
    }
  if(mouseIsPressed &&
    mouseX>500 && mouseX<580 &&
    mouseY>600 && mouseY<640){
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
  paddle = new Paddle(400,700,80,20);
}

function runPaddles(){
  // console.log("inside runPaddles");
  paddle.run();
}
