let i = 0;

function incrementVariable(){
  i = i +1;
  return i;
}

do {
  console.log("I run once regardless.")
} while (incrementVariable()<2);
