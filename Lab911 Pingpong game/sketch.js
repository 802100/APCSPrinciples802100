//  Evangeline
// 	8/20/19
//  This is a comment
//this is a coment
var balls = []
var paddle;
var gameState = 1;
var mode;
var lives = 15;
var score = 0;
var diffScore;
var finalScore;
var btnEasy;
var btnMed;
var btnHard;
var b = 5;


//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  // background(5, 5, 5);
  loadBalls(b);
  loadPaddles();
  loadButtons();



}

//  The draw function is called @ 30 fps
function draw() {
  if(gameState === 1){
    startGame();
  }else if(gameState === 2){
    playGame();
  }else if(gameState === 3){
    endGame();
  }else if(gameState === 4){
    winGame();
  }else if(gameState === 5){
    loseGame();
  }else if(gameState === 6){
    quitGame();
  }

}

//sart Game screen
function startGame(){
  background(50,50,50);
  //title
  textSize(50);
  fill(0,250,0);
  text("P",270,200);
  text("B", 430,200);
  fill(255);
  text("addle   all",300,200);
  //instructions
  textSize(14);
  fill(255);
  text("Use the mouse to move the paddle and clear the screen of balls\n" +
    "Don't let the balls touch the bottom of the screen otherwise you lose a life\n"+
    "Try and clear the screen with the least ammount of lives lost\n",180,400);
  //difficulty buttons
  runButtons1();
  //press button?
  //easy mode
  if(mouseIsPressed &&
    mouseX>200 && mouseX<280 &&
    mouseY>600 && mouseY<640){
      mode = "easy";
      lives = 15;
      diffScore = 100;
      gameState = 2;
    }
    //medium mode
  if(mouseIsPressed &&
    mouseX>350 && mouseX<430 &&
    mouseY>600 && mouseY<640){
      mode = "med";
      lives = 12;
      diffSocre = 200;
      gameState = 2;
    }
    //hard mode
  if(mouseIsPressed &&
    mouseX>500 && mouseX<580 &&
    mouseY>600 && mouseY<640){
      mode = "hard";
      diffScore = 300;
      lives = 10;
      gameState = 2;
    }

}

//play game screen
function playGame(){
  background(0);
  textSize(20);
  fill(255);
  text("lives = " + lives,20,20);
  text("score = " + score,200,20);
  runBalls();
  runPaddles();
  //win game?
  if(balls.length === 0){
    gameState = 4;
    //lose game
  }else if(lives === 0){
    gameState = 5;
  }
}
//end game scren
function endGame(){
  background(50,50,50);
  //title
  textSize(50);
  fill(0,250,0);
  text("P",270,200);
  text("B", 430,200);
  fill(255);
  text("addle   all",300,200);
  //final score
  finalScore = score + diffScore + lives*20;
  textSize(20);
  fill(255);
  text("Score = " + score, 330,340);
  text("lives remaining = " + lives,305,370);
  text("difficulty = " + diffScore,320,400)
  fill(240,50,0);
  text("Final Score = " + finalScore, 310,430);
  //new game?
  runButtons2();
  //press button
  //load title screen
  if(mouseIsPressed &&
    mouseX>190 && mouseX<380 &&
    mouseY>500 && mouseY<550){
      loadBalls(10);
      gameState = 1;
      lives = 15;
      score = 0;
      //load quit screen
    }else if(mouseIsPressed &&
      mouseX>440 && mouseX<520 &&
      mouseY>500 && mouseY<550){
        gameState = 6;
      }

}

function winGame(){
  background(50,50,50);
  textSize(50);
  fill(250,0,250);
  text("YOU WIN", 270,400);
  textSize(15);
  fill(255);
  text("click mouse to continue",300,500);
  if(mouseIsPressed){
    gameState = 3;
  }
}

function loseGame(){
  background(50,50,50);
  //lose screen
  textSize(50);
  fill(250,0,250);
  text("YOU LOSE", 250,400);
  //click mouse to set gameState to endGame
  textSize(15);
  fill(255);
  text("click mouse to continue",300,500);
  if(mouseIsPressed){
    gameState = 3;
  }
}

function quitGame(){
  //thanks for playing screen
  background(50,50,50);
  textSize(70);
  fill(255);
  text("Thanks For Playing",100,400);
  textSize(15);
  fill(255,0,0);
  text("click mouse to restart",320,500);
  if(mouseIsPressed){
        gameState = 1;
  }
}

//load balls
function loadBalls(n){

  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width),200,random(-5,5),random(-5,5), i);
  }
}

function runBalls(){
  for(var i = 0; i < balls.length; i++){
    balls[i].run();

  }
}


function loadPaddles(){
  paddle = new Paddle(400,700,100,20);
}

function runPaddles(){
  // console.log("inside runPaddles");
  paddle.run();
}

function loadButtons(){
  btnEasy = new Button(200,600,70,40, "easy", color(0,50,250));
  btnMed = new Button(350,600,70,40, "med", color(250,0,250));
  btnHard = new Button(500,600,70,40,"hard", color(255,0,0));
  btnNewGame = new Button(250,500,140,40, "New Game", color(250,0,250));
  btnQuit = new Button(440,500,70,40, "Quit", color(255,0,0));
}

function runButtons1(){
  btnEasy.run()
  btnMed.run();
  btnHard.run();
}

function runButtons2(){
  btnNewGame.run();
  btnQuit.run();
}
