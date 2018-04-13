function oscilo(id,freq,x,y){

  this.id=id;
  this.freq=0;
  this.amp=0;
  this.mute=false;
  this.playing = false;
  this.osc = new p5.Oscillator();
  this.osc.setType('sine');
  this.osc.amp(this.amp);
  this.osc.start();
  this.osc.freq(freq);

  this.applyfreq = function(freq){
  this.freq=freq;
  this.osc.freq(this.freq);
},

 this.applyvol = function(amp){
this.amp=amp/100;
},

this.applymute = function(switchmute){

if (switchmute==true){
  this.mute=!this.mute;
}

if (this.mute==true){
 this.osc.amp(0);
}
if (this.mute==false){
  this.osc.amp(this.amp);
}

},




  this.aff = function(){

  textAlign(RIGHT);
  noStroke();
  fill(0);
  text(this.id,x+35,y+20) //num oscilo
  text(Math.round(this.freq*1000000)/1000000,x+110,y+20); //fequence
  fill(0);
  if (this.amp>0){
    fill(200,0,0);
  }
  if (this.mute==true){
    fill(125);
  }
  text(Math.round(this.amp*1000000)/1000000,x+170,y+20); // volume
  datavis.affreq(this.freq,this.amp,this.mute);

  stroke(0);
  noFill();
  rect(x+10,y+7,165,15);
  line(x+40,y+7,x+40,y+7+15);
  line(x+115,y+7,x+115,y+7+15);

},

this.sauv= function(){
sauvegarde.getlines(float(this.id),float(this.freq),float(this.amp));
},

this.loadback= function(listbackup){
  this.listbackup=listbackup;
  this.freq=float(this.listbackup[1]);
  this.osc.freq(this.freq);
  this.amp=float(this.listbackup[2]);
  this.osc.amp(this.amp);

console.log(this.listbackup);
}


}
