var x = 0;
var y = 0;

function setup(){
    createCanvas(1425,150);
}
function draw(){
    background('#dbe5ea');
    text('© 2025 Stella Rossi. All Rights Reserved.',600,70)
    text('Currently a Student Attending and Enrolled at OCAD University',550,90)
    circle(x,y,10,10);
    x = x + 1;
    x = x % 1425;
    y = y + 2
    y = y % 150
}
