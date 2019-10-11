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
  BubbleSort();

}
//start BubbleSort
function BubbleSort(){
  for(var i = 0; i < list.length; i++){
    for(var j = 0; j >= i; j++){
      if(list[i] < list[i+1]){
        var temp = list[i];
        list[i] = list[j];
        list[j] = temp;
      }
    }
  }
  console.log(list);

}//end BubbleSort
//  The draw function is called @ 30 fps
function draw() {


}
