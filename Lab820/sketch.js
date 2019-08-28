//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
//declare
var x, y;
var speedx, speedy;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  speedx = random(-5, 5);
  speedy = random(-25, 25);
  x = 400;
  y = 400;



}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5);

  if(x > 0){
    x = speed * -1;
  }

  if(x < windowWidth){
    x = speedx * 1;
  }
  
x = x + speedx;
y = y + speedy;


fill(250,0,0);
ellipse(x,y,50,50)

fill(250,250,0);
ellipse(x,y,50,50)

fill(0,0,250);
ellipse(x,y,50,50)






}
