import oscP5.*;
import netP5.*;

int data;
String user = "user";
String commande = "commande";

OscP5 oscP5;
NetAddress myRemoteLocation;

void setup() {

  oscP5 = new OscP5(this, 8000);
  myRemoteLocation = new NetAddress("127.0.1.1",8000);

  size(400, 400);
  frameRate(10);
}

void draw() {
  background(255);
  textSize(32);
  fill(0);
  text(commande, width/2, height/2);

  textSize(15);
  fill(0);
  text(user, 10, 20);
  //println(data);
}
