var colourPicker; // function scope
let strokeWeightSlider;
var bgColourPicker;

function setup(){
    createCanvas(720,300);
    colourPicker = createColorPicker('deeppink');
    
    strokeWeightSlider = createSlider(1,10,5,1)
    
    bgColourPicker = createColorPicker('blue');
    
    var bgColourButton = createButton('Refresh');
    bgColourButton.mousePressed(repaint);
    bgColourPicker.changed( repaint );
    background( bgColourPicker.value() );
}

function draw(){
    // ellipse(mouseX, mouseY, 10, 10);
    strokeWeight(strokeWeightSlider.value() );
    stroke( colourPicker.value() );

    // remixed from p5js.org/refrence/mouseIsPressed/
    if(mouseIsPressed){
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
    // end remix
}

function repaint(){
    background( bgColourPicker.value() );
    console.log( bgColourPicker.value().setGreen(255) );
}