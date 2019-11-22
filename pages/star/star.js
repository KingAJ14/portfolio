var pArr;//particle array
function setup() {
    
 // createCanvas(600, 600);
  var canvas = createCanvas(600, 600);
  canvas.parent('sketch-div');
  pArr = [];
  pArr[0] = new OddballParticle();
  for (let i = 1; i<400; i++) {
    pArr[i] = new NormalParticle();
  }
  for (let j = 400; j<407; j++) {
    pArr[j] = new JumboParticle();
  }
}
function draw() {
  background(0);
  for (let i = 0; i<pArr.length; i++) {
    pArr[i].show();
    pArr[i].move();
  }
}
