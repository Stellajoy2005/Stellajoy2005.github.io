//this code was remixed from the following:
// https://p5js.org/tutorials/conditionals-and-interactivity/ 
// https://p5js.org/tutorials/creating-styling-html/ 
// https://p5js.org/tutorials/responding-to-inputs/ 
// https://p5js.org/tutorials/animating-with-media-objects/
// https://p5js.org/tutorials/loading-and-selecting-fonts///////////

let sunHeight = 400;
let horizon = 250;
let redVal = 0;
let greenVal = 0;
let animate = true;
let pauseButton;
let bird;
let birdX = -200;
let firstScreen = false;
let secondScreenActive = false;  
let thirdScreenActive = false;
let secondScreenStartTime = 0;  
let delay = 3000; 
let textDelay;
let tumbleweedGif;
let myFont;


//remixed from https://p5js.org/tutorials/creating-styling-html/ to create tv outline//

function setup() {
    let canvas = createCanvas(645, 350);

    let desertEmulator = createDiv();
    desertEmulator.id("desert-emulator");

    let tvContainer = createDiv();
    tvContainer.id("tv-container"); 

    let desertText= createDiv("The Desert...");
    desertText.id("desert-text");

    let restartButtons = createDiv();
    restartButtons.id("restart-buttons");
  
    let buttonContainer = createDiv();
    buttonContainer.id("button-container");

    let actionButtons = createDiv();
    actionButtons.id("action-buttons");

    let resetButton = createButton('↺');
    restartButtons.child(resetButton);
    resetButton.id('reset');
  
    pauseButton = createButton('❚❚');
    actionButtons.child(pauseButton);
    pauseButton.id('pause');

    let body = select('body');
    body.child(desertEmulator);
    desertEmulator.child(tvContainer);
    desertEmulator.child(desertText);
    desertEmulator.child(buttonContainer);

    tvContainer.child(canvas);
    buttonContainer.child(restartButtons);
    buttonContainer.child(actionButtons);

// end remix///

// remixed from https://p5js.org/tutorials/animating-with-media-objects/ used to load the gifs and pngs//
// remixed from https://p5js.org/tutorials/loading-and-selecting-fonts/ to load font//
    bird = loadImage("Bird.gif");
    cactus = loadImage("Cactus.png");
    tumbleweedGif = loadImage("Tumbleweed.gif");
    tumbleweed2 = loadImage("Tumbleweed2.png")
    tumbleweed3 = loadImage("Tumbleweed3.png");
    lizardGif = loadImage("Lizard.gif");
    myFont = loadFont("Dirt.ttf");
// end of https://p5js.org/tutorials/loading-and-selecting-fonts/ remix//
// end of https://p5js.org/tutorials/animating-with-media-objects/ remix//

// remixed from https://p5js.org/tutorials/responding-to-inputs/ to style elements and call the button functions//
    desertEmulator.style("background-color", "red");
    desertEmulator.style("border", "10px solid #FF474C");
    desertEmulator.style("border-radius", "10px");
    desertEmulator.style("padding", "20px");
    desertEmulator.style("box-shadow", "0 0 30px rgb(255, 255, 255))");

    buttonContainer.style("display", "flex");
    buttonContainer.style("align-items", "center");
    buttonContainer.style("justify-content", "space-between");
    buttonContainer.style("margin-top", "20px");

    restartButtons.style("display", "flex");
    restartButtons.style("flex-direction", "column");
    restartButtons.style("align-items", "center");

    actionButtons.style("display", "flex");
    actionButtons.style("align-items", "center");

    desertText.style("margin", "10px 145px");
    desertText.style("font-size", "25px");
    desertText.style("color", "black");
    desertText.style("background-color", "white");
    desertText.style("padding", "5px");
    desertText.style("border-radius", "5px");
    desertText.style("text-align", "center");

    pauseButton.style('background-color', 'white');
    pauseButton.style('color', 'black');
    pauseButton.style('width', '80px');
    pauseButton.style('height', '80px');
    pauseButton.style('font-size', '24px');
    pauseButton.style('border-radius', '50%');
    pauseButton.style('margin-right', '10px');

    resetButton.style('background-color', 'white');
    resetButton.style('color', 'black');
    resetButton.style('width', '80px');
    resetButton.style('height', '80px');
    resetButton.style('font-size', '40px');
    resetButton.style('padding-bottom', '10px');
    resetButton.style('border-radius', '50%');

    pauseButton.mousePressed(pauseAnimation);
    resetButton.mousePressed(resetAnimation);
}
//end of remix//

//remixed from https://p5js.org/tutorials/conditionals-and-interactivity/ to create elements inside TV and animate them//
function draw() {
    if (!firstScreen){
    background(redVal, greenVal, 0);

    fill(255, 135, 5, 60);
    circle(300, sunHeight, 180);
    fill(255, 100, 0, 100);
    circle(300, sunHeight, 140);

    fill(110, 50, 18);
    triangle(200, 400, 520, 253, 800, 400);
    fill(110, 95, 20);
    triangle(200, 400, 520, 253, 350, 400);  

    fill(150, 75, 0);
    triangle(-100, 400, 150, 200, 400, 400);
    fill(100, 50, 12);
    triangle(-100, 400, 150, 200, 0, 400);  

    fill(150, 100, 0);
    triangle(200, 400, 450, 250, 800, 400);
    fill(120, 80, 50);
    triangle(200, 400, 450, 250, 300, 400);

//remix from https://p5js.org/tutorials/animating-with-media-objects/ to animate bird with the rest of the tv//
    if (animate) {
        image(bird, birdX, 100, 100, 50); 
        birdX += 3; 
        if (birdX > width) {
            firstScreen = true;
        }
    } else {
        image(bird, birdX, 100, 100, 50); 
    }
// end of https://p5js.org/tutorials/animating-with-media-objects/ remix//

    if (sunHeight > 130) {
        sunHeight -= 2;
    }
    if (sunHeight < 480) {
        redVal += 4;
        greenVal += 1;
    }
    if (sunHeight > 130) {
        sunHeight -= 2;
        if (sunHeight < 480) {
            redVal += 4;
            greenVal += 1;
        }
    }
    if (firstScreen && !secondScreenActive) {
        secondScreen(); 
        secondScreenStartTime = millis();  
        secondScreenActive = true;  
    }
}
    if (secondScreenActive) {
        if (millis() - secondScreenStartTime >= delay) {
            thirdScreenActive = true;  
        }
        if (thirdScreenActive) {
            thirdScreen();  
        }
    }
}
function secondScreen(){
    background(redVal, greenVal, 0); 
    line(0,horizon,800,horizon);
    fill(150, 75, 0);
    rect(0, horizon, 800, 400);
    image(cactus, 400, 178, 50, 80);
    image(cactus, 60, 30, 200, 300);
    image(tumbleweedGif, 0, 180, 200, 200); 
    image(tumbleweed2, 400, 140, 300, 300);
    image(tumbleweed2, 250, 185, 100, 100);
  
    fill(255, 135, 5, 60);
    circle(400, 100, 100, 180);
    fill(255, 100, 0, 100);
    circle(400, 100, 140, 140);

}
// remixed from https://p5js.org/tutorials/loading-and-selecting-fonts/ to add font//
function thirdScreen(){
    background(150, 75, 0); 
    text('The End', 100, 100);
    textFont(myFont);
    image(lizardGif, -100, -60, 800, 800);
    textSize(80);
}
// end of https://p5js.org/tutorials/loading-and-selecting-fonts/ remix//
//end of https://p5js.org/tutorials/conditionals-and-interactivity/ remix//

// remixed from https://p5js.org/tutorials/responding-to-inputs/ to create the buttons//
function pauseAnimation() {
    if (animate) {
        animate = false;
        noLoop(); 
        pauseButton.html('▶');
    } else {
        animate = true;
        loop(); 
        pauseButton.html('❚❚');
    }
}
function resetAnimation() {
    sunHeight = 400;
    redVal = 0;
    greenVal = 0;
    birdX = -200; 
    firstScreen = false;
    secondScreenActive = false; 
    thirdScreenActive = false;
    tumbleweedX = -5;
    if (!animate) {
        animate = true;
        loop(); 
    }
}
// end of https://p5js.org/tutorials/responding-to-inputs/ remix//