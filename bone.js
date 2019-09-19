class Bone {
  constructor(_xPos, _yPos, _rotation, _size) {
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.rotation = _rotation;
    this.size = _size;
  }

  display() {

      // set bone color
      noStroke();
      fill(230);

      // draw bone and rotate
      push();
      translate(this.xPos, this.yPos);
      rotate(this.rotation);
      scale(this.size);
      rectMode(CENTER);
      rect(0, 0, width * .3, height * .08);
      circle(-width * .15, -height * .04, -height * .08);
      circle(-width * .15, height * .04, -height * .08);
      circle(width * .15, -height * .04, -height * .08);
      circle(width * .15, height * .04, -height * .08);
      pop();
  }
  

  move(){
    
    // tie rotation to size
    this.rotation += 1 / (this.size * 2)
    
    // this.angle++ is shorthand for this.angle = this.angle + 1;
    // this is having them all fall at same speed
    // this.rotation++;
    
   
    
    // move bone and tie speed to size
    if (this.yPos <= height * 1.3){
    this.yPos += this.size * 2;
    } else {
     this.yPos = -height * .3; 
    }
  }
  
  followMouse(){
    this.xPos = mouseX;
    this.yPos = mouseY;
  }
}

// old code: this is when we declared the bone via a function, NOT a class

// function drawBone(xPos, yPos, rotation) {
//   // set bone color
//   noStroke();
//   fill(230);

//   // draw bone and rotate
//   push();
//   translate(xPos, yPos);
//   rotate(rotation);
//   rectMode(CENTER);
//   rect(0, 0, width * .3, height * .08);
//   circle(-width * .15, -height * .04, -height * .08);
//   circle(-width * .15, height * .04, -height * .08);
//   circle(width * .15, -height * .04, -height * .08);
//   circle(width * .15, height * .04, -height * .08);
//   pop();
// }