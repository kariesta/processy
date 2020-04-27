
//normal letiables
let buffer = 40;
let points = [];
let m = 0;
let n = 0;
let rotation = 5;
let ellipseaddon = 80;

function setup() {
    // Sets the screen to be 720 pixels wide and 400 pixels high
    createCanvas(400, 400);
    angleMode(DEGREES); // Change the mode to DEGREES
    //frameRate(1);
}

function draw() {
    background(135, 206, 235);
    noStroke();
    fill(255);
    ellipse(width/2,height/2,100,50,150);
    let w = 180;
    let h = 100;
    stroke(10);
    strokeWeight(10);
    //point(width*3/4,height/4);
    //point(width/4,height*3/4);
    point(width*1/4,height/2);
    point(width*3/4,height/2);
    strokeWeight(1);
    stroke(150,50,50);

    let betweenfocals = Math.sqrt(Math.pow(width/2,2)+Math.pow(height/2,2));
    let length = betweenfocals+ellipseaddon;

    //rotating lines
    line(width/4,height*3/4,(width*3/4)+Math.sqrt(800)*cos(rotation),(height/4)-Math.sqrt(800)*sin(rotation));
    line(width*3/4,height/4,(width*3/4)+Math.sqrt(800)*cos(rotation),(height/4)-Math.sqrt(800)*sin(rotation));

    let hypo = length/2;
    let angle = acos((betweenfocals/2)/hypo);
    line(width/4,height*3/4,(width/4)+hypo*cos(angle+45),(height*3/4)-hypo*sin(angle+45));
    line(width*3/4,height/4,(width*3/4)-hypo*sin(angle+45),(height/4)+hypo*cos(angle+45));

    if(rotation<370){
      let i = 1;
      let sum = 0;
      let a = 0;
      let b = 0;
      while(sum<length){
        //for(i = 1; i<100; i++){
        a = Math.sqrt(Math.pow(i*cos(rotation+45),2)+Math.pow(i*sin(rotation+45),2));
        b = Math.sqrt(Math.pow((i+betweenfocals)*cos(rotation+45),2)+Math.pow((i+betweenfocals)*sin(rotation+45),2));
        sum = a+b;
        i++;
      }
      text(i+"\t\t\t"+a+"\t\t\t"+b+"\t\t\t"+ sum +"\t\t\t"+length,10,10*i);
      line(width/4,height*3/4,(width/4)-(a*sin(rotation+45)),(height*3/4)+b*cos(rotation+45));
      line(width*3/4,height/4,(width/4)-(a*sin(rotation+45)),(height*3/4)+b*cos(rotation+45));
      line(width/4,height*3/4,mouseX,mouseY);
      line(width*3/4,height/4,mouseX,mouseY);
      points.push([(width/4)-(a*sin(rotation+45)),(height*3/4)+b*cos(rotation+45)]);
      //(width*3/4)-(i+betweenfocals)*sin(rotation+45),(height/4)+(i+betweenfocals)*cos(rotation+45));
    }

    //for (let i = 0; i<360;i+=5){}
    stroke(50);
    //line(0,height,width,0);
    line(width/2,0,width/2,height);
    line(0,height/2,width,height/2);
    points.forEach((p) => {
      point(p[0],p[1]);
    });

    rotation = (rotation%360)+1;
}
