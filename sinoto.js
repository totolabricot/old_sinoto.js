
var oscilos= [];
var nboscilo= 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i=0; i<nboscilo; i++) {
    oscilos.push(new oscilo(i,i+60,10,10+i*15));
  }
  
}

function draw() {
background(255);
clavier.aff();
//aff(phrase);


for (var i=0; i<nboscilo; i++) {
  oscilos[i].aff();
}



}

function keyPressed() {

  clavier.getletter();

  if (keyCode === 32) {
    for (var i=0; i<nboscilo; i++) {
      oscilos[i].volume(0);
    }

  }
}
