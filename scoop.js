
//normal letiables
let splat = [];

/*trying to make normal distribued "splatter" in both x and y plane with bigger splatters at the center of the splatt*/

function setup() {
    // Sets the screen to be 720 pixels wide and 400 pixels high
    createCanvas(360, 362);
    createCanvas(360, 362);
}

function draw() {
    background(255, 255, 255);
    noStroke();
    fill(135,206,235,50);
    for (let i = 1; i < splat.length; i++) {    //drawing all circles
        ellipse(splat[i][0], splat[i][1], splat[i][2], splat[i][3]);
    }
}

function mousePressed() {
    for (let i= 1; i < 20; i++){    //making 20 circles
        let numX = randomGaussian(0,1);
        let numY = randomGaussian(0,1);   //20 gaussian spread numbers
        let meanX = mouseX;
        let meanY = mouseY;//not actually needed in this code atm, but fancy
        let standardDeviation = 50;
        let x = standardDeviation * numX + meanX;
        let y = standardDeviation * numY + meanY;
        splat.push([x, y, 10/numX, 10/numX]); //only numX because numX with numY makes very long ellipses,could be fun though, try it yourself.
    }
}
