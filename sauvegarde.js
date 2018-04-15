
var sauvegarde = {

nom: "",
session:"",
id:"",
freq:"",
vol:"",
pok:"",
sauv:"",
duree:0,

createsauv: function(nom){
this.nom=nom;
this.sauv= createWriter(this.nom+".txt");
},

gettimeline:function(duree){
this.duree=int(duree);
this.sauv.print(this.duree);

},

getlines:function(id,freq,vol,pok){
  this.id=id;
  this.freq=freq;
  this.vol=vol;
  this.pok=pok;
  //console.log(this.pok);
  this.sauv.print(this.id+"|"+this.freq+"|"+this.vol+"|"+this.pok+"|");

},
gosave:function(){
  this.sauv.close();

}

}
