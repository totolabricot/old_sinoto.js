var clavier = {
<<<<<<< HEAD
  lettre: "",
  phrase: "",

  aff: function() {
    fill(0);
    rect(10, 10, 250, 20);
    fill(255);
    text(this.phrase, 15, 25);
    fill(0);
    text(">>> " + cmd, 15, 65);
    //  console.log(this.lettre);
  },
  getletter: function() {

    if (keyCode === 8) {
      this.phrase = "";
    }
    if (keyCode === 13) {
      cmd = this.phrase;
      this.phrase = "";
      commandes.check(cmd);
    }
    if (keyCode !== 8 && keyCode !== 13) {
      console.log(key);
      this.lettre = key;
      this.phrase += key;
    }
=======
phrase:"",
lastphrase:"",
last:"",
historique:"",
current: 0,
back: 0,

aff: function(){
  textAlign(LEFT);
  noStroke();
  fill(0);
  rect(20,windowHeight-30,windowWidth-40,20);
  fill(255);
  text(this.phrase,27,windowHeight-15);
  fill(0);
  text(">>> "+cmd,30,windowHeight-50);
//  console.log(this.lettre);
},
getletter: function(){

if (keyCode === 8 || keyCode === 12) {
  this.phrase="";
  this.back=0;
}
if (keyCode === 13) {
  cmd=this.phrase;
  this.lastphrase=split(this.phrase,' ');
  this.last+=this.lastphrase[0]+" ";
  this.historique=split(this.last,' ');
  this.current++;
  this.back=0;

  //console.log(this.last);
  this.phrase="";
  commandes.check(cmd);
}
if (keyCode !==8 && keyCode !== 13 && keyCode !== 38 && keyCode !== 40 && keyCode<96){
    this.phrase+=key;
     }

if (keyCode>=96 && keyCode<=105 ) {
this.phrase+=int(keyCode-96);
}

if (keyCode===106) {
this.phrase+="F";
}

if (keyCode===109) {
this.phrase+="V";
}

if (keyCode===107) {
this.phrase+=" ";
}

if (keyCode===110 || keyCode===188) {
this.phrase+="<";
}
if (keyCode===186) {
this.phrase+=".";
}

if (keyCode===38 ) { /////////////////////////////sauvegarde
if(this.current-this.back>0){
this.back++;
this.phrase=this.historique[this.current-this.back]+" ";
}
}

if (keyCode===40 ) { /////////////////////////////sauvegarde
if(this.back>0){
this.back--;
this.phrase=this.historique[this.current-this.back]+" ";
}
}
>>>>>>> 07b7c53af1fadf6b7ae0ea4f0da4eeb7dcc6125d
  }


}
