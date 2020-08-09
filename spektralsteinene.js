
//en initiel farge rekkefølge

function setup() {
    createCanvas(400, 600);
    angleMode(DEGREES); // Change the mode to DEGREES
    //frameRate(1);

    //regn ut coordinater, width,height
}

//tegn steiner, tegn skille for sorteringen.
function draw() {
  init();

  for (let i = 0; i<12; i++){
    //center  = height/2, cos((i/12)*360)*200 = x
    fill(220+(i*4),200+(i*2),200-(i*10));
    let x = (width/2)+cos((i/12)*360)*100;
    let y = (height/2)+sin((i/12)*360)*100;
    ellipse(x,y,20,20);
    text(i,x-10,y-10);
  }

  /*let colourCount = 0;
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
  }*/
}

function init(){
  background(50);

  //sort knapp
  fill(250,250,50);
  strokeWeight(5);
  textSize(20);
  rect((width/2)-(100+10),height/6,100,50);
  fill(50,250,50);
  text("sort",(width/2)-100,(height/5)+15);
  //shuffleknapp
  fill(50,250,250);
  strokeWeight(5);
  rect((width/2)+10,height/6,100,50);
  fill(250);
  text("shuffle",(width/2)+20,(height/5)+15);

  noStroke(0);
  fill(255);
}

//regn ut posisjon for pivot, deretter en array per bytte.
//i form [steg 1: [[pivot],[swap1,swap2,swap3,swap4,swap5]],steg 2:[[pivot,pivot,pivot],[swap1,swap2,swap3]],steg3 :[[pivot,pivot,pivot,pivot,pivot],[swap1,swap2]]]

//registrer trypp på shuffle eller sort.
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
