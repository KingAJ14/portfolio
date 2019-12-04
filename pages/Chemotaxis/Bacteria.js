 class Bacteria {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.d = 20;
    this.vel = p5.Vector.random2D();
  }
   move() {
    if (this.pos.x<width && this.pos.x>0 && this.pos.y>0 && this.pos.y<height) {
      this.pos.add(this.vel);
    }
    if (this.pos.x>=width) {
      this.pos.x-=floor(Math.random()*10)+20;
      this.vel = p5.Vector.random2D();
    }
    if (this.pos.y>=height) {
      this.pos.y-=floor(Math.random()*10)+20;
      this.vel = p5.Vector.random2D();
    }
    if (this.pos.x<=0) {
      this.pos.x+=floor(Math.random()*10)+20;
      this.vel = p5.Vector.random2D();
    }
    if (this.pos.y<=0) {
      this.pos.y+=floor(Math.random()*10)+20;
      this.vel = p5.Vector.random2D();
    }
    if (frameCount%(floor(Math.random()*40)+40)==0) {
      this.vel = p5.Vector.random2D();
    }
  }

   show() {
    fill(204, 56, 35);
    ellipse(this.pos.x, this.pos.y, this.d, this.d);
  }
}
