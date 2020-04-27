
//normal letiables
let buffer = 40;
let points = [];
let m = 0;
let n = 0;
let rotation = 5;
let ellipseaddon = 80;
let w = 180;
let h = 100;
let betweenfocals;
let length;
let rotneg = false;
let offset=100-45;


function setup() {
    // Sets the screen to be 720 pixels wide and 400 pixels high
    createCanvas(400, 400);
    angleMode(DEGREES); // Change the mode to DEGREES
    //frameRate(1);
    betweenfocals = Math.sqrt(Math.pow(width/2,2)+Math.pow(height/2,2));
    length = (width/2)+ellipseaddon;

}

function draw() {
    backing();

    stroke(50);
    line(width/2,0,width/2,height);
    line(0,height/2,width,height/2);

    stroke(150,50,50);
    line(width/2,height/2,(width/2)+(50*sin(rotation)),(height/2)+(50*cos(rotation)));
    line(width/2,height/2,(width/2)+(100*cos(rotation)),(height/2)+(100*sin(rotation)));
    stroke(50);

    for (let j = 0;j<20;j++){
      line((width/2)-offset+(j*10),height/2,(width/2)-100+(j*10),(height/2)-(50*sin((180/20)*j)));
      line((width/2)-offset+(j*10),height/2,(width/2)-100+(j*10),(height/2)+(50*sin((180/20)*j)));
    }
    //100 |, mer <, mindre >
    if (rotneg){
      offset -= 2*(rotation%90/90);
    } else {
      offset += 2*(rotation%90/90);
    }

    if (rotation%90 == 0){
      rotneg = !rotneg;
    }
    rotation = (rotation%360)+1;
}

function backing() {
  background(135, 206, 235);
  noStroke();
  fill(255);
  ellipse(width/2,height/2,100,50,150);
  stroke(10);
  strokeWeight(10);
  point(width*1/4,height/2);  //point(width*3/4,height/4);
  point(width*3/4,height/2);  //point(width/4,height*3/4);
  strokeWeight(1);
  stroke(150,50,50);
}
