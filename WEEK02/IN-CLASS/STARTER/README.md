# In-class starter kit 

Coding exercises can be found on google drive in this [doc](https://docs.google.com/document/d/1GNXeb6Q0g6qWIaUWag3KWTNt6ibi7rL5M47abdTj8Eo/edit#). 

## B. Study this code. What is different between it and the code in step A?Does this code behave any differently from the code in step A?

`function setup() {
   createCanvas(windowWidth, windowHeight);
   background('black');
   corners();
}
 
function corners() {
   rect(0, 0, 20, 20);
   rect(0, 100, 20, 20);
   rect(100, 0, 20, 20);
   rect(100, 100, 20, 20);
}`


## C. Study this code. What is different between it and the code in step A?Does this code behave any differently from the code in step A?

`function setup() {
   createCanvas(windowWidth, windowHeight);
   background('black');
   corners(0, 0);
}
 
function corners(x, y) {
   rect(x, y, 20, 20);
   rect(x, y + 100, 20, 20);
   rect(x + 100, y, 20, 20);
   rect(x + 100, y + 100, 20, 20);
}`

## D. How do you expect the program behavior to change?
`// Change
   corners(0, 0);
// into
   corners(0, 0);
   corners(10, 10);`

