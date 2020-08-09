let corners;
let widthSpace;
let heightSpace;
let numX = 13;
let numY = 13;

function setup() {
    createCanvas(400, 600);
    //angleMode(DEGREES); // Change the mode to DEGREES
    //frameRate(1);

    //regn ut coordinater, width,height
    corners = findCorners(numX,numY,width-10,height-10);
    corners = corners.map (x => [x[0]+10,x[1]+10]);
    blocked = corners.map(x => false);
    widthSpace = corners[1][0]-corners[0][0];
    heightSpace = corners[numX][1]-corners[0][1];
}

function draw() {
  background(255);
  noStroke(0);
  fill(255);
  let colourCount = 0;
  for(let x = 0; x<numX; x++){
    for(let y = 0; y<numY; y++){
      //avgjør farge
      if (blocked[(x*numX)+y]){
        fill(255);
      } else {
        fill(x*255/numX,y*255/numY,cos(((x*numX)+y)/corners.length)*255);
      }
      colourCount++;

      //tegn rute.
      rect(corners[(x*numX)+y][0],corners[(x*numX)+y][1],widthSpace-10,heightSpace-10);
    }
  }
}

function findCorners(antX, antY, maxX,maxY) {
  let x = maxX/antX;
  let y = maxY/antY;
  corns = [];
  for(let j = 0; j+y<=maxY;j+=y){
    for(let i = 0; i+x<=maxX;i+=x){
      corns.push([i,j]);
    }
  }
  return corns;
}

function mousePressed() {
  //finner hvilken rute vi er i nå.
  if (mouseX < width && mouseX > 0 && mouseY < height && mouseY > 0){
    i = 0;
    while (corners[i][1] < mouseY && i<corners.length-1){
      i++;
    }
    if (i != corners.length-1){
      i--;
    }
    while (corners[i][0] > mouseX &&  i>0){
      i--;
    }
    //endre farge
    blocked[i] = !blocked[i];
  }
}
