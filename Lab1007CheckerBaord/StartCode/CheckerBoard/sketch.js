//Evangeline Viray
//Lab 911:CheckerBoard
//
//global variables
var squares = [];


// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(235);
  loadSquares(1);
  // traverse array and run each squares
  for(var i = 0; i < squares.length; i++){
    squares[i].render();
  }
}

function loadSquares(n){
  for(var i = 0; i < n; i ++){
    squares[i] = new Square(0,0,100);
  }

}
