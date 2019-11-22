class OddballParticle implements Particle//uses an interface
{
  double x, y, speed, angle;
  OddballParticle() {
    angle = (Math.PI*2) * Math.random();
    x = Math.random()*450;
    y = Math.random()+300;
    speed = Math.random()*20;
  }
  void move() {
    y += Math.cos(angle) * speed;
    x += Math.sin(angle) * speed;

    angle += .1;

    if (x > 570) {
      x = 570;
    } else if (x < 30) {
      x = 30;
    }
    if (y > 570) {
      y = 570;
    } else if (y < 30) {
      y = 30;
    }
  }
  void show() {
    noStroke();
    colorMode(RGB);
    fill(255, 255, 0);
    ellipse((int)x + 50, (int)y + 50, 70, 70);
  }
}
