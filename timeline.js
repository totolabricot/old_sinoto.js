var timeline = {

duree: 0,
timer:0,
x:-10,
poklist:"",
poklistx:"",
pokonoff:false,


initialtimer: function(duree){
this.duree=float(duree);
},

playtimer: function(){

this.timer++;
this.pokonoff=false;
if (this.timer>this.duree){
  this.timer=0;
}
if (this.poklist[0]>=0){

  for (var i=0; i<this.poklist.length;i++){
      if (this.timer==int(this.poklist[i]))this.pokonoff=true;
}

    for (var i=0; i<nboscilo;i++){
    oscilos[i].linktotime(this.pokonoff);
  }
  }

  //console.log(this.pokonoff);
}
,


reinitimer: function(){
this.timer=0;
},

pok: function(poklist){
  if (poklist=="E")this.poklist="";
  if (poklist!="E"){
  if (this.poklist!="") {
    poklist="<"+poklist;
     this.poklist+=split(poklist,'<');
  }
  if (this.poklist=="") {
     this.poklist+=(split(poklist,'<'));
   }
  }
},

aff: function(){
  this.x=map(this.timer,0,this.duree,windowWidth-210,windowWidth-10)
noFill();
line(this.x,15,this.x,60);
rect(windowWidth-210,15,200,60);
text(this.duree+"   "+this.timer,windowWidth-210,90);
text(this.poklist,windowWidth-210,105);

//if (this.poklist!=""){
for (var i=0; i<this.poklist.length;i++){
this.poklistx[i]=(map(int(this.poklist[i]),0,this.duree,windowWidth-210,windowWidth-10));

line(int(this.poklistx[i]),15,int(this.poklistx[i]),60);
}
  console.log(this.poklistx);
}





}
