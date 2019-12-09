//  Evangeline Viray
// 1021
//  This is a comment
//  The setup function function is called once when your program begins
var balls = [];
var temp;
var numballs, ballWidth;
var swaps = 0;
var comps = 0;
//var time = millis();
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(230);
  fill(200, 30, 150);
  ballWidth = 20;
  // numballs = width/ballWidth;

  loadballs(20);
  runballs();
}

//  The draw function is called @ 30 fps
function draw() {
  background(230);
  frameRate(1);
  runballs();
  SelectionSort(balls.length);
  }


//loadballs
function loadballs(n){
  for(var i = 0; i < n; i++){
    var ballHeight = 20;
    var loc = createVector(i*ballWidth, 400);
    balls[i] = new Ball(loc,random(0,255));
  }
}

//runballs
function runballs(){
  frameRate(1);
  for(var i = 0; i < balls.length; i++){
    balls[i].run();

  }
}
//start swap
function Swap(x,y){
  temp = balls[x];
  balls[x] = balls[y];
  balls[y] = temp;


}

//function move
function Move(){
  frameRate(1);
  for(var i = 0; i < balls.length; i++){
    balls[i].slide(i);
  }
  background(230);
  runballs();
}

//start SelectionSort
function SelectionSort(n){
  for(var i = 0; i < n-1; i++){
    var index = i;
    for(var j = i+1; j < n; j++){
      comps = comps+1;
      if(balls[j].c < balls[index].c){
        index = j;
      }
    }
    Swap(index, i);
    Move();
    swaps = swaps+1;
  }
  // console.log("compares = "+ comps);
  // console.log("swaps = "+ swaps);
  //console.log("time = "+ time);

}//end SelectionSort
