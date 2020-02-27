function setup(){
   createCanvas(windowWidth, windowHeight/2);
   background(0);
   
 }
 function draw() {
     background(0);
     noStroke(); 
   
     // rect(frameCount%100 * 2, 0, 50, 50);
   
     // rect(mouseX, 0, 50, 50);
     
     //yellow
     fill("yellow");
     rect(100 + 100 * Math.cos(frameCount / 100), 0, 50, 50);
     
     // green
     fill(50, 100, 50);
   
     let x1 = 100 + 100 * Math.cos(frameCount / 100);
     rect(x1, x1, 50, 50);
     
     // pink 
     fill(200, 100, 100);
   
     let x = 100+100 * Math.cos(frameCount / width);
     let y = 100+100 * Math.sin(frameCount / height);
     rect(x, y, 50, 50);
   
  }
 