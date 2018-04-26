var socket;
var slider;
var data;
// addresse de la machine hote
<<<<<<< HEAD
var ip = 'http://localhost:3000';
=======
var ip = 'http://192.168.5.133:3000';
>>>>>>> 553fb4093b51ac3893f4e0a168fef5267f394876

function setup(){


  createCanvas(720, 400);

  slider = createSlider(0, 300, 50);
  slider.position(50, 250);
  socket = io.connect(ip);

  socket.on('slider', function(data) {
  });

  frameRate(10);

}

function draw(){
  background(200);
  noFill();
  text(ip, 10, 30);

  data = slider.value()
  socket.emit('slider', data)
  console.log(data)
}
