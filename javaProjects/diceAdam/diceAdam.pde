Die[] dice;
int t;
void setup()
{
  noLoop();
  //background(0, 200, 0);
  size(500, 500);
  dice=new Die[9];
  for (int i=0; i<3; i++) {
    for (int j=0; j<3; j++) {
      dice[i*3+j] = new Die(120*i+20, 120*j+20);
    }
  }
}
void draw()
{
  background(0, 200, 0);
  textSize(20);
  fill(0);
  text("Total: "+t, 50, 400);
  t = 0;
  //your code here
  for (Die die : dice) {
    die.roll();
    die.show();
  }
}
void mousePressed()
{
  redraw();
}

class Die //models one single dice cube
{
  //variable declarations here
  int x;
  int y;
  int rand;
  Die(int x, int y) //constructor
  {
    //variable initializations here
    this.y = y;
    this.x = x;
    
  }
  void roll()
  {
    //your code here
    rand = (int)((Math.random())*6)+1;
    t = t + rand;
  }
  void show()
  {
    //your code here
    if (mousePressed) {

      if (rand==1) {
        fill(255, 255, 255);
        rect(x, y, 100, 100, 15);
        fill(0, 0, 0);
        ellipse(x+50, y+50, 15, 15);
      } else if (rand==2) {
        fill(255, 255, 255);
        rect(x, y, 100, 100, 15);
        fill(0, 0, 0);
        ellipse(x+25, y+30, 15, 15);
        ellipse(x+75, y+70, 15, 15);
      } else if (rand==3) {
        fill(255, 255, 255);
        rect(x, y, 100, 100, 15);
        fill(0, 0, 0);
        ellipse(x+25, y+30, 15, 15);
        ellipse(x+75, y+70, 15, 15);
        ellipse(x+50, y+50, 15, 15);
      } else if (rand==4) {
        fill(255, 255, 255);
        rect(x, y, 100, 100, 15);
        fill(0, 0, 0);
        ellipse(x+25, y+25, 15, 15);
        ellipse(x+75, y+75, 15, 15);
        ellipse(x+25, y+75, 15, 15);
        ellipse(x+75, y+25, 15, 15);
      } else if (rand==5) {
        fill(255, 255, 255);
        rect(x, y, 100, 100, 15);
        fill(0, 0, 0);
        ellipse(x+25, y+25, 15, 15);
        ellipse(x+75, y+75, 15, 15);
        ellipse(x+25, y+75, 15, 15);
        ellipse(x+75, y+25, 15, 15);
        ellipse(x+50, y+50, 15, 15);
      } else if (rand==6) {
        fill(255, 255, 255);
        rect(x, y, 100, 100, 15);
        fill(0, 0, 0);
        ellipse(x+25, y+25, 15, 15);
        ellipse(x+25, y+50, 15, 15);
        ellipse(x+25, y+75, 15, 15);
        ellipse(x+75, y+25, 15, 15);
        ellipse(x+75, y+50, 15, 15);
        ellipse(x+75, y+75, 15, 15);
      }
    }
  }
}
