//  Evangeline Viray
// 1004
//  This is a comment
//  The setup function function is called once when your program begins
var list = [];
var temp;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  ranNum(10);
  console.log(list);
  BubbleSort(list.length);

}

//random number function
function ranNum(n){
  for(var i = 0; i < n; i ++){
    for(var j = 0; j = n+j; j++){
      list[n] = round(random(1,200));
    }
  }


}
//start swap
function Swap(x,y){
  temp = list[x];
  list[x] = list[y];
  list[y] = temp;


}

//start BubbleSort
function BubbleSort(n){
  for(var i = 1; i < n; i++){
    for(var j = i; j > 0; j--){
      if(list[j] < list[j-1]){
        Swap(j, j-1);
      }
    }
  }
  console.log(list);

}//end BubbleSort
//  The draw function is called @ 30 fps
function draw() {


}
