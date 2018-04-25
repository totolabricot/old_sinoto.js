function oscilo(id, freq, x, y) {

<<<<<<< HEAD
  this.id = id;
  this.freq = freq;
  this.amp = 0;
=======
  this.id=id;
  this.freq=0;
  this.amp=0;
  this.mute=false;
>>>>>>> 07b7c53af1fadf6b7ae0ea4f0da4eeb7dcc6125d
  this.playing = false;
  this.voltoggle =false;
  this.timer=0;
  this.duree=0;
  this.pok=""; ////////////////////////////////////// la liste de pok doit etre inclu dan sl'ocsilo et non dans la timeline;
  this.poklist="";
  this.xpok="";
  this.osc = new p5.Oscillator();
  this.osc.setType('sine');
  this.osc.amp(this.amp);
  this.osc.start();
  this.osc.freq(freq);


<<<<<<< HEAD
  this.applyfreq = function(freq) {
    this.freq = int(freq);
    this.osc.freq(this.freq);
  },

  this.applyvol = function(amp) {
    this.amp = float(amp / 1000);
    this.osc.amp(this.amp);
  },

  this.aff = function() {
    text("osc~ " + this.id, x, y + 100)
    text("fr => " + this.freq, x + 80, y + 100);
    text("vol => " + this.amp, x + 160, y + 100);
=======
  this.applyfreq = function(freq){
  this.freq=freq;
  this.osc.freq(this.freq);
},

 this.applyvol = function(amp){
this.amp=amp/100;
},

this.setduree= function(duree){
this.duree=duree;
},

this.settimer= function(timer){
this.timer=timer;

if (this.mute==false){
for (var i=0; i<this.pok.length;i++){
if (this.timer==this.pok[i]){
  this.voltoggle=!this.voltoggle;
if (this.voltoggle==true){
this.osc.amp(0);
}
if (this.voltoggle==false){
this.osc.amp(this.amp);
   }
  }
}
}

},

this.resetvol= function(){
this.voltoggle=false;
this.osc.amp(this.amp);
},

this.setpok= function(pok){
this.poklist=pok;
this.pok=split(this.poklist,'<');
console.log(this.poklist)
},

this.resetpok= function(){
  for (var i=0; i<this.pok.length;i++){
this.voltoggle=false;
this.osc.amp(this.amp);
  }
this.pok="";
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
  if (this.mute==true || this.voltoggle==true){
    fill(125);
>>>>>>> 07b7c53af1fadf6b7ae0ea4f0da4eeb7dcc6125d
  }
  text(Math.round(this.amp*1000000)/1000000,x+170,y+20); // volume
  datavis.affreq(this.freq,this.amp,this.mute);

  stroke(0);
  noFill();
  rect(x+10,y+7,165,15);
  line(x+40,y+7,x+40,y+7+15);
  line(x+115,y+7,x+115,y+7+15);

if (int(this.pok[0])>=0){
    for (var i=0; i<this.pok.length;i++){
        this.xpok=map(int(this.pok[i]),0,this.duree,xtimeline,xtimeline+longtimeline);
      //  console.log(this.xpok);
  line(int(this.xpok),ytimeline,int(this.xpok),ytimeline+20);

}
//text(this.id,this.xpok, ytimeline+25);
  }

},

this.sauv= function(){
sauvegarde.getlines(float(this.id),float(this.freq),float(this.amp),this.poklist);
},

this.loadback= function(listbackup){
  this.listbackup=listbackup;
  this.freq=float(this.listbackup[1]);
  this.osc.freq(this.freq);
  this.amp=float(this.listbackup[2]);
  this.osc.amp(this.amp);
  this.setpok(this.listbackup[3]);
console.log(this.pok);
}


}
