var datavis={

  x:0,

  affline: function(){

fill(0);
stroke(0);
  line(20,windowHeight-110,windowWidth-20,windowHeight-110);

},
  affreq: function(x, vol, mute){

fill(0);
stroke(0);
this.x=x;
this.vol=float(vol);
//console.log(this.vol);
this.mute=mute;
if (this.mute==false && this.vol>0){
line(map(this.x,0,16000,20,windowWidth-20),windowHeight-90,map(this.x,0,16000,20,windowWidth-20),windowHeight-130);
  }
}
}
