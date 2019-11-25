class Snow implements Snowy{
   double x, y, speed, angle;
   int size = (int)(Math.random() * 6) +1;
  Snow() {
    angle = (Math.PI*2) * Math.random();
    x = Math.random()*750;
    y = Math.random()+300;
    speed = Math.random()*20;
  }
  void move() {
    x += Math.cos(angle) * speed;
    y += Math.sin(angle) * speed;

    angle += .1;

}
void show(){
  fill(255);
  ellipse((int)x, (int) y, size, size);
}
}
