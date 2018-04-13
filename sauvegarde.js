
var sauvegarde = {

nom: "",
session:"",
id:"",
freq:"",
vol:"",
sauv:"",

createsauv: function(nom){
this.nom=nom;
this.sauv= createWriter(this.nom+".txt");
},

getlines:function(id,freq,vol){
  this.id=id;
  this.freq=freq;
  this.vol=vol;
  this.sauv.print(this.id+"|"+this.freq+"|"+this.vol);

},
gosave:function(){
  this.sauv.close();

}

}
