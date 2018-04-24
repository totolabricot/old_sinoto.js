var socket;
var x,y;
// addresse de la machine hote
var ip = 'http://192.168.1.42:3000';

function setup(){


  createCanvas(720, 400);


  socket = io.connect(ip);

  socket.on('mouse',
    function(data){
      fill(0,0,255);
      noStroke();
      ellipse(data.x, data.y, 80, 80);
    }
  );


}

function draw(){
  background(200);
  noFill();
  text(ip, 10, 30);
  stroke(0, 153, 255);
  line(x, y, x*2, y*2);

}

function mouseDragged(){

  var data = {
    x: mouseX,
    y: mouseY
  };

  x = data.x;
  y = data.y;

  console.log(x + " - " + y);

  socket.emit('mouse', data);

}
