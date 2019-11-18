NormalParticle [] np;

void setup(){
  size(600, 600);
  np = new NormalParticle[400];
  for(int i = 0; i<np.length; i++){
    np[i] = new NormalParticle();
  }
  
}
void draw(){
  background(0, 0, 0);
  for (int i = 0; i<np.length; i++){
  np[i].show();
  np[i].move();
}
}

interface Particle{
  //your code here
  void move();
  void show();
}
