//  Evangeline
// 	8/20/19
//  This is a comment
var b1,b2,b3,b4;
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  b1 = new Ball(random(width),random(height),random(-5,5),random(-5,5));
  b2 = new Ball(random(width),random(height),random(-5,5),random(-5,5));
  b3 = new Ball(random(width),random(height),random(-5,5),random(-5,5));
  b4 = new Ball(random(width),random(height),random(-5,5),random(-5,5));

}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5);
  b1.run();
  b2.run();
  b3.run();
  b4.run();



}
