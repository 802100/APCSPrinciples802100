//  Evangeline Viray
// 	1203 ship
//  This is a comment
//  The setup function function is called once when your program begins
var ship;
var planet;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadBalls(1);
  loadShips(1);

}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5, 40);
  runBalls();
  runShips();



}
//load balls
function loadBalls(n){
  planet = new Ball(width/2, height/2, random(-1,1), random(-1,1));

}

function runBalls(){
  planet.run();

}

//load ships
function loadShips(n){
  ship = new Ship(random(width),random(height),random(-8,8),random(-8,8),1);

}

function runShips(){
    ship.run();
}
