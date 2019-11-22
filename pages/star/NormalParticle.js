class NormalParticle {

  


  constructor() {
    this.angle = (Math.PI*2) * Math.random();
    this.x = Math.random()*450;
    this.y = Math.random()+300;
    this.speed = Math.random()*20;
    this.r = 0;
    this.g = 0;
    this.b = 0;
  }
  move() {
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;

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
    this.randColor();
    colorMode(HSB);
    fill(this.r, this.g, this.b, 0.62);
    ellipse(this.x + 50, this.y + 50, 10, 10);
  }
  randColor() {
    this.r = ((Math.random() * (250) + 100));
    this.b = ((Math.random() * (250) + 100));
    this.g = ((Math.random() * (250) + 100));
  }
}
