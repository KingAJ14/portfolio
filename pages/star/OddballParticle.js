class OddballParticle //uses an interface
{
  
  constructor() {
    this.angle = (Math.PI*2) * Math.random();
    this.x = Math.random()*450;
    this.y = Math.random()+300;
    this.speed = Math.random()*20;
  }
  move() {
    this.y += Math.cos(this.angle) * this.speed;
    this.x += Math.sin(this.angle) * this.speed;

    this.angle += 0.1;

    if (this.x > 570) {
      this.x = 570;
    } else if (this.x < 30) {
      this.x = 30;
    }
    if (this.y > 570) {
      this.y = 570;
    } else if (this.y < 30) {
      this.y = 30;
    }
  }
  show() {
    noStroke();
    colorMode(RGB);
    fill(255, 255, 0);
    ellipse(this.x + 50, this.y + 50, 70, 70);
  }
}
