/* incoming osc message are forwarded to the oscEvent method. */
void oscEvent(OscMessage Message) {
  /* print the address pattern and the typetag of the received OscMessage */

  //int data1 =

  // data = Message.get(0).intValue();
  user = Message.addrPattern();
  commande = Message.get(0).stringValue();

  print("### received an osc message.");
  println(" addrpattern: "+ Message.addrPattern());
  println("commande:" + Message.get(0).stringValue());
  // println(" data: "+Message.get(0).intValue());
  //println(" data Y: "+theOscMessage.get(1).intValue());
}
