var b=new Array();
var f;//Food []
function setup()   
{     
  //createCanvas(600, 600);
 var canvas = createCanvas(600, 600);
 canvas.parent('sketch-div');
  for (let i = 0; i < 10; i++) {
    b[i]=new Bacteria((Math.random()*500)+50, (Math.random()*500)+50);
  }
  f = [];
  for (let i = 0; i < 25; i++) {
    f[i]=new Food((Math.random()*500)+50, (Math.random()*500)+50);
  }
  background(0, 0, 255);
}   
function draw()   
{    
  background(49, 57, 82);

  for (let i = 0; i < b.length; i++) {
    b[i].show(); 
    b[i].move();
  }
  for (let i = 0; i < f.length; i++) {
    f[i].show();
  }
  check();
}  

function check() {
  for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < f.length; j++) {
      if (abs(b[i].pos.x - f[j].x) < b[i].d/2 && abs(b[i].pos.y - f[j].y) < b[i].d/2) {
        b[i].d +=10;
        f[j].x = (Math.random()*500)+50;
        f[j].y = (Math.random()*500)+50;
      }
    }
  }
  for (let i = 0; i < b.length; i++) {
    if (b[i].d > 80) {
      b[i].d = 20;
    }
  }
  for (let i = 0; i < b.length; i++) {
    for(let j = 0; j<b.length; j++){
      if(i!=j && (abs(b[i].pos.x - b[j].pos.x) < b[i].d/2 ||
      abs(b[i].pos.x - b[j].pos.x) < b[j].d/2)  && 
      (abs(b[i].pos.y - b[j].pos.y) < b[i].d/2 ||
      abs(b[i].pos.y - b[j].pos.y) < b[j].d/2)){
        if(b[i].d > b[j].d){
          b[i].d += 20;
          b[j].d = 20;
          b[j].pos.x = (Math.random()*500)+50;
          b[j].pos.y = (Math.random()*500)+50;
        }if(b[i].d < b[j].d){
            b[j].d += 20;
          b[i].d = 20;
          b[i].pos.x = (Math.random()*500)+50;
          b[i].pos.y = (Math.random()*500)+50;
        }if(b[i].d == b[j].d){
          b[j].d += 20;
          b[i].d = 20;
          b[i].pos.x = (Math.random()*500)+50;
          b[i].pos.y = (Math.random()*500)+50;
        }
      }
    }
  }
}

 