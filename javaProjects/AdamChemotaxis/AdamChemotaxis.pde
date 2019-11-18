Bacteria [] b;
Food [] f;
void setup()   
{     
  size(600, 600);
  b = new Bacteria[10];
  for (int i = 0; i < b.length; i++) {
    b[i]=new Bacteria((int)(Math.random()*500)+50, (int)(Math.random()*500)+50);
  }
  f = new Food[25];
  for (int i = 0; i < f.length; i++) {
    f[i]=new Food((int)(Math.random()*500)+50, (int)(Math.random()*500)+50);
  }
  background(0, 0, 255);
}   
void draw()   
{    
  background(49, 57, 82);

  for (int i = 0; i < b.length; i++) {
    b[i].show(); 
    b[i].move();
  }
  for (int i = 0; i < f.length; i++) {
    f[i].show();
  }
  check();
}  

void check() {
  for (int i = 0; i < b.length; i++) {
    for (int j = 0; j < f.length; j++) {
      if (abs(b[i].pos.x - f[j].x) < b[i].d/2 && abs(b[i].pos.y - f[j].y) < b[i].d/2) {
        b[i].d +=10;
        f[j].x = (int)(Math.random()*500)+50;
        f[j].y = (int)(Math.random()*500)+50;
      }
    }
  }
  for (int i = 0; i < b.length; i++) {
    if (b[i].d > 80) {
      b[i].d = 20;
    }
  }
  for (int i = 0; i < b.length; i++) {
    for(int j = 0; j<b.length; j++){
      if(i!=j && (abs(b[i].pos.x - b[j].pos.x) < b[i].d/2 ||
      abs(b[i].pos.x - b[j].pos.x) < b[j].d/2)  && 
      (abs(b[i].pos.y - b[j].pos.y) < b[i].d/2 ||
      abs(b[i].pos.y - b[j].pos.y) < b[j].d/2)){
        if(b[i].d > b[j].d){
          b[i].d += 20;
          b[j].d = 20;
          b[j].pos.x = (int)(Math.random()*500)+50;
          b[j].pos.y = (int)(Math.random()*500)+50;
        }if(b[i].d < b[j].d){
            b[j].d += 20;
          b[i].d = 20;
          b[i].pos.x = (int)(Math.random()*500)+50;
          b[i].pos.y = (int)(Math.random()*500)+50;
        }if(b[i].d == b[j].d){
            b[j].d += 20;
          b[i].d = 20;
          b[i].pos.x = (int)(Math.random()*500)+50;
          b[i].pos.y = (int)(Math.random()*500)+50;
        }
      }
    }
  }
}
