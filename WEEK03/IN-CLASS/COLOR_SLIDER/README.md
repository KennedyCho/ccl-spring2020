# Activity: Color Slider

[p5 web editor sketch](https://editor.p5js.org/KennedyCho/sketches/sNN24KWq)

In this activity, you will create a new p5.js project folder. You will make a series of changes to a p5 sketch, and commit each one.

This activity has three goals:
Explore p5.js and color via modification and interaction
Build familiarity with git, GitHub, and the Cookbook
Get in the habit of committing code often

The mechanics are intentionally not streamlined. Instead of linking directly to materials such as the Cookbook, you will have to search for them. Instead of giving you text that you can copy and paste into the editor, you will have to inspect the screenshots to figure out what changes to make. The goal is to build some “muscle memory” that you can use on your next assignments and other projects.

Useful documentation is in the p5 reference, under fill and colorMode.
A. Create a p5.js project
Use the instructions in the Cookbook to create a new p5.js project (a folder with an index.html, styles.css, and sketch.js) on your laptop.

(I called my folder “color-sliders”.)
B. Initialize the project’s (folder’s) Git repository
In GitHub Desktop, open the folder that you created, and click the “create a repository” link.

(Alternate method: In Visual Studio Code, click the Source Control icon in the left hand Action bar, click the + at the top of the Sidebar, and select the project folder. Then enter “Initial commit” into the Message text area, and click the check mark at the top of the Sidebar.)
C. Gray scale
Replace sketch.js by the following code. Try out the slider at the bottom of the browser page.

D. Commit the code
In GitHub Desktop, enter a commit message that describes the change, and press Commit.

(Alternate method: In Visual Studio Code, click the Source Control icon in the left hand Action bar, enter a description into the Message text area, and click the check mark at the top of the Sidebar.)
E. RGB Color Channels
Modify the sketch as shown. Explore the slider. Git commit.


Try using the slider1.value() in different positions. For example, background(0, slider1.value(), 0); and background(0, 0, slider1.value());.

Replace the 0’s by 255. For example, background(slider1.value(), 255, 255).
E. Gray Scale Revisited
Try background(slider1.value(), slider1.value(), slider1.value()). How does this compare to the initial program background(slider1.value())?
E. Multiple Sliders
Modify, explore, commit. Can you find: red, green, yellow, brown?

F. Push Your Changes to GitHub
(There’s a Recipe for this.)



