let colours = [];
let above = [];
function setup() {
    createCanvas(360, 362);
    for (let i = 0; i<50;i++){
        colours.push(color(125,196,225));
    }
    colours.push(color(125,196,125));
    colours.push(color(255,255,25));
    colours.push(color(125,96,125));
    colours.push(color(125,196,225));
    colours.push(color(25,96,45));
    colours.push(color(125,196,125));
    colours.push(color(255,255,25));
    colours.push(color(125,96,125));
    colours.push(color(125,196,225));
    colours.push(color(25,96,45));
    for (let i = 0; i<40;i++){
        colours.push(color(105,176,205));
    }

}

function draw() {
    background(135,206,235);
    fill(100,130,122);

    //draw lines
    strokeWeight(2);
    for (let i = 0; i<100;i++){
        stroke(colours[i]);
        line(20,30+(3*i),20+320,30+(3*i));
        if (i==70){
          fill(0);
          //text(30+(3*i),40,40);
          fill(100,130,122);
        }
    }
    //draw eclipses
    noStroke();
    fill(235,206,135);
    ellipse(180,190,70,70);
    ellipse(180,190+70,70,70);
    //draw foregrownd lines
    if (above.length<0){
        for (let i = 0; i<above.length;i++){
            stroke(colours[above[i]]);
            line(20,30+(3*above[i]),20+320,30+(3*above[i]));
        }
    }

    //draw the frame around
    //Final frame
    noStroke();
    fill(135,206,235);
    rect(0,0,20,400);
    rect(0,0,400,20);
    rect(0,340,450,100);
    rect(340,0,50,4500);
    stroke(0,0,0);
    strokeWeight(4);
    noFill();
    rect(20,20,320,320);
    strokeWeight(2);
    textSize(25);
    text("TO BE CONTINUED...",30,300);
}
//if key pressed, increase linenumber.
function mousePressed() {
    if(mouseY>280&& mouseY<320){
      fill(0);
      text(30+(3*i),40,40);
      fill(100,130,122);
        if(mouseX>130 && mouseX<200){
            above.push((mouseY-30)/3);

        } else {
            above.pop((mouseY-30)/3);
        }
    }
}
