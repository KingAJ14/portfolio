Particle [] pArr;

void setup() {
  size(600, 600);
  pArr = new Particle[407];
  pArr[0] = new OddballParticle();
  for (int i = 1; i<400; i++) {
    pArr[i] = new NormalParticle();
  }
  for (int j = 400; j<407; j++) {
    pArr[j] = new JumboParticle();
  }
}
void draw() {
  background(0);
  for (int i = 0; i<pArr.length; i++) {
    pArr[i].show();
    pArr[i].move();
  }
}

interface Particle {
  //your code here
  void move();
  void show();
}
