//  Evangeline Viray
// 1021
//  This is a comment
//  The setup function function is called once when your program begins
var list = [];
var temp;
var swaps = 0;
var comps = 0;
var time = millis();
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  ranNum(9);
  console.log(list);
  SelectionSort(list.length);

}

//ranNum
function ranNum(n){
  for(var i = 0; i < n; i ++){
    for(var j = 0; j < n+j+1; j++){
      list[n] = round(random(1,200));
      n = n-1;
    }
  }


}
//start swap
function Swap(x,y){
  temp = list[x];
  list[x] = list[y];
  list[y] = temp;


}

//start SelectionSort
function SelectionSort(n){
  for(var i = 0; i < n-1; i++){
    var index = i;
    for(var j = i+1; j < n; j++){
      comps = comps+1;
      if(list[j] < list[index]){
        index = j;
      }
    }
    Swap(index, i);
    swaps = swaps+1;
  }
  console.log(list);
  console.log("compares = "+ comps);
  console.log("swaps = "+ swaps);
  console.log("time = "+ time);

}//end SelectionSort
//  The draw function is called @ 30 fps
function draw() {


}
