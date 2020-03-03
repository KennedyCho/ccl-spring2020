function setup(){
   createCanvas(windowWidth, windowHeight);
   background(200);

   fill(0); 
   rect(0, 0, windowWidth/2, windowHeight/2); 
   rect(windowWidth, windowHeight, -windowWidth/2, -windowHeight/2);

   fill(255);
   ellipse(windowWidth/4, windowHeight/4, windowWidth/4, windowHeight/4);
   ellipse(3*windowWidth/4, 3*windowHeight/4, windowWidth/4, windowHeight/4);

}

