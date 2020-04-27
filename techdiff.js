
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

    //rotating lines
    line(width*1/4,height/2,(width*3/4)+Math.sqrt(800)*cos(rotation),(height/2)-Math.sqrt(800)*sin(rotation));
    line(width*3/4,height/2,(width*3/4)+Math.sqrt(800)*cos(rotation),(height/2)-Math.sqrt(800)*sin(rotation));

    /*let hypo = length/2;
    //let angle = acos((width/2)/hypo);
    //line(width*1/4,height/2,(width/4)+hypo*cos(angle+45),(height*3/4)-hypo*sin(angle+45));
    //line(width*3/4,height/2,(width*3/4)-hypo*sin(angle+45),(height/4)+hypo*cos(angle+45));*/
    let i = 1;
    let sum = 0;
    let a = 0;
    let b = 0;
    while(sum<length){
      //for(i = 1; i<100; i++){
      //a = Math.sqrt(Math.pow(i*cos(rotation),2)+Math.pow(i*sin(rotation),2));
      a = Math.sqrt(Math.pow(i*cos(rotation),2)+Math.pow(i*sin(rotation),2));
      b = Math.sqrt(Math.pow((i+betweenfocals)*cos(rotation),2)+Math.pow((i+betweenfocals)*sin(rotation),2));
      sum = a+b;
      i++;
      line(10,10*i,i*cos(rotation),10*i);
      line(10,5+(10*i),i*sin(rotation),5+10*i);
    }
    //text(i,10,10);
    //text(a,10,20);
    //text(b,10,30);
    text(sum,10,40);
    text(length,10,50);
    let x = (width/4)+(a*cos(rotation+45));
    let y = (height*3/4)+(b*sin(rotation+45));
    stroke(50,150,50);
    line(width*1/4,height/2,x,y);
    stroke(150,50,50);
    line(width*3/4,height/2,x,y);
    line(width*1/4,height/2,mouseX,mouseY);
    line(width*3/4,height/2,mouseX,mouseY);
    points.push([(width/4)-(a*sin(rotation+45)),(height*3/4)+b*cos(rotation+45)]);
    //(width*3/4)-(i+betweenfocals)*sin(rotation+45),(height/4)+(i+betweenfocals)*cos(rotation+45));


    //for (let i = 0; i<360;i+=5){}
    stroke(50);
    //line(0,height,width,0);
    line(width/2,0,width/2,height);
    line(0,height/2,width,height/2);
    points.forEach((p) => {
      point(p[0],p[1]);
    });

    line(width/2,height/2,(width/2)+(50*sin(rotation)),(height/2)+(50*cos(rotation)));
    line(width/2,height/2,(width/2)+(100*cos(rotation)),(height/2)+(100*sin(rotation)));
    for (let j = 0;j<20;j++){
      line((width/2)-50+(j*5),height/2,(width/2)-50+(j*5),(height/2)-(25*sin((180/20)*j)));
      line((width/2)-50+(j*5),height/2,(width/2)-50+(j*5),(height/2)+(25*sin((180/20)*j)));

      line(width/2,  (height/2)-25+(j*2.5), (width/2)-50*cos((180/20)*j), (height/2)-25+(j*2.5));
      line(width/2,  (height/2)-25+(j*2.5), (width/2)+50*cos((180/20)*j), (height/2)-25+(j*2.5));
    }

    rotation = (rotation%360)+1;
    //rotation = 30;
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
