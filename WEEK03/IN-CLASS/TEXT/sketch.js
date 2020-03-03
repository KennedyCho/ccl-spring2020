// assignment starter 
// function setup() {
//    createCanvas(400, 400);
//   }
   
//   function draw() {
//     background(220);
//     fill('black');
//     textAlign(LEFT);
//     textFont("Helvetica");
//     textSize(12);
//     text("since feeling is first", 10, 30);
//     textSize(18);
//     text("who pays any attention", 10, 50);
//     textSize(24);
//     text("to the syntax of things", 10, 75);
   
//     textAlign(RIGHT);
//     textFont("Arial");
//     fill('white');
//     text("will never wholly kiss you", 380, 100);
//     textFont("Arial Bold");
//     fill('red');
//     text("wholly to be a fool", 380, 175);
//     fill('green');
//     textFont("Arial");
//     text("while Spring is in the world", 380, 200);
//   }
  

// poem 
let myFont = "Rubik";
// function preload() {
//   myFont = loadFont('assets/Rubik-Italic.ttf');
// }

function setup() {
 createCanvas(windowWidth, windowWidth);

}


function draw() {
  let startPos = width/8;
  let size = 24;
  background(126, 202, 165);
  fill("black");
  textAlign(LEFT);
  textSize(size);

  textFont(myFont);
  text("Dance with the waves", startPos, startPos);
  text("move with the sea.", startPos+size, startPos+size);
  text("Let the rythmn of the water", startPos+size*3, startPos+size*3);
  text("set your soul free.", startPos+size*4, startPos+size*4);
  
  textAlign(LEFT);
  fill('white');
  text("Christy Ann Martine", startPos+size*7, startPos+size*6);

}
