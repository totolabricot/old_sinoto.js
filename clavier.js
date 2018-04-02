var clavier = {
lettre:"",
phrase:"",
aff: function(){
  rect(300,10,400,20);
  text(this.phrase,305,25);
  console.log(this.lettre);
},
getletter: function(){
  this.lettre=key;
  this.phrase+=key;
}
}
