let degree=0
let points = []
const bigRad= 150
const tinyRad= 35
function setup() {
    createCanvas(400, 600)
    angleMode(DEGREES) // Change the mode to DEGREES
    //frameRate(1);
    //regn ut coordinater, width,height
}

//Ta noen kule farger da vell
//tegn ringer
//liten ring beveger seg inni stor ring, omkretsen av liten ring og stor ring skal forholde seg likt.
function draw() {
    background(135, 206, 235)
    degree=(degree+1)%360

    fill(250)
    noStroke()
    let tinyXY= orbitPos((bigRad-tinyRad)/2,degree)
    ellipse(width/2+tinyXY[0],(height/2)+tinyXY[1],tinyRad,tinyRad)
     noFill()
    stroke(0)
    strokeWeight(1)
    ellipse(width/2,(height/2),bigRad,bigRad)


    //loop through list of dots.
    let dotXY=orbitPos(tinyRad/2,360-degree);
    points.push([width/2+tinyXY[0]+dotXY[0],(height/2)+tinyXY[1]+dotXY[1]])
    
    for (let i = 0; i<points.length; i++){
        point(points[i][0],points[i][1]);
    }

    //regner ut ny posisjon for dot.
    //tegner en liste av tidligere og den nye dotten

}

//degree range from 0 to 359.
function orbitPos(radius, degree){
    return [radius*sin(degree),radius*cos(degree)];

}


//registrer trypp på shuffle eller sort.
function mousePressed() {
  //finner relasjon mellom mouseX&Y og lille sirkels flate
  if (mouseX < width && mouseX > 0 && mouseY < height && mouseY > 0){
    i = 0;
  }
  //appender relasjonen til en liste.
}
