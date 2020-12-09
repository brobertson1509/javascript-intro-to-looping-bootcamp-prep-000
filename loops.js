let array = [];

function forLoop(array){
  for (let i=0; i<25, i++) {
if(i=1) {console.log("I am 1 strange loop.")
  }
  else {console.log("I am ${i} strange loops.")}
}

let i = 0;
 
function incrementVariable() {
  i = i + 1;
  return i;
}
 
do {
  console.log("I run once regardless.");
} while (incrementVariable() < 5);