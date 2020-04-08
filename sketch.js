//https://p5js.org/examples/simulate-particle-system.html

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function wave(r,g,b,xOff,yOff,wavesize) {
  //stroke(0,250,270);
  stroke(r,g,b);
  arc(xOff,yOff,wavesize,wavesize,HALF_PI, PI)//wave*3
  arc(xOff,yOff+wavesize,wavesize,wavesize,HALF_PI+PI,0)//wave*3
  arc(xOff+wavesize,yOff+wavesize,wavesize,wavesize,HALF_PI, PI)//wave*3
  arc(xOff+wavesize,yOff+(wavesize*2),wavesize,wavesize,HALF_PI+PI,0)//wave*3
  arc(xOff+(wavesize*2),yOff+(wavesize*2),wavesize,wavesize,HALF_PI, PI)//wave*3
  arc(xOff+(wavesize*2),yOff+(wavesize*3),wavesize,wavesize,HALF_PI+PI,0)//wave*3
  arc(xOff+(wavesize*3),yOff+(wavesize*3),wavesize,wavesize,HALF_PI, PI)//wave*3
  arc(xOff+(wavesize*3),yOff+(wavesize*4),wavesize,wavesize,HALF_PI+PI,0)//wave*3
  arc(xOff+(wavesize*4),yOff+(wavesize*4),wavesize,wavesize,HALF_PI, PI)//wave*3
  arc(xOff+(wavesize*4),yOff+(wavesize*5),wavesize,wavesize,HALF_PI+PI,0)//wave*3
  arc(xOff+(wavesize*5),yOff+(wavesize*5),wavesize,wavesize,HALF_PI, PI)//wave*3
  arc(xOff+(wavesize*5),yOff+(wavesize*6),wavesize,wavesize,HALF_PI+PI,0)//wave*3
  arc(xOff+(wavesize*6),yOff+(wavesize*6),wavesize,wavesize,HALF_PI, PI)//wave*3
  arc(xOff+(wavesize*6),yOff+(wavesize*7),wavesize,wavesize,HALF_PI+PI,0)//wave*3
  arc(xOff+(wavesize*7),yOff+(wavesize*7),wavesize,wavesize,HALF_PI, PI)//wave*3
  arc(xOff+(wavesize*7),yOff+(wavesize*8),wavesize,wavesize,HALF_PI+PI,0)//wave*3
  //arc(xOff+(wavesize*8),yOff+(wavesize*8),wavesize,wavesize,HALF_PI, PI)//wave*3
  //arc(xOff+(wavesize*8),yOff+(wavesize*9),wavesize,wavesize,HALF_PI+PI,0)//wave*3
  //arc(xOff+(wavesize*9),yOff+(wavesize*9),wavesize,wavesize,HALF_PI, PI)//wave*3
  //arc(xOff+(wavesize*9),yOff+(wavesize*10),wavesize,wavesize,HALF_PI+PI,0)//wave*3

}

function draw() {
  // mouseX&Y
  let mouseWeight = 0.02;
  let mouseWeightY = 0.04;

  //v colors
  //background(250,245,245);
  background(105,100,100);
  noStroke();
  fill(250,242,200);
  ellipse(220+(mouseWeightY*(mouseX-100)),157+(mouseWeightY*(mouseY-100)),70,70);
  noFill();
  strokeWeight(20);
  let xOff = 20;
  let yOff = 20;
  let wavesize = 40;
  wave(0,250,270,xOff+30+(mouseWeightY*(mouseX-100)),yOff+(mouseWeightY*(mouseY-100)),40);
  wave(0,230,250,xOff+15+(mouseWeightY*(mouseX-100)),yOff+15+(mouseWeightY*(mouseY-100)),40);
  wave(0,240,250,xOff+(mouseWeightY*(mouseX-100)),yOff+30+(mouseWeightY*(mouseY-100)),40);

  //v lineart background v
  stroke(105,100,100);
  strokeWeight(4);
  noFill();
  arc(220+(mouseWeightY*(mouseX-100)),157+(mouseWeightY*(mouseY-100)),70,70, PI+0.14,HALF_PI-0.1);//wave*3
  //ellipse(220,155,70,70);
  wave(105,100,100,xOff+38+(mouseWeightY*(mouseX-100)),yOff-9+(mouseWeightY*(mouseY-100)),40);
  wave(105,100,100,xOff+20+(mouseWeightY*(mouseX-100)),yOff+7+(mouseWeightY*(mouseY-100)),40);
  wave(105,100,100,xOff+7+(mouseWeightY*(mouseX-100)),yOff+23+(mouseWeightY*(mouseY-100)),40);
  wave(105,100,100,xOff-10+(mouseWeightY*(mouseX-100)),yOff+38+(mouseWeightY*(mouseY-100)),40);


  //v lineart v
  stroke(0,0,0);
  strokeWeight(4);
  noFill();
  arc(220+(mouseWeight*(mouseX-100)),157+(mouseWeight*(mouseY-100)),70,70, PI+0.14,HALF_PI-0.1);//wave*3
  //ellipse(220,155,70,70);
  wave(0,0,0,xOff+38+(mouseWeight*(mouseX-100)),yOff-9+(mouseWeight*(mouseY-100)),40);
  wave(0,0,0,xOff+20+(mouseWeight*(mouseX-100)),yOff+7+(mouseWeight*(mouseY-100)),40);
  wave(0,0,0,xOff+7+(mouseWeight*(mouseX-100)),yOff+23+(mouseWeight*(mouseY-100)),40);
  wave(0,0,0,xOff-10+(mouseWeight*(mouseX-100)),yOff+38+(mouseWeight*(mouseY-100)),40);
  //wave*3

  //Final frame
  noStroke();
  fill(105,100,100);
  rect(0,0,20,400);
  rect(0,0,400,20);
  rect(0,340,450,100);
  rect(340,0,50,4500);
  stroke(0,0,0);
  noFill();
  rect(20,20,320,320);

}
