let angleJaw = 10;
let bamYes = false;

let bonesFront = [];
let bonesBack = [];
let boneFollowMouse;


function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

  // instantiate bigger bones in front
  for (let i = 0; i <= 15; i++) {
    bonesFront[i] = new Bone(random(1, 10) * width * .1, random(1, 10) * width * .1, random(360), random(.5, .8));
  }

  // instantiate smaller bones in back
  for (let i = 0; i <= 25; i++) {
    bonesBack[i] = new Bone(random(1, 10) * width * .1, random(1, 10) * width * .1, random(360), random(.2, .5));
  }

  // instantiate bone to follow the mouse
  boneFollowMouse = new Bone(mouseX, mouseY, 0, 1);

}

function draw() {
  background(120);

  // display and move bones in back
  for (i = 0; i < bonesBack.length; i++) {
    bonesBack[i].display();
    bonesBack[i].move();
  }


  // draw dog 
  drawDogTail(sin(frameCount * 5) * 5 - 10); // parameter = angle rotation
  drawDoggoBody();
  drawTopJaw(angleJaw); // parameter = angle rotation
  drawBottomJaw();
  drawEye();
  // circle(width * .55, width * .5, width * .05);
  drawPupil(width * .5 + map(mouseX, 0, width, -width * .025, width * .025, true), height * .5 + map(mouseY, 0, height, -height * .025, height * .025, true)); // two parameters = x and y position of pupil

  if (bamYes == true) {
    circle(width / 2, height / 2, 100);
  }

  // display and move bones in front
  for (i = 0; i < bonesFront.length; i++) {
    bonesFront[i].display();
    bonesFront[i].move();
  }

  // display and move bone following the mouse
  boneFollowMouse.display();
  boneFollowMouse.followMouse();


}

function mousePressed() {

  // if the position of the mouse is near the mputh, then chomp chomp 
  if (dist(mouseX, mouseY, width * .7, height * .6) <= width * .1) {
    // console.log("mouse beep in here");
    angleJaw = -angleJaw;
  // } else if (mouseX < width * .2 || mouseX > width * .8) {
  //   bamYes = !bamYes;
  //   // console.log("mouse beep in here");
  }
}



function drawDoggoBody() {
  // doggo fur color
  fill(246, 206, 88);
  noStroke();

  // draw doggo body
  beginShape();
  vertex(width * .15, height * .35);
  vertex(width * .7, height * .35);
  vertex(width * .6, height * .9);
  vertex(width * .5, height * .9);
  vertex(width * .5, height * .8);
  vertex(width * .2, height * .8);
  vertex(width * .2, height * .9);
  vertex(width * .1, height * .9);
  endShape(CLOSE);
}

function drawDogTail(angleWag) {

  // doggo fur color
  fill(246, 206, 88);
  noStroke();

  push();
  translate(width * .15, height * .45)
  rotate(angleWag);
  beginShape();
  vertex(0, 0);
  vertex(width * .05, -height * .4);
  vertex(width * .15, -height * .3);
  vertex(width * .05, -height * .3);
  vertex(width * .15, -height * .2);
  vertex(width * .05, -height * .15);
  vertex(width * .05, 0);
  endShape(CLOSE);
  pop();
}

function drawTopJaw(angleTopJaw) {

  // doggo fur color
  fill(246, 206, 88);
  noStroke();

  // draw top jaw
  push();
  translate(width * .6, height * .4);
  rotate(angleTopJaw);
  beginShape();
  vertex(0, 0);
  vertex(width * .35, 0);
  vertex(width * .3, height * .15);
  vertex(width * .25, height * .1);
  vertex(width * .2, height * .15);
  vertex(width * .15, height * .1);
  vertex(width * .1, height * .15);
  endShape(CLOSE);
  pop();
}

function drawBottomJaw() {
  // draw bottom jaw
  beginShape();
  vertex(width * .6, height * .7);
  vertex(width * .65, height * .6);
  vertex(width * .7, height * .65);
  vertex(width * .75, height * .6);
  vertex(width * .8, height * .65);
  vertex(width * .9, height * .6);
  vertex(width * .85, height * .7);
  endShape(CLOSE);

}

function drawEye() {
  // draw eye
  fill(255);
  stroke(0);
  circle(width * .5, height * .5, width * .1);
}

function drawPupil(_xPos, _yPos) {
  // draw pupil
  fill(0);
  // circle(width * .55, height * .5, width * .05);
  circle(_xPos, _yPos, width * .05);
}