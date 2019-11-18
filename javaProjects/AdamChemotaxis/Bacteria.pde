

public class Bacteria {
  private PVector pos, vel;
  private int d;
  Bacteria(int x, int y) {
    pos = new PVector(x, y);
    d = 20;
    vel = PVector.random2D();
  }
  void move() {
    if (pos.x<width && pos.x>0 && pos.y>0 && pos.y<height) {
      pos.add(vel);
    }
    if (pos.x>=width) {
      pos.x-=(int)(Math.random()*10)+20;
      vel = PVector.random2D();
    }
    if (pos.y>=height) {
      pos.y-=(int)(Math.random()*10)+20;
      vel = PVector.random2D();
    }
    if (pos.x<=0) {
      pos.x+=(int)(Math.random()*10)+20;
      vel = PVector.random2D();
    }
    if (pos.y<=0) {
      pos.y+=(int)(Math.random()*10)+20;
      vel = PVector.random2D();
    }
    if (frameCount%((int)(Math.random()*40)+40)==0) {
      vel = PVector.random2D();
    }
  }

  void show() {
    fill(204, 56, 35);
    ellipse(pos.x, pos.y, d, d);
  }
}
