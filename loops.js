function forLoop(array) {
  for (let i=0; i<25; i++) {
    if(i === 1) {
      array.push(`I am 1 strange loop.`)
      } else {
        array.push(`I am ${i} strange loops.`)
      }
}
      return array;
}

function whileLoop(n){

while (n>0){
  console.log(--n);
}
return "done";
}

function incrementVariable() {
  i = i + 1;

}

function doWhileLoop(num) {
do {
  if(num === 0) {
  console.log("I run once regardless.");
} else if (num === 10){
  console.log("I run once regardless.")
} while (incrementVariable() < num);
}
}
