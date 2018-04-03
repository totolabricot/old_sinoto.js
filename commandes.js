var commandes = {
phrase:"",
id: 0,
freq: false,
vol: false,

check: function(cmd){
  this.phrase=split(cmd,' ');
  console.log(this.phrase);
  id=this.phrase[0];
  if (this.phrase[1]=='F')console.log("freqmode");
  vol=this.phrase[2];

}
}
