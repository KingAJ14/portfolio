public class Food {
  private int x, y;
  Food(int x, int y) {
    this.x = x;
    this.y = y;
  }
  int setX() {
    return x;
  }
  int setY() {
    return y;
  }
  void show() {
    fill(255, 241, 217);
    ellipse(x, y, 10, 10);
  }
}
