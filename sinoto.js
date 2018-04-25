
var oscilos= [];
var nboscilo= 280;
var cmd="SiNoTo";
var id;
var x=10;
var y=10;
var activtimer= false;
var xtimeline;
var ytimeline;
var longtimeline=300


function setup() {
  createCanvas(windowWidth, windowHeight);
 frameRate(30);
 xtimeline=windowWidth-(longtimeline+20);
 ytimeline=windowHeight-240;
  for (var i=0; i<nboscilo; i++) {
    if (y>windowHeight-200){
    y=10;
    x+=165
    }
  oscilos.push(new oscilo(i,60+i,x,y));
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
timeline.aff();
if (activtimer==true)timeline.playtimer();

for (var i=0; i<nboscilo; i++) {
  oscilos[i].aff();
  }
}


function keyPressed() {
clavier.getletter();
  //console.log(keyCode);
}
