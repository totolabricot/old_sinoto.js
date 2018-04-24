var timeline = {

duree: 0,
timer:0,
x:-10,

initialtimer: function(duree){
this.duree=float(duree);
for (var i=0; i<nboscilo;i++){
oscilos[i].setduree(this.duree);
}


},

playtimer: function(){

this.timer++;

for (var i=0; i<nboscilo;i++){
oscilos[i].settimer(this.timer);
}

if (this.timer>this.duree){
  this.timer=0;
}
},


reinitimer: function(){
this.timer=0;
},

sauv: function(){
sauvegarde.gettimeline(this.duree);
},


aff: function(){
  this.x=map(this.timer,0,this.duree,xtimeline,xtimeline+longtimeline)
noFill();
line(this.x,ytimeline,this.x,ytimeline+30);
rect(xtimeline,ytimeline,longtimeline,60);
text(this.duree+"   "+this.timer,xtimeline,ytimeline-10);

}
}
