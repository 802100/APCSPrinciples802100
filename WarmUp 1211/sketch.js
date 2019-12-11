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
  ranNum(11);
  console.log(list);
  mySort(list.length);
  findAvg();
  findMed();
}

//ranNum
function ranNum(n){
  for(var i = 0; i < n; i++){
    list[i] = round(random(1,100));
  }
}

//start swap
function Swap(x,y){
  temp = list[x];
  list[x] = list[y];
  list[y] = temp;


}

//start mySort
function mySort(n){
  for(var i = 1; i < n; i++){
    for(var j = i; j > 0; j--){
      if(list[j] < list[j-1]){
        Swap(j, j-1);
      }
    }
  }
  console.log(list);
}//end mySort

//find Average
function findAvg(){
    for(var i = 0; i < list.length-1; i++){
      var listTotal = listTotal + list[i];
    }
    var avg = listTotal/list.length;
    console.log("Average = "+ avg);
}

function findMed(){
  var med = round(list.length/2);
  console.log("median = "+ list[med-1]);
}



//  The draw function is called @ 30 fps
function draw() {


}
