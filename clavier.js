var clavier = {
lettre:"",
phrase:"",

aff: function(){
  fill(0);
  rect(10,10,250,20);
  fill(255);
  text(this.phrase,15,25);
  fill(0);
  text(">>> "+cmd,15,65);
//  console.log(this.lettre);
},
getletter: function(){

if (keyCode === 8) {
  this.phrase="";
}
if (keyCode === 13) {
  cmd=this.phrase;
  this.phrase="";
  commandes.check(cmd);
}
  else{  this.lettre=key;
    this.phrase+=key;
     }
  }
}
