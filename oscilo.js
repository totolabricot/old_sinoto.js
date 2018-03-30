function oscilo(freq,x,y){

  this.freq=freq;
  this.amp=1;
  this.playing = false;
  this.osc = new p5.Oscillator();
  this.osc.setType('sine');
  this.osc.freq(this.freq);
  this.osc.amp(this.amp);
  this.osc.start();

  this.volume = function(){
    this.osc.amp(0);
  }

  this.aff = function(){
  text("fr => "+this.freq,x,y);
  text("vol => "+this.amp,x+100,y);
  }

}
