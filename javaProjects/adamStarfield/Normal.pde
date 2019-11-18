class NormalParticle implements Particle{
  
  int r, g, b, test;
  double x, y, speed, angle;
  
  
  NormalParticle(){
  angle = (Math.PI*2) * Math.random();
    x = Math.cos(5/6 * angle) * Math.cos(angle);
  y = Math.cos(5/6 * angle) * Math.sin(angle);
  speed = Math.random()*20;
  
  }
  void move(){
    //x += Math.cos(angle) * speed;
    //y += Math.sin(angle) * speed;
    //angle += .1;
    
    if(x > 570){
     x = 570; 
    } else if(x < 30){
      x = 30;
    }
    if(y > 570){
     y = 570; 
    } else if(y < 30){
      y = 30;
    }
  }
  void show(){
    noStroke();
    if(test != 0){
     randColor();
      test = 200; 
    }
    test--;
    colorMode(HSB);
    fill(r, g, b, 160);
    ellipse((int)x + 50, (int)y + 50, 10, 10);
  }
  void randColor(){
    r = ((int)(Math.random() * (150) + 100));
    b = ((int)(Math.random() * (150) + 100));
    g = ((int)(Math.random() * (150) + 100));
  }
  }
