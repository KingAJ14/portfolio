'use strict';

var startX = 0;
var startY = 250;
var endX = 0;
var endY = 250;
var startX2 = 0;
var startY2 = 250;
var endX2 = 0;
var endY2 = 250;
var mouseP = false;
function setup() {
  
  createCanvas(500, 500);
}
function draw(){
  //316, 293
  strokeWeight(6);
    noStroke();
  background(102, 102, 102);

  if (mouseP) {
    if (frameCount%4==0) {

      fill (0, 0, 0);
      ellipse(360, 350, 50, 50);
      rect(354, 370, 14, 70);
      rect(350, 440, 10, 70);
      rect(364, 440, 10, 70);
      rect(360, 390, 40, 10);
      rect(320, 390, 40, 10);
      fill(154, 154, 154);
      rect(309, 290, 11, 110);
      fill (255, 255, 255);
      ellipse(360, 350, 40, 40);//head
      rect(358, 372, 5, 56);//neck
      rect(353, 445, 3, 50);//leftLeg
      rect(367, 445, 3, 50);//leftLeg
      rect(360, 393, 30, 4);//rightArm
      rect(328, 393, 30, 4);//rightArm
      fill(0, 0, 0);
      ellipse(354, 347, 7, 7);//leftEye
      ellipse(370, 347, 7, 7);//rightEye
      reset();
    }
  } else {
    fill (0, 0, 255);
    ellipse(360, 350, 50, 50);
    rect(354, 370, 14, 70);
    rect(350, 440, 10, 70);
    rect(364, 440, 10, 70);
    rect(360, 390, 40, 10);
    rect(320, 390, 40, 10);
    fill(154, 154, 154);
    rect(309, 290, 11, 110);
  }

  stroke((Math.random()*150)+5, 0,(Math.random()*100)+150);
  while (endX<314) {
    endX = startX + (Math.random()*9)+0;
    endY = startY + (Math.random()*10);
    line(startX, startY, endX, endY);
    startX = endX;
    startY = endY;
  }
  stroke((Math.random()*150)+5, 0, (Math.random()*100)+150);
  while (endX2<314) {
    endX2 = startX2 + (Math.random()*9)+0;
    endY2 = startY2 + (Math.random()*10);
    line(startX2, startY2, endX2, endY2);
    startX2 = endX2;
    startY2 = endY2;
  }
    strokeWeight(2.5);
  textSize(35);
    
  fill(0, 0, 0);
  text("Click for a spooky surprise", 20, 100);
}


function mousePressed()
{
  reset();
    mouseP = true;
}
function mouseReleased(){
    mouseP= false;
}
function reset() {
  startX = 0;
  startY = 15;
  endX = 309;
  endY = 290;
  startX2 = 0;
  startY2 = 15;
  endX2 = 309;
  endY2 = 290;
}
