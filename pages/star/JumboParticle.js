class JumboParticle extends NormalParticle//uses inheritance
{
  constructor() {
    super();
  }
  show() {
    noStroke();
    colorMode(HSB);
    fill(255, 0.39);
    ellipse(this.x + 50, this.y + 50, 25, 25);
  }
}
