var commandes = {
phrase:"",
id: "",
freq: 0,
vol: 0,
mute: false,

check: function(cmd){
  this.phrase=split(cmd,' ');
//  console.log(this.phrase);
  this.id=split(this.phrase[0],'<');



  if (this.phrase[1]=='F'){ /////////////////////// JUSTE FREQUENCE
          this.freq=float(split(this.phrase[2],'<'));

   if (int(this.id[1]>0)){
   for (var i=int(this.id[0]); i<int(this.id[1])+1;i++) {
  if (this.freq[1]>0) oscilos[i].applyfreq(float(this.freq[0]+this.freq[1]*(i-this.id[0])));
  else{ oscilos[i].applyfreq(this.freq[0]);
  }
    }
}
  else {
    oscilos[int(this.phrase[0])].applyfreq(float(this.freq[0]));
  }
}


if (this.phrase[1]=='V'){ //////////////////////// JUSTE VOLUME
        this.vol=float(split(this.phrase[2],'<'));
 if (int(this.id[1]>0)){
 for (var i=int(this.id[0]); i<int(this.id[1])+1;i++) {
   if (this.vol[1]>0){
     oscilos[i].applyvol(float(this.vol[0]-this.vol[1]*(i-this.id[0])));
     oscilos[i].applymute(false);

   }
   else{ oscilos[i].applyvol(this.vol[0]);
     oscilos[i].applymute(false);
   }
  }
}
else {
  oscilos[int(this.phrase[0])].applyvol(this.vol[0]);
  oscilos[int(this.phrase[0])].applymute(false);
}
}

if (this.phrase[1]!='V' && this.phrase[1]!='F' && this.phrase[1]!='M'&& this.phrase[0]!='S'&& this.phrase[0]!='L'){ ///////////////////////// FREQUENCE ET VOLUME
this.freq=float(split(this.phrase[1],'<'));
this.vol=float(split(this.phrase[2],'<'));

if (int(this.id[1])>0){
for (var i=int(this.id[0]); i<int(this.id[1])+1;i++) {
  if (this.freq[1]>0) oscilos[i].applyfreq(float(this.freq[0]+this.freq[1]*(i-this.id[0])));
  else{ oscilos[i].applyfreq(this.freq[0]);
  }
  if (this.vol[1]>0) {
    oscilos[i].applyvol(float(this.vol[0]-this.vol[1]*(i-this.id[0])));
    oscilos[i].applymute(false);

  }
  else{ oscilos[i].applyvol(this.vol[0]);
    oscilos[i].applymute(false);
  }
 }
}
else {
  oscilos[this.phrase[0]].applyvol(this.vol[0]);
  oscilos[this.phrase[0]].applymute(false);
  oscilos[this.phrase[0]].applyfreq(this.freq[0]);
}

}

if (this.phrase[1]=='M'){ //////////////////////////////////MUTE MODE

if (int(this.id[1]>0)){
  for (var i=int(this.id[0]); i<int(this.id[1])+1;i++) { ///////////////// LE IF NE VA PAS
    if (this.vol[1]>0) oscilos[i].applymute(true);
    else{ oscilos[i].applymute(true);
    }
}
}
else {
  oscilos[this.phrase[0]].applymute(true);
}
}


if (this.phrase[0]=='S'){ ///////////////////////// SAUVEGARDE
  sauvegarde.createsauv(this.phrase[1]);
for (var i =0; i<nboscilo;i++){
oscilos[i].sauv();
}
sauvegarde.gosave();
}

if (this.phrase[0]=='L'){ ///////////////////////// RELOAD
 loadsession.createload(this.phrase[1]);
for (var i =0; i<nboscilo;i++){

}

}


}
}
