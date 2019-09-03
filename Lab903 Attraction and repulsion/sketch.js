//  Evangeline
// 	8/20/19
//  This is a comment
var balls = []
var rects = []
var tris = []
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
  runTris();




}
//load balls
function loadBalls(n){
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width),random(height),random(-8,8),random(-8,8));
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
    rects[i] = new Rect(random(width),random(height),random(-8,8),random(-8,8));
  }
}

function runRects(){
  for(var i = 0; i < rects.length; i++){
    rects[i].run();
  }
}
//load triangles
//random(50,150),random(50,150),random(50,150),random(50,150),random(50,150),random(50,150)[new triangle]
//random(width),random(height),random(width),random(height),random(width),random(height)[new triangle]
//20,60,10,80,30,80[new triangle]
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
