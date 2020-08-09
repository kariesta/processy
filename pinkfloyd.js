
function setup() {
    createCanvas(400, 400);
    //angleMode(DEGREES); // Change the mode to DEGREES
    //frameRate(1);
}

function draw() {
  background(0);
  stroke(255);//inline
  line(mouseX,mouseY,width/2,height/3);
  //gjøre om til trekanter og følge samme bredde, men fylle helt ut til kanten på farge siden.
  strokeWeight(5);
  stroke(255,110,100);//rød
  line(width-mouseX,mouseY-15,width/2,height/3);
  stroke(240,200,10);//oransje
  line(width-mouseX,mouseY-10,width/2,height/3);
  stroke(255,255,100);//gul
  line(width-mouseX,mouseY-5,width/2,height/3);
  stroke(100,255,100);//grønn
  line(width-mouseX,mouseY,width/2,height/3);
  stroke(50,50,250);//blå
  line(width-mouseX,mouseY+5,width/2,height/3);
  stroke(50,10,255);//indigo
  line(width-mouseX,mouseY+10,width/2,height/3);
  stroke(185,10,235);//fiolett
  line(width-mouseX,mouseY+15,width/2,height/3);
  noStroke(0);
  fill(255);
  triangle(width/2,height/4,width/3,height*3/4,width*2/3,height*3/4);


}
