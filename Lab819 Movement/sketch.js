//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins

//declare
  var x, y;
  var speedX, speedY;
  var growX, growY;
  var sizeX, sizeY;

function setup() {
  var cnv = createCanvas(800, 800);

  //initialize
    x = 100;
    y = 200;
    speedX = 3;
    speedY = 3;
    growX = 5;
    growY = 5;
    sizeX = 50;
    sizeY = 50;

  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {
  x = x + speedX;
  y = y + speedY;
  sizeX = sizeX + growX;
  sizeY = sizeY + growY;


  fill(0,0,200);//blue cirlcle
  ellipse(250,500,25,25);

  fill(200,0,0);//red circle
  ellipse(400,500,50,50);

  fill(50,250,0);//green circle
  ellipse(400,500, 180, 180, 20);

  fill(0,250,150);//terquoise
  ellipse(600,700,78,150);

  fill(150,150,0);//pacman
  arc(x,500,sizeX,sizeY,20,50);

  fill(250,250,0);//yellow circle
  rect(30,30,150,150);








}
