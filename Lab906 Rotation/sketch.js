//  Evangeline
// 	8/20/19
//  This is a comment
var balls = []
var rects = []
var ships = []
var atBall;
var repBall;
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  loadBalls(0);
  loadRects(0);
  loadShips(20);


}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5, 40);
  runBalls();
  runRects();
  runShips();




}
//load balls
function loadBalls(n){
  atBall = new Ball(width/2, height/2, random(-1,1), random(-1,1), -1);

  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width),random(height),random(-8,8),random(-8,8), i);
  }
}

function runBalls(){
  atBall.run();
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}
//load rects
function loadRects(n){
  for(var i = 0; i < n; i++){
    rects[i] = new Rect(random(width),random(height),random(-8,8),random(-8,8), i);
  }
}

function runRects(){
  for(var i = 0; i < rects.length; i++){
    rects[i].run();
  }
}

//load ships
function loadShips(n){
  for(var i = 0; i < n; i++){
    ships[i]= new Ship(random(width),random(height),random(-8,8),random(-8,8),i);
  }
}

function runShips(){
  for(var i = 0; i < ships.length; i++){
    ships[i].run();
  }
}
