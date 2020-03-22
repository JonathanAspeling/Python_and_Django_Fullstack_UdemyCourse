var x = 0;

while (x<5) {

  console.log("x is currently "+x);

  if (x===3) {
    console.log("X is equal to 3");
    break;
  }

  console.log("X is still less than 5, adding 1 to x");
  x=x+1;

}

var even_num = 0;

while (even_num<10) {
  even_num = even_num+2;
  console.log(even_num);
}
