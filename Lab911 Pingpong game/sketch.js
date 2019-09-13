//  Evangeline
// 	8/20/19
//  This is a comment
var balls = []
var rects = []
var paddles = []

//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  loadBalls(10);
  loadRects(0);
  loadPaddles(1);



}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5, 40);
  runBalls();
  runRects();
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
//load rects
function loadRects(n){
  for(var i = 0; i < n; i++){
    rects[i] = new Rect(mouseX, mouseY, 80, 10);
  }
}

function runRects(){
  for(var i = 0; i < rects.length; i++){
    rects[i].run();
  }
}

function loadPaddles(n){
  for(var i = 0; i < n; i++){
    paddles[i] = new Paddle(400,700,80,10);
  }
}

function runPaddles(){
  for(var i = 0; i < paddles.length; i++){
    paddles[i].run();
  }
}
