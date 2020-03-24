var studentArray = [];
var quitVariable = false;

function removeArrayElement(array,elementToRemove){
// There exists a better method to remove a value from an array.
// This is my own method. O notation is an issue here though.
  var tempArray = [];
  for (x in array) {
    if (x!=+elementToRemove) {
      tempArray.push(array[x]);
    }
  }
  return tempArray;
}

function effectiveRemvArrElement(array,elementToRemove){
//  Function from Stack overflow. Identifies position of desired element.
//  Uses position of element to apply slice array method. Removes only desired
//  Element at position obtained.
  var index = array.indexOf(elementToRemove);
  array.splice(index,1);
}


function studentNameApp(){
  while (quitVariable == false) {
      var functionAsk = prompt("Which Function would you like to execute?(Add,Remove,List,Quit)");
      if (functionAsk==="add" || functionAsk==="Add") {
        var functionAskAdd = prompt("Enter the Student's name that you want to add");
        studentArray.push(functionAskAdd);
        console.log(studentArray);
      }
      else if (functionAsk==="remove"||functionAsk==="Remove") {
        var functionAskRemove = prompt("Enter the Student's name that you want to remove");
        effectiveRemvArrElement(studentArray,functionAskRemove)
        console.log(studentArray);
      }
      else if (functionAsk==="display"||functionAsk==="Display") {
        console.log(studentArray);
      }
      else if (functionAsk==="quit"||functionAsk==="Quit") {
        quitVariable = true;
      }
  }

}
