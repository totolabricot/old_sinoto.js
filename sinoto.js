
var oscilos= [];
var nboscilo= 100;
var cmd="";
var id;
var x=10;
var y=10;

function setup() {
  createCanvas(windowWidth, windowHeight);
 frameRate(10);
  for (var i=0; i<nboscilo; i++) {

    if (y>windowHeight-200){
    y=10;
    x+=165

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
datavis.affline();


for (var i=0; i<nboscilo; i++) {
  oscilos[i].aff();
  }
}

function keyPressed() {

clavier.getletter();
  //console.log(keyCode);


}
