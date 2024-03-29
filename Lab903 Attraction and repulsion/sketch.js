//  Evangeline
// 	8/20/19
//  This is a comment
var balls = []
var rects = []
var tris = []
var mainBall;
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  loadBalls(20);
  loadRects(20);
  loadTris(20);


}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5, 40);
  runBalls();
  runRects();
  //runTris();




}
//load balls
function loadBalls(n){
  mainBall = new Ball(width/2, height/2, random(-1,1), random(-1,1), -1);

  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width),random(height),random(-8,8),random(-8,8), i);
  }
}

function runBalls(){
  mainBall.run();
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
//load triangles
function loadTris(n){
  for(var i = 0; i < n; i++){
    tris[i] = new Triangle(20,60,random(-8,8),random(-8,8));
  }
}

function runTris(){
  for(var i = 0; i < tris.length; i++){
    tris[i].run();
  }
}
