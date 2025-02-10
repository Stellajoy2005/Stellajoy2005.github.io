

function setup(){
    createCanvas(windowWidth,windowHeight);
}

function draw(){
    background(0, 100, 100);
    fill('aquamarine');
    stroke('white');
    for(var i = 0; i < 851; i++){
        rect((i*10)%width,(i*10)%height,10,10);
    }
    fill('blue');
    for(var i = 0; i < 425; i++){
        rect((i*20)%width,(i*20)%height,10,10);
    }
    fill('white');
    stroke('blue');
    for(var i = 0; i < 245; i++){
        rect((i*5)%width,(i*5)%height,10,10);
    }
    fill('violet');
    stroke('purple');
    if(mouseX < 200){
        rect(mouseX,mouseY,100,100);
    }else{
        rect(mouseX,mouseY,50,50,25);
    }
}