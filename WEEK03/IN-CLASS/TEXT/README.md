# Activity: Exploring Text

[P5 Web Editor Poem Sketch](https://editor.p5js.org/KennedyCho/sketches/MECwCqEf)

The purpose of this activity is to familiarize you with the p5.js text functions.

It also introduces the idea of a Coding Cookbook. A Cookbook is a list of Coding Recipes. A Recipe is a short instruction or example of how to do something.
A. Getting Started
Pick your favorite p5.js editor. For example, make a copy of the p5 template and open it in Visual Studio Code; or, visit openprocessing.org or editor.p5js.org. Replace sketch.js by the following code, and run it.

function setup() {
 createCanvas(400, 400);
}
 
function draw() {
  background(220);
  fill('black');
  textAlign(LEFT);
  textFont("Helvetica");
  textSize(12);
  text("since feeling is first", 10, 30);
  textSize(18);
  text("who pays any attention", 10, 50);
  textSize(24);
  text("to the syntax of things", 10, 75);
 
  textAlign(RIGHT);
  textFont("Arial");
  fill('white');
  text("will never wholly kiss you", 380, 100);
  textFont("Arial Bold");
  fill('red');
  text("wholly to be a fool", 380, 175);
  fill('green');
  textFont("Arial");
  text("while Spring is in the world", 380, 200);
}
B. An Ablation Experiment
Removes portions of a program is a technique for understanding why they are necessary. (It is also a useful tool for debugging, and for finding performance hot spots — the parts of a program that make it run slowly.)

What happens if you remove (or comment out) the fill, textAlign, textAlign, or textSize statements on lines 7, 8, 9, or 10? Why? Think for a while. Then ask in the #activities channel if you haven’t figured it out.
C. Fix My Terrible Typography
You can do better! Alternatively, you can make it even worse! Spend a couple of minutes to do one or the other. Take a screenshot and post it to #activities.
D. Optional: Use Your Own Lyrics
What is this text, anyway? Use your web search skills to find out — or, if someone recognizes it, you can simply call it in #assignments.

Replace the text with some poetry or lyrics. Take a screenshot and post it to #activities.


