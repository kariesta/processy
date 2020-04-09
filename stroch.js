let lineCount = 9; //linenumber
let sideLength = 280;
//let topp;let left;let right;
function setup() {
    createCanvas(360, 362);
    //position(0,20);
}

function draw() {
    strokeWeight(1);
    background(200,230,222);
    fill(100,130,122);
    //offset of coorinates
    let unitDistance = (sideLength/lineCount);
    let xOffset = unitDistance*0.5;
    let yOffset = xOffset*Math.sqrt(3);
    text(unitDistance,40,40);
    text(xOffset,40,80);
    text(yOffset,40,120);
    //3 arrays of coordinates, one for each side.
    //draw the lines from line coordinates to x
    for (let i = 0; i < lineCount; i++) {
        line(20+(unitDistance*i),40,mouseX,mouseY); //top
        line(20+(xOffset*i),40+(yOffset*i),mouseX,mouseY); //left
        line(20+sideLength-(xOffset*i),40+(yOffset*i),mouseX,mouseY); //right
    }
    //draw the frame around
    //Final frame
    noStroke();
    fill(200,230,222);
    rect(0,0,20,400);
    rect(0,0,400,20);
    rect(0,340,450,100);
    rect(340,0,50,4500);
    stroke(0,0,0);
    strokeWeight(4);
    noFill();
    rect(20,20,320,320);

}
//if key pressed, increase linenumber.
function mousePressed() {
    if(mouseX%340>20 && mouseY%340>20){
        lineCount++;
    } else {
        lineCount = 1;
    }
}