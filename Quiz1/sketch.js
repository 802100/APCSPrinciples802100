//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var num;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  var num = 1;


}

//  The draw function is called @ 30 fps
function draw() {
  //question 1
  if(num < 4){
    console.log("Peace");
  }
  console.log("War");
  //question 2
  for(var i = 14; i > 8; i--){
    i = i-4;
    console.log(i);
  }

}
