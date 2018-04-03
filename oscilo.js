function oscilo(id,freq,x,y){

  this.id=id;
  this.freq=freq;
  this.amp=0;
  this.playing = false;
  this.osc = new p5.Oscillator();
  this.osc.setType('sine');
  this.osc.freq(this.freq);
  this.osc.amp(this.amp);
  this.osc.start();

  this.applyfreq = function(freq){
  this.freq=freq;
  this.osc.amp(this.freq);
},

 this.applyvol = function(amp){
 this.amp=amp;
 this.osc.amp(this.amp);
},

  this.aff = function(){
  text("osc~ "+this.id,x,y+100)
  text("fr => "+this.freq,x+80,y+100);
  text("vol => "+this.amp,x+160,y+100);
  }

}
