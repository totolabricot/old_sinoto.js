var oscilo={

  init: function(){
  osc = new p5.Oscillator();
  this.osc.setType('sine');
  this.osc.freq(this.freq);
  this.osc.amp(this.amp);
  this.osc.start();
},

  aff: function(){
  text("osc~ "+this.id,x,y+100);
  text("fr => "+this.freq,x+80,y+100);
  text("vol => "+this.amp,x+160,y+100);
  }

}
