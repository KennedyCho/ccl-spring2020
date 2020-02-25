function setup() {
    createCanvas(windowWidth, windowHeight);
    background('black');
    
 }
  
 function corners(x, y, size) {
    noStroke();
    fill(size + 100, y, 100);
    rect(x, y, size, size);
    fill(size/x + 100, x, y);
    rect(x, y + 300, size, size);
    fill(y + 100, x, 100);
    rect(x + 300, y, size, size);
    fill(x + 100, y, 50);
    rect(x + 300, y + 300, size, size);
 }
 
 function draw(){

    background('black');
    let posStart = 0; 
    let size = 80; 
    corners(mouseX, mouseY, size);
    corners(mouseX+10, 10, size);
    corners(mouseX+20, -1*(mouseY+20), size);

 }