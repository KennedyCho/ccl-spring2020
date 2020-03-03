function setup(){
   createCanvas(windowWidth, windowHeight);
   background(255);

   noStroke();
   colorMode(RGB);
}

function draw(){  
   
   let colorX = map(mouseX, 0, windowWidth, 0, 255); 
   let colorY = map(mouseY, 0, windowHeight, 0, 255); 
     
   // top left corner 
   fill(colorX, mouseX/2+ (mouseX/2)* Math.sin(frameCount/50), colorY); 
   rect(0, 0, mouseX+10, mouseY+10); 
   // bottom right corner
   fill(colorY, windowWidth/2+ (windowWidth/2)* Math.sin(frameCount/50), colorX); 
   rect(windowWidth, windowHeight, -mouseX-10, -mouseY-10);

   // circle moves left to right
   fill(colorY, 0, colorX);
   ellipse(windowWidth/2+ (windowWidth/2)* Math.sin(frameCount/50), (mouseY+10)/2, (mouseX)/2, (mouseY)/2);

   // circle grows with bottom right corner box
   fill(colorX, colorY, 0);
   ellipse(windowWidth-mouseX/2, windowHeight-mouseY/2, mouseX/2+ (mouseX/2)* Math.sin(frameCount/50), mouseY/2+ (mouseY/2)* Math.sin(frameCount/50))
  
}