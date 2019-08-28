//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {
  fill(0,0,200);
  ellipse(500,500,100,100);

  fill(200,0,0);
  rect(10,10,200,200);

  fill(50,250,0);
  rect(20, 20, 180, 180, 20);

  fill(0,250,150);
  ellipse(600,700,78,150);

  fill(150,150,0);
  arc(300,500,80,80,20,50);

  fill(250,250,0);
  rect(30,30,150,150);








}
