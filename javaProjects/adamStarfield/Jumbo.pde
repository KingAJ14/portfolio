class JumboParticle extends NormalParticle//uses inheritance
{
  JumboParticle() {
    super();
  }
  void show() {
    noStroke();
    colorMode(HSB);
    fill(255, 100);
    ellipse((int)x + 50, (int)y + 50, 25, 25);
  }
}
