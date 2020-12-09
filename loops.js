let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

function forLoop(array){
  for (let i=0; i<array.length; i++) {
    if(i=1) {console.log("I am 1 strange loop.")
      }
      else {console.log("I am ${i} strange loops.")}
      return forLoop(array);
}

function whileLoop(n){
while (n>0){
  console.log(--n);
}
}

let i = 0;

function incrementVariable() {
  i = i + 1;
  return i;

function doWhileLoop(num) {
do {
  console.log("I run once regardless.");
} while (incrementVariable() < num);
}
