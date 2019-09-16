//  Evangeline
// 	8/20/19
//  This is a comment
var balls = []
var paddle;

//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  loadBalls(10);
  loadPaddles();



}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5, 40);
  runBalls();
  runPaddles();





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
  paddle.run();
}
