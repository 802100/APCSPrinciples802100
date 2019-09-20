//  Evangeline
// 	8/20/19
//  This is a comment
var balls = []
var paddle;
var gameState = 1;


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
//edit out when finished fixing isCollinding
  runBalls();
  runPaddles();


}
//sart Game screen
function startGame(){
  background(50,50,50);
}
//play game screen
function playGame(){
  background(0);
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
