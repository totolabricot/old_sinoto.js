import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import oscP5.*; 
import netP5.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class osc_listen extends PApplet {




int data;
String user;
String commande;

OscP5 oscP5;
NetAddress myRemoteLocation;

public void setup() {

  oscP5 = new OscP5(this, 8000);
  println(this);
  myRemoteLocation = new NetAddress("127.0.1.1",8000);

  
  frameRate(10);
}

public void draw() {
  background(255);
  textSize(32);
  fill(0);
  text(commande, width/2, height/2);

  textSize(15);
  fill(0);
  text(user, 10, 20);
  //println(data);
}
/* incoming osc message are forwarded to the oscEvent method. */
public void oscEvent(OscMessage Message) {
  /* print the address pattern and the typetag of the received OscMessage */

  //int data1 =

  // data = Message.get(0).intValue();
  user = Message.addrPattern();
  commande = Message.get(0).stringValue();

  print("### received an osc message.");
  println(" addrpattern: "+Message.addrPattern());
  println("commande:" + Message.get(0).stringValue());
  // println(" data: "+Message.get(0).intValue());
  //println(" data Y: "+theOscMessage.get(1).intValue());
}
  public void settings() {  size(400, 400); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "osc_listen" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
