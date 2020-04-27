let lim;
let innerheight;
let innerwidth;
function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(400, 400);
  lim=0;
  angleMode(DEGREES); // Change the mode to DEGREES
  //frameRate(1);
  innerheight = height-10;
  innerwidth = width-10;
}

function draw() {
  // Set the background to black and turn off the fill color
  background(0);
  fill(255);
  stroke(255);
  rect(0,0,width,height/2);
  noFill();

  //rays, length= diagonal/2
  //stroke(128);
  for(let i = 0; i<=lim; i++){
    stroke(0);
    //coor = evenEdgeCoor(i/lim);
    coor = evenCenterCoor(i/lim);
    line(width/2,height/2,coor[0],coor[1]);
    stroke(255);
    line(width/2,height/2,coor[0],height-coor[1]);
  }
  if (lim<200){
    lim++;
  }
  noStroke();
  fill(255)
  arc(width/2,height/2,100,100,0,180);
  fill(0);
  arc(width/2,height/2,100,100,180,0);
}

//will cause even spasing along outher edge
function evenCenterCoor(percent) {

  //calculate
  let angle = percent*180;
  if (angle<45){
    return[(width-innerwidth)/2,(innerheight/2)*(tan(angle))]
  } else if (angle<90){
    return[(innerwidth/2)*(tan(90-angle)),(height-innerheight)/2];
  } else if (angle<(90+45)){
    return[(innerwidth/2)+((innerwidth/2)*(tan(135-angle))),(height-innerheight)/2];
    //x =0;
  } else{
    return[innerwidth+((width-innerwidth)/2),((innerheight/2)*(tan(180-angle)))];
  }
}


//will cause even spasing along outher edge
function evenEdgeCoor(percent) {
  let x = 0;
  let y = 0;
  if(percent == 0){
    y = 0.25*2*height;
    //x = 0;
  } else if(percent<0.25){
    y = (percent)*2*height;
  } else if(percent>0.75){
    y = (percent-0.75)*2*height;
    x = width;
  } else {
    x = (percent-0.25)*2*width;
  }
  return [x,y];
}
