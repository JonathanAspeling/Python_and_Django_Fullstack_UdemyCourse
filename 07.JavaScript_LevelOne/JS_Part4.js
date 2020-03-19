var hot = false;
var temp = 1;

if (temp>80) {
  console.log("It's Hot Outside");
}
else if (temp<=80 && temp >= 50) {
  console.log("Temprature is average");
}
else if (temp < 50 && temp >=32) {
  console.log("It is pretty cold outside");
}
else {
  console.log("It's Freezing")
}

var ham = 10;
var cheese = 10;
var report = "blank";

if (ham>= 10 && cheese >=10) {
  report = "Strong sales of ham and cheese";
}
else if (ham ===0 && cheese ===0) {
  report = "Nothing Sold";
}
else {
  report = "Some items were sold"
}
console.log(report)
