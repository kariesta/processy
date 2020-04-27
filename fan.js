
//normal letiables
let buffer = 40;
let points = [];
let m = 0;
let n = 0;
let rotation = 5;

function setup() {
    // Sets the screen to be 720 pixels wide and 400 pixels high
    createCanvas(400, 400);
    angleMode(DEGREES); // Change the mode to DEGREES
}

function draw() {
    background(135, 206, 235);
    noStroke();
    fill(255);
    ellipse(width/2,height/2,100,50,150);
    stroke(240,100,100);
    let w = 180;
    let h = 100;
    for (let i = 0; i<360;i+=5){
      let length = Math.sqrt(Math.pow(w*sin(i),2)+Math.pow(h*cos(i),2));
      if(i<90){
        line((width/2),(height/2),(width/2)+((length*cos(i+rotation))),(height/2)+((length*sin(i+rotation))));
      } else if(i<180){
        line((width/2),(height/2),(width/2)+((length*cos(i+rotation))),(height/2)-((length*sin(i+rotation))));
      } else if(i<270){
        line((width/2),(height/2),(width/2)+((length*cos(i+rotation))),(height/2)+((length*sin(i+rotation))));
      } else {
        line((width/2),(height/2),(width/2)+((length*cos(i+rotation))),(height/2)-((length*sin(i+rotation))));
      }
    }
    stroke(50);
    //line(0,height,width,0);
    line(width/2,0,width/2,height);
    line(0,height/2,width,height/2);

    //legge til nytt punkt
    //points.push([width*noise(mouseX+m),height*noise(mouseY+n)]);
    m=(m%100)+1;
    n=(m%100)-1;
    rotation += 0.2;
}

function xrot(angle) {
  return cos(angle)*width/2;
}

function yrot(angle) {
  return sin(angle)*height/2;
}
