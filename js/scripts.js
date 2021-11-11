//User Logic
//----------------
var inPutValue = prompt("Enter your name")
alert('Hi ' + inPutValue + ', Welcome to digital calculator')

var value1Input = prompt('enter a value');
var value1 = parseInt(value1Input);
alert(value1Input + ' was a ' + typeof  value1Input + ' and was converted and saved as a new variable, the new data type of value1 is '+ typeof  value1)


















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

  function multiplyThreeNumbers(c, d, g) {
    return c * d * g
    }
  console.log(multiplyThreeNumbers(7,9,2));


