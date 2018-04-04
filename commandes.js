var commandes = {
phrase:"",
id: "",
freq: 0,
vol: 0,

check: function(cmd){
  this.phrase=split(cmd,' ');
  console.log(this.phrase);
  this.id=split(this.phrase[0],'<');

  if (this.phrase[1]=='F'){
    console.log("freqmode");
          this.freq=split(this.phrase[2],'<');
   if (int(this.id[1]>0)){
   for (var i=int(this.id[0]); i<int(this.id[1])+1;i++) {
    oscilos[i].applyfreq(int(this.freq[0])+int(this.freq[1]*(i-this.id[0])));
    }
}
  else {
    oscilos[int(this.phrase[0])].applyfreq(int(this.phrase[2]));
  }
}


if (this.phrase[1]=='V'){
  console.log("volmode");
        this.vol=split(this.phrase[2],'<');
 if (int(this.id[1]>0)){
 for (var i=int(this.id[0]); i<int(this.id[1])+1;i++) {
oscilos[i].applyvol(int(this.vol[0])+int(this.vol[1]*(i-this.id[0])));

  }
}
else {
  oscilos[int(this.phrase[0])].applyvol(this.phrase[2]);
}
}

if (this.phrase[1]!='V' && this.phrase[1]!='F'){
  console.log("else");
this.freq=split(this.phrase[1],'<');
this.vol=split(this.phrase[2],'<');
if (int(this.id[1]>0)){
for (var i=int(this.id[0]); i<int(this.id[1])+1;i++) {
   oscilos[i].applyfreq(int(this.freq[0])+int(this.freq[1]*(i-this.id[0])));
   oscilos[i].applyvol(int(this.vol[0])+int(this.vol[1]*(i-this.id[0])));
 }
}
else {
  oscilos[this.phrase[0]].applyvol(this.vol[0]);
  oscilos[this.phrase[0]].applyfreq(this.freq[0]);
}

}


}
}
