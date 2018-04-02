function clavier(lettre,phrase){
var letter =lettre;
var sentence=phrase+letter;
return sentence;

}

function aff(phrase){
  rect(300,10,400,20);
  text(phrase,305,25);
  console.log(phrase);

}


function keyPressed(){

clavier(key,sentence);
}
