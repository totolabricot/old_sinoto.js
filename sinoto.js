
var oscilos= [];
var nboscilo= 152;
var cmd="";
var id;
var x=50;
var y=10;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (var i=0; i<nboscilo; i++) {

    if (y>windowHeight-150){
    y=10;
    x+=300

    }
  oscilos.push(new oscilo(i,60+i,x,y));
// oscilos.push(new oscilo);
// oscilos.init();
y+=15;
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
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
