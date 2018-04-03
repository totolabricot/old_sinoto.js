var commandes = {
phrase:"",
id: 0,
freq: 0,
vol: 0,

check: function(cmd){
  this.phrase=split(cmd,' ');
  console.log(this.phrase);
  this.id=this.phrase[0];
  if (this.phrase[1]=='F'){
    this.freq=this.phrase[2];
    oscilos[this.id].applyfreq(this.freq);
  }
  if (this.phrase[1]=='V'){
  this.vol=this.phrase[2];
  oscilos[this.id].applyvol(this.vol);
}
}
}
