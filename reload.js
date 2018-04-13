var loadsession = {

nom:"",
backup:"",
listbackup:"",


createload: function(nom){
  this.nom=nom;
  this.backup = loadStrings(nom+".txt", function(result) {
  //  console.log(result[0]);
////////////////////////// faire les actions ici pour attendre que la liste soit chargée

for (var i=0;i<nboscilo;i++){

this.listbackup=split(result[i],'|');
//console.log(this.listbackup);
oscilos[i].loadback(this.listbackup);

}
  });

}
}
