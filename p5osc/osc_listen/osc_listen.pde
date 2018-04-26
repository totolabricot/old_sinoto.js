import oscP5.*;
import netP5.*;

int data;
String user;

OscP5 oscP5;
NetAddress myRemoteLocation;

void setup() {

  oscP5 = new OscP5(this, 12000);
  myRemoteLocation = new NetAddress("127.0.0.1",12000);

  size(400, 400);
  frameRate(10);
}

void draw() {
  background(255);
  textSize(32);
  fill(0);
  text(data, width/2, height/2);

  textSize(15);
  fill(0);
  text(user, 10, 20);
  //println(data);
}