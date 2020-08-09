let times = 1;
function setup() {
    createCanvas(400, 600);
    angleMode(DEGREES); // Change the mode to DEGREES
    //frameRate(1);
}

//tegn steiner, tegn skille for sorteringen.
function draw() {
  //background(150);
  for (let i = 0; i<24; i+=2){
    //pick random place
    let x = width*noise(i+(times*24));
    let y = height* noise(i+1+(times*24));
    let factor = findLargestFactor(x+sin(y/height));
    //size of largest factor
    //place dot with strokeWeight factor/10
    strokeWeight(factor/40);
    point(x,y);
  }
  times++;
}

function findLargestFactor(value) {
  for(let i = 2; i<= Math.sqrt(value);i++){
    if(value%i==0){
      return value/i;
    }
  }
  return value;
}
