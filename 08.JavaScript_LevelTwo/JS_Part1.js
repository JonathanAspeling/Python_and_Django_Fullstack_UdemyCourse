// Function No paramaters
function hello(){
  console.log("Hellow World!");
}

// Function with paramater
function helloYou(you){
  console.log("Hello "+you)
}

//Multiple paramaters
function addNum(a,b){
  console.log(a+b);
}

//Function with paramater that has default value
function helloSomone(name="Frank"){
  console.log("Hello "+name);
}

//Funtion that returns
function formal(name="sam",title="Sir"){
  return title+" "+name
}

function timesFive(numInput){
  var result = numInput*5;
  return result;
}
