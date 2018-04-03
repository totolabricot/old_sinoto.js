
var oscilos= [];
var nboscilo= 10;
var cmd="";
var id;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (var i=0; i<nboscilo; i++) {
  oscilos.push(new oscilo(i,60+i,10,10+i*15));
// oscilos.push(new oscilo);
// oscilos.init();

  }

}

function draw() {
background(255);
clavier.aff();


for (var i=0; i<nboscilo; i++) {
  oscilos[i].aff();
  }
}

function keyPressed() {

clavier.getletter();


}
