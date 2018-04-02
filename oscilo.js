function oscilo(id,freq,x,y){

  this.id=id;
  this.freq=freq;
  this.amp=1;
  this.playing = false;
  this.osc = new p5.Oscillator();
  this.osc.setType('sine');
  this.osc.freq(this.freq);
  this.osc.amp(this.amp);
  this.osc.start();

  this.volume = function(){
    if (this.osc.amp()==0) this.osc.amp(1);
    if (this.osc.amp()==1) this.osc.amp(0);
  }

  this.aff = function(){
  text("osc~ "+this.id,x,y)
  text("fr => "+this.freq,x+80,y);
  text("vol => "+this.amp,x+160,y);
  }

}
