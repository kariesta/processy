//https://p5js.org/examples/simulate-particle-system.html
let mouseWeight; //lineart
let mouseWeightY; //background
let toCenter;

function setup() {
  createCanvas(360, 362);
  //position(0,20);
}

function draw() {
  mouseWeight = 0.06; //lineart
  mouseWeightY = -0.11; //background
  toCenter = (20+320+20)/2;

  background(250,245,245);
  noStroke();
  fill(252,232,190);
  ellipse(200+(mouseWeightY*(mouseX-toCenter)),137+(mouseWeightY*(mouseY-toCenter)),70,70);
  noFill();
  strokeWeight(20);
  fill(50,42,0);
  let xOff = 0;
  let yOff = 0;
  let wavesize = 40;
  //stroke(0,250,270);
  noFill();

  stroke(0,250,270);
  wave(0,250,270,xOff+30+(mouseWeightY*(mouseX-toCenter)),yOff+(mouseWeightY*(mouseY-toCenter)),40);
  stroke(0,225,245);
  wave(0,225,245,xOff+12+(mouseWeightY*(mouseX-toCenter)),yOff+15+(mouseWeightY*(mouseY-toCenter)),40);
  stroke(0,240,260);
  wave(0,240,260,xOff-6+(mouseWeightY*(mouseX-toCenter)),yOff+30+(mouseWeightY*(mouseY-toCenter)),40);

  //v lineart background v
  stroke(250,245,245);
  lineart(mouseWeightY,xOff,yOff);

  //v lineart v
  stroke(0,0,0);
  lineart(mouseWeight,xOff,yOff);

  //Final frame
  noStroke();
  fill(250,245,245);
  rect(0,0,20,400);
  rect(0,0,400,20);
  rect(0,340,450,toCenter);
  rect(340,0,50,4500);
  stroke(0,0,0);
  noFill();
  rect(20,20,320,320);
}

// create a new instance of p5 and pass in the function for sketch 1

function wave(r,g,b,xOff,yOff,wavesize) {
  //stroke(0,250,270);
  //stroke(r,g,b);
  for (let i = 0; i < 11; i++) {
    arc(xOff+(wavesize*i),yOff+(wavesize*i),wavesize,wavesize,HALF_PI, PI)//wave*3
    arc(xOff+(wavesize*i),yOff+(wavesize*(i+1)),wavesize,wavesize,HALF_PI+PI,0)//wave*3
  }
}

function lineart(movement,xOff,yOff) {
  strokeWeight(4);
  noFill();
  arc(200+(movement*(mouseX-toCenter)),137+(movement*(mouseY-toCenter)),70,70, PI+0.14,HALF_PI-0.1);//wave*3
  //ellipse(220,155,70,70);
  wave(250,245,245,xOff+38+(movement*(mouseX-toCenter)),yOff-9+(movement*(mouseY-toCenter)),40);
  wave(250,245,245,xOff+21+(movement*(mouseX-toCenter)),yOff+7+(movement*(mouseY-toCenter)),40);
  wave(250,245,245,xOff+4+(movement*(mouseX-toCenter)),yOff+23+(movement*(mouseY-toCenter)),40);
  wave(250,245,245,xOff-13+(movement*(mouseX-toCenter)),yOff+39+(movement*(mouseY-toCenter)),40);

}