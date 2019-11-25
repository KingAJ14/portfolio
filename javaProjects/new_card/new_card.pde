Snowy [] ball;
House [] h;
Snowman [] sman;
Tree [] t;


void setup(){
  //thank you alex
  size(800, 400);
  
  

  ball = new Snowy[400];
  for (int i = 0; i<400; i++) {
    ball[i] = new Snow();
  }
  h = new House[1];
  for(int i = 0; i < h.length; i++){
    h[i] = new House();
  }
  sman = new Snowman[1];
  for(int i = 0; i < sman.length; i++){
    sman[i] = new Snowman();
  }
  t = new Tree[1];
  for(int i = 0; i < t.length; i++){
    t[i] = new Tree();
  }
}
void draw(){
  background(0, 0, 255);
  fill(255);
  rect(0, 390, 800, 10);
 
  for (int i = 0; i<ball.length; i++) {
    ball[i].show();
    ball[i].move();
  }
  for (int i = 0; i<h.length; i++) {
    h[i].show();
    h[i].move();
  }
  for (int i = 0; i<sman.length; i++) {
    sman[i].show();
    sman[i].move();
  }
    for (int i = 0; i<t.length; i++) {
    t[i].show();
    t[i].move();
  }
}

interface Snowy {
  void move();
  void show();
}
