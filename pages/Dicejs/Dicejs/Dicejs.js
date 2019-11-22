var dice;//array of dice
var t; //total
function setup()
{
  noLoop();
  //background(0, 200, 0);
   var canvas = createCanvas(500, 500);
  canvas.parent('sketch-div');
  dice=[];
  for (var i=0; i<3; i++) {
    for (var j=0; j<3; j++) {
      dice[i*3+j] = new Die(120*i+20, 120*j+20);
    }
  }
}
function draw()
{
  background(0, 200, 0);
  textSize(20);
  fill(0);
  text("Total: "+t, 50, 400);
  t = 0;
  //your code here
  for (let die of dice) {
    die.roll();
    die.show();
  }
}
function mousePressed()
{
  redraw();
}

class Die //models one single dice cube
{
  //variable declarations here
  constructor(x, y) //constructor
  {
    //variable initializations here
    this.y = y;
    this.x = x;
    this.rand;
    
  }
  roll()
  {
    //your code here
    this.rand = floor((Math.random())*6)+1;
    t = t + this.rand;
  }
  show()
  {
    //your code here
    if (mousePressed) {

      if (this.rand==1) {
        fill(255, 255, 255);
        rect(this.x, this.y, 100, 100, 15);
        fill(0, 0, 0);
        ellipse(this.x+50, this.y+50, 15, 15);
      } else if (this.rand==2) {
        fill(255, 255, 255);
        rect(this.x, this.y, 100, 100, 15);
        fill(0, 0, 0);
        ellipse(this.x+25, this.y+30, 15, 15);
        ellipse(this.x+75, this.y+70, 15, 15);
      } else if (this.rand==3) {
        fill(255, 255, 255);
        rect(this.x, this.y, 100, 100, 15);
        fill(0, 0, 0);
        ellipse(this.x+25, this.y+30, 15, 15);
        ellipse(this.x+75, this.y+70, 15, 15);
        ellipse(this.x+50, this.y+50, 15, 15);
      } else if (this.rand==4) {
        fill(255, 255, 255);
        rect(this.x, this.y, 100, 100, 15);
        fill(0, 0, 0);
        ellipse(this.x+25, this.y+25, 15, 15);
        ellipse(this.x+75, this.y+75, 15, 15);
        ellipse(this.x+25, this.y+75, 15, 15);
        ellipse(this.x+75, this.y+25, 15, 15);
      } else if (this.rand==5) {
        fill(255, 255, 255);
        rect(this.x, this.y, 100, 100, 15);
        fill(0, 0, 0);
        ellipse(this.x+25, this.y+25, 15, 15);
        ellipse(this.x+75, this.y+75, 15, 15);
        ellipse(this.x+25, this.y+75, 15, 15);
        ellipse(this.x+75, this.y+25, 15, 15);
        ellipse(this.x+50, this.y+50, 15, 15);
      } else if (this.rand==6) {
        fill(255, 255, 255);
        rect(this.x, this.y, 100, 100, 15);
        fill(0, 0, 0);
        ellipse(this.x+25, this.y+25, 15, 15);
        ellipse(this.x+25, this.y+50, 15, 15);
        ellipse(this.x+25, this.y+75, 15, 15);
        ellipse(this.x+75, this.y+25, 15, 15);
        ellipse(this.x+75, this.y+50, 15, 15);
        ellipse(this.x+75, this.y+75, 15, 15);
      }
    }
  }
}
