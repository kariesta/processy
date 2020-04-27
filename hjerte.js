
//normal letiables
let points = [];
let tris = [];
let rotation = 5;
let w = 200;
let h = 100;
let heartLeft;
let heartRight;
let triCount = 2;

function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(400, 400);
  angleMode(DEGREES); // Change the mode to DEGREES
  //frameRate(1);
  for (let x = 0; x<width;x++){
    for(let y = 0; y<height;y++){
      let m = Math.pow(x-(width/2),2)/Math.pow(w/2,2);
      let n = Math.pow(y-(height/2),2)/Math.pow(h/2,2);
      if(m+n==1){
        //points.push([(width/2)+((x-(width/2))*cos(rotation)),(height/2)+((y-(height/2))*sin(rotation))]);
        points.push([x,y]);
      }
    }
  }
  heartLeft = rotatePoints(points,45,0);
  heartRight = rotatePoints(points,135,0);
  heartLeft = offset(heartLeft,14,0);
  heartRight = offset(heartRight,-14,0);
  heartLeft = heartLeft.slice(25,40).concat(heartLeft.slice(0,9));
  heartRight = heartRight.slice(12,34);


}

function draw() {
  backing();

  strokeWeight(5);
  stroke(200,100,100);
  heartLeft.forEach((p) => {
    point(p[0],p[1]);
  });
  stroke(250,100,100);
  heartRight.forEach((p) => {
    point(p[0],p[1]);
  });
  line(heartRight[0][0],heartRight[0][1],heartRight[heartRight.length-1][0],heartRight[heartRight.length-1][1]);

  //draw triangles
  noStroke();
  fill(250,100,100);
  if (tris.length>0){
    tris.forEach((poinatos) => {
      triangle(poinatos[0][0],poinatos[0][1],poinatos[1][0],poinatos[1][1],poinatos[2][0],poinatos[2][1]);
    });
  }

  rotation = (rotation%360)+5;
  //rotation = 30;
}

function backing() {
  background(135, 206, 235);
  noStroke();
  fill(255);
  stroke(10);
  strokeWeight(10);
  point(width*2/4,height/2);  //point(width*3/4,height/4);
  strokeWeight(1);
  line(width/2,0,width/2,height);
  line(0,height/2,width,height/2);
  stroke(150,50,50);

}

function rotatePoints(pointarray,rotated) {
  rotatedPoints = [];
  rotatedBottomPoints = [];
  pointarray.forEach((p) => {
    //roter punktene
    let dist = Math.sqrt(Math.pow(width/2-p[0],2)+Math.pow(height/2-p[1],2));
    let angle = asin((width/2-p[0])/dist);
    let nyx = (dist*cos(rotated+angle));
    let nyy = (dist*sin(rotated+angle));
    let xc = width/2;
    let yc = height/2;
    //line(width/2,height/2,nyx,nyy);//points[k][0],points[k][1]);
    //stroke(255);
    rotatedPoints.push([xc-nyx,yc-nyy]);
    rotatedBottomPoints.push([xc+nyx,yc+nyy]);
  });

  return rotatedPoints.concat(rotatedBottomPoints);
}

function offset(pointarray,xOff,yOff) {
  return pointarray.map(x => [x[0]+xOff,x[1]+yOff]);
}

function mousePressed() {
  //add triangle
  if (triCount<heartRight.length-1){
    tris.push([heartRight[0],heartRight[heartRight.length-1],heartRight[triCount++]]);
    tris.push([heartLeft[0],heartLeft[heartLeft.length-1],heartLeft[triCount++]]);
  } else {
    triCount = 1;
    tris = [];
  }
}
