let myFont;
let stage = 0;
let input;
let p;
let submitButton;
let drawButton;
let textList = [];
let finaldrawButton;
let restartButton;
let drawnName = "";
let firework;

function setup(){
    createCanvas(windowWidth, windowHeight);

    myFont = loadFont('Glitch.ttf');
    firework = loadImage('firework.gif');
}
function draw(){
    background(0);

    if (stage === 0) {
        showStartScreen();
    }
    else if (stage === 1) {
        showInputScreen();
    }
    else if (stage === 2) {
        showDrawScreen();
    }
}

function showStartScreen(){
    textFont(myFont);
    textSize(60);
    textAlign(CENTER);
    fill('blue');
    text('Draw a Random Name', width/2, height/4);

    textFont(myFont);
    textSize(30);
    textAlign(CENTER);
    fill('aquamarine');
    text('By Stella Rossi', width / 2, height / 4 + 70);


    fill('aquamarine');
    rect(width / 2 - 100, height / 1.5, 200, 50, 15);

    textFont(myFont);
    textSize(40);
    fill(0);
    text("START", width / 2, height / 1.5 + 35);

    if(mouseX >= width / 2 - 100 && mouseX <= width / 2 + 100 && mouseY >= height / 1.5 && mouseY <= height / 1.5 + 50 && mouseIsPressed == true){
        stage = 1;
    }
}

function showInputScreen(){
    textFont(myFont);
    textSize(60);
    textAlign(CENTER);
    fill('blue');
    text('Draw a Random Name', width/2, height/9);

    fill('blue');
    rect(100, 100, 400, 450, 10);

    fill('white');
    rect(120, 120, 360, 100, 10);

    fill(0);
    text('INSERT NAMES', 300, 185);

    if (textList.length >= 6) {
        input.attribute('disabled', 'true');
        submitButton.attribute('disabled', 'true');
        textFont(myFont);
        textSize(30);
        fill('red');
        text("Submission Limit", 300, 280);

    }if (!submitButton && textList.length < 6){
        submitButton = createButton('Submit');
        submitButton.position(120, 450);
        submitButton.mousePressed(newText);

        submitButton.style('font-family', 'Glitch');
        submitButton.style('padding', '10px 145px');
        submitButton.style('font-size', '30px');
        submitButton.style('color', 'black');
        submitButton.style('background-color', 'aquamarine');
        submitButton.style('border-radius', '10px');
    }
    if (!drawButton) {
        drawButton = createButton('Draw Names');
        drawButton.position(620, 450);
        drawButton.mousePressed(drawNames);

        drawButton.style('font-family', 'Glitch');
        drawButton.style('padding', '10px 115px');
        drawButton.style('font-size', '30px');
        drawButton.style('color', 'black');
        drawButton.style('background-color', 'aquamarine');
        drawButton.style('border-radius', '10px');
    }
    if (!input && textList.length < 6) {
        input = createInput();
        input.position( 120, 240);
        input.changed(newText);

        input.style('font-family', 'Glitch');
        input.style('padding', '10px');
        input.style('font-size', '37.8px'); 
        input.style('color', 'blue');
        input.style('text-align', 'center');
        input.style('border-radius', '10px');
    }
    let yPosition = 150; 
    for (let i = 0; i < textList.length; i++) {
        textFont(myFont);
        textSize(40);
        fill('aquamarine');
        text(textList[i], 800, yPosition);
        yPosition += 50; 
    }
}   

function newText(){
    console.log(input.value());
    textList.push(input.value());

    input.value('');
    console.log(textList);
}

function drawNames(){
    drawnName = random(textList);

    input.remove();
    submitButton.remove();
    drawButton.remove();

    stage = 2;
}

function showDrawScreen(){
    image(firework, 110, 110);

    textFont(myFont);
    textSize(60);
    textAlign(CENTER);
    fill('blue');
    text('Draw a Random Name', width/2, height/9);

    textFont(myFont);
    textSize(80);
    fill('aquamarine');
    text(drawnName, 300, 310);

    if (!finaldrawButton) {
        finaldrawButton = createButton('Draw Again');
        finaldrawButton.position(620, 250);
        finaldrawButton.mousePressed(drawNames);

        finaldrawButton.style('font-family', 'Glitch');
        finaldrawButton.style('padding', '10px 120px');
        finaldrawButton.style('font-size', '30px');
        finaldrawButton.style('color', 'black');
        finaldrawButton.style('background-color', 'aquamarine');
        finaldrawButton.style('border-radius', '10px');
    }
    finaldrawButton.show();

    if (!restartButton && stage === 2) {
        restartButton = createButton('Restart');
        restartButton.position(620, 330);
        restartButton.mousePressed(restart);

        restartButton.style('font-family', 'Glitch');
        restartButton.style('padding', '10px 138px');
        restartButton.style('font-size', '30px');
        restartButton.style('color', 'black');
        restartButton.style('background-color', 'aquamarine');
        restartButton.style('border-radius', '10px');
    }

    if (restartButton) {
        restartButton.show();
    }
}

function restart(){
    finaldrawButton.hide();
    restartButton.hide();
    
    textList = []; 
    drawnName = ""; 
    stage = 0;

    submitButton = null; 
    drawButton = null;   
    input = null;
}
function keyPressed(){
    if (key === 'f' || key === 'F') {
        isFullscreen = !isFullscreen;
        fullscreen(isFullscreen); 
    }
    
    if (keyCode === ESCAPE) {
        if (isFullscreen) {
            isFullscreen = false;
            fullscreen(false); 
        }
    }
}