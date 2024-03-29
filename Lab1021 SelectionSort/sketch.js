//  Evangeline Viray
// 1023
//  This is a comment
//  The setup function function is called once when your program begins
var bars = [];
var temp;
var swaps = 0;
var comps = 0;
var time = millis();
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadBars(1);
  console.log(bars);
  for(var i = 0; i < squares.length; i++){
    squares[i].run();
  }
  SelectionSort(list.length);

}

//load bars
function loadBars(n){
  for(var i = 0; i < n; i++){
    bars[i] = new Bar(0)
  }
}

//start swap
function Swap(x,y){
  temp = bars[x];
  bars[x] = bars[y];
  bars[y] = temp;


}

//start SelectionSort
function SelectionSort(n){
  for(var i = 0; i < n-1; i++){
    var index = i;
    for(var j = i+1; j < n; j++){
      comps = comps+1;
      if(bars[j] < bars[index]){
        index = j;
      }
    }
    Swap(index, i);
    swaps = swaps+1;
  }
  console.log(bars);
  console.log("compares = "+ comps);
  console.log("swaps = "+ swaps);
  //console.log("time = "+ time);

}//end SelectionSort
//  The draw function is called @ 30 fps
function draw() {


}
