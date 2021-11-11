//User Logic
//----------------
var inPutValue = prompt("Enter your name")
alert('Hi ' + inPutValue + ', Welcome to digital calculator')

var value1Input = prompt('enter a value');
var value1 = parseInt(value1Input);
alert(value1Input + ' was a ' + typeof  value1Input + ' and was converted and saved as a new variable, the new data type of value1 is '+ typeof  value1)

var value2Input = prompt('enter a value');
var value2 = parseInt(value2Input);

alert(value2Input + ' was a ' + typeof  value2Input + ' and was converted and saved as a new variable, the new data type of value2 is '+ typeof  value2)

//addition, subtraction, divisin and multiplication
var operationsValue = prompt("which operation do you want to perform?(addition || +, subtraction, division, multiplication)");
if (operationsValue === 'add') {
    alert(inPutValue  + ' the sum of '+ value1 + ' and ' +value2 + ' is '+ addTwoNumbers(value1,value2));
}
else if(operationsValue === 'divide') {
    alert(inPutValue  + ' the division of '+ value1 + ' and ' +value2 + ' is '+ divideTwoNumbers(value1,value2));
}
else if(operationsValue === 'subtract') {
    alert(inPutValue  + ' the difference of '+ value1 + ' and ' +value2 + ' is '+ subtractTwoNumbers(value1,value2));
}
else{
    alert(inPutValue  + ' the multiplication of '+ value1 + ' and ' +value2 + ' is '+ multiplyTwoNumbers(value1,value2));}
    










//Business logic
//------------------

function addTwoNumbers(c, d) {
    return c + d
    }
  console.log(addTwoNumbers(7,9));
  
  function divideTwoNumbers(a, b) {
    return a / b
    }
  console.log(divideTwoNumbers(24,4));

  function subtractTwoNumbers(e, f) {
    return e - f
    }
  console.log(subtractTwoNumbers(45,20));

  function multiplyTwoNumbers(c, d) {
    return c * d
    }
  console.log(multiplyTwoNumbers(7,9));


