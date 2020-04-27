
//normal letiables
let buffer = 40;
let points = [];
let m = 0;
let n = 0;
function setup() {
    // Sets the screen to be 720 pixels wide and 400 pixels high
    createCanvas(400, 400);
}

function draw() {
    background(135, 206, 235);
    noStroke();
    fill(255);
    triangle(width/2, buffer, buffer*2, height/2, width-(buffer*2), height/2);
    triangle(width/2, height-buffer, buffer*2, height/2, width-(buffer*2), height/2);
    fill(205,255,205);
    triangle(width/2, height-buffer,(buffer*3),(height-buffer)*(10/14),width-(buffer*3),(height-buffer)*(3/4));
    stroke(55);
    line(width/2,0,width/2,height);
    line(0,height/2,width,height/2);

    //tegne punkter
    if (points.length>0){
      points.forEach((coor) => {
        point(coor[0],coor[1]);
      });
    }

    //legge til nytt punkt
    points.push([width*noise(mouseX+m),height*noise(mouseY+n)]);
    m=(m%100)+1;
    n=(m%100)-1;
}
