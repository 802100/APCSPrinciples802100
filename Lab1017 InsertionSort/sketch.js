//  Evangeline Viray
// 1017
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
  InsertionSort(list.length);

}

//random number function
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

//start InsertionSort
function InsertionSort(n){
  for(var i = 1; i < n; i++){
    for(var j = i; j > 0; j--){
      comps = comps+1;
      if(list[j] < list[j-1]){
        Swap(j, j-1);
        swaps = swaps+1;
      }
    }
  }
  console.log(list);
  console.log("compares = "+ comps);
  console.log("swaps = "+ swaps);
  console.log("time = "+ time);

}//end InsertionSort
//  The draw function is called @ 30 fps
function draw() {


}
