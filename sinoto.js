
var oscilos= [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i=0; i<50; i++) {
    oscilos.push(new oscilo(i+60,10,100+i*20));
  }

}

function draw() {
  background(255);
clavier();

for (var i=0; i<50; i++) {
  oscilos[i].aff();
}



}

function keyPressed() {

  if (keyCode === 32) {
    for (var i=0; i<50; i++) {
      oscilos[i].volume(0);
    }

  }
}
