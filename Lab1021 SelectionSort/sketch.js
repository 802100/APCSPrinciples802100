//  Evangeline Viray
// 1004
//  This is a comment
//  The setup function function is called once when your program begins
var list = [9,11,5,3,6];
var temp;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  console.log(list);
  BubbleSort(list.length);

}
//start swap
function Swap(x,y){
  temp = list[x];
  list[x] = list[y];
  list[y] = temp;


}

//start BubbleSort
function BubbleSort(n){
  for(var i = 0; i < n-1; i++){
    for(var j = 0; j < n-1-i; j++){
      if(list[j+1] < list[j]){
        Swap(i, j);
      }
    }
  }
  console.log(list);

}//end BubbleSort
//  The draw function is called @ 30 fps
function draw() {


}
