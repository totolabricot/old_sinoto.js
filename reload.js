var loadsession = {

nom:"",
backup:"",
listbackup:"",
triche:0,


createload: function(nom){
  this.nom=nom;
  this.backup = loadStrings("http://localhost:8000/Downloads/"+nom+".txt", function(result) {
  //  console.log(result[0]);
////////////////////////// faire les actions ici pour attendre que la liste soit chargée

//console.log(result[0]);
//timeline.initialtimer(result[0]);
console.log("duree"+result[0]);


for (var i=0;i<nboscilo;i++){
this.listbackup=split(result[i],'|');

  if (i==0){
    timeline.initialtimer(this.listbackup);
    console.log(this.listbackup);
  }
  if (i>0){
//console.log(this.listbackup);
oscilos[i-1].loadback(this.listbackup);
//console.log(this.listbackup);
//console.log(this.listbackup[1]);
}
}


  });

}
}
