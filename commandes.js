var commandes = {
//<<<<<<< HEAD
  phrase: "",
  id: "",
  freq: 0,
  vol: 0,
///////////////////////
  toggles:"",
  mute: false,
/*
  check: function(cmd) {
    this.phrase = split(cmd, ' ');
    console.log(this.phrase);
    this.id = split(this.phrase[0], '<');

    if (this.phrase[1] == 'F') {
      console.log("freqmode");
      this.freq = split(this.phrase[2], '<');
      if (int(this.id[1] > 0)) {
        for (var i = int(this.id[0]); i < int(this.id[1]) + 1; i++) {
          oscilos[i].applyfreq(int(this.freq[0]) + int(this.freq[1] * (i - this.id[0])));
        }
      } else {
        oscilos[int(this.phrase[0])].applyfreq(int(this.phrase[2]));
      }
    }

    if (this.phrase[1] == 'V') {
      console.log("volmode");
      this.vol = split(this.phrase[2], '<');
      if (int(this.id[1] > 0)) {
        for (var i = int(this.id[0]); i < int(this.id[1]) + 1; i++) {
          oscilos[i].applyvol(int(this.vol[0]) + int(this.vol[1] * (i - this.id[0])));

        }
      } else {
        oscilos[int(this.phrase[0])].applyvol(this.phrase[2]);
      }
    }
  }
//=======
/*phrase:"",
id: "",
freq: 0,
vol: 0,
toggles:"",
mute: false,*/

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
//>>>>>>> 07b7c53af1fadf6b7ae0ea4f0da4eeb7dcc6125d

    if (this.phrase[1] != 'V' && this.phrase[1] != 'F') {
      console.log("else");
      this.freq = split(this.phrase[1], '<');
      this.vol = split(this.phrase[2], '<');
      if (int(this.id[1] > 0)) {
        for (var i = int(this.id[0]); i < int(this.id[1]) + 1; i++) {
          oscilos[i].applyfreq(int(this.freq[0]) + int(this.freq[1] * (i - this.id[0])));
          oscilos[i].applyvol(int(this.vol[0]) + int(this.vol[1] * (i - this.id[0])));
        }
      } else {
        oscilos[this.phrase[0]].applyvol(this.vol[0]);
        oscilos[this.phrase[0]].applyfreq(this.freq[0]);
      }

//<<<<<<< HEAD
    }
//=======
if (this.phrase[1]=='V'){ //////////////////////// JUSTE VOLUME
        this.vol=float(split(this.phrase[2],'<'));
 if (int(this.id[1]>0)){
 for (var i=int(this.id[0]); i<int(this.id[1])+1;i++) {
   if (this.vol[1]>0){
     oscilos[i].applyvol(float(this.vol[0]-this.vol[1]*(i-this.id[0])));
     oscilos[i].applymute(false);
//>>>>>>> 07b7c53af1fadf6b7ae0ea4f0da4eeb7dcc6125d

   }
   else{ oscilos[i].applyvol(this.vol[0]);
     oscilos[i].applymute(false);
   }
  }
}
//<<<<<<< HEAD
//=======
else {
  oscilos[int(this.phrase[0])].applyvol(this.vol[0]);
  oscilos[int(this.phrase[0])].applymute(false);
}
}

if (this.phrase[1]!='V' && this.phrase[1]!='F' && this.phrase[1]!='M'&& this.phrase[0]!='S'&& this.phrase[0]!='L'&& this.phrase[0]!='T' && this.phrase[1]!='I'){ ///////////////////////// FREQUENCE ET VOLUME
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
  timeline.sauv();
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

if (this.phrase[0]=='T'){ ///////////////////////// RELOAD
 if (float(this.phrase[1])>0)timeline.initialtimer(this.phrase[1]);
 if (this.phrase[1]=="GO")activtimer=true;
 if (this.phrase[1]=="STOP"){
   activtimer=false;
   timeline.reinitimer();
   for (var i=0; i<nboscilo;i++){

   oscilos[i].resetvol();
 }
}
}

 if (this.phrase[1]=="I"){ ////////////////////////////////////////////// ICICICICIICICICICI

   if (this.id[1]>0){
     for (var i=int(this.id[0]); i<int(this.id[1])+1;i++) {
       if (this.phrase[2]=="E")oscilos[i].resetpok();
      if (this.phrase[2]!="E")   oscilos[i].setpok(this.phrase[2]);}
   }

 else{
   if (this.phrase[2]!="E")oscilos[this.phrase[0]].setpok(this.phrase[2]);
   if (this.phrase[2]=="E")oscilos[this.phrase[0]].resetpok();
 }


   }


}
}
//>>>>>>> 07b7c53af1fadf6b7ae0ea4f0da4eeb7dcc6125d
