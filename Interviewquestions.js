//Adding a item from the front and back of an array
var myArray =['a', 'b','c','d'];

myArray.push("end");
myArray.unshift("start")

console.log(myArray);

//How do you create a private variable in JavaScript
function secretVarible() {
  var private="code";

  return function(){
    return private;

  }

}
var getPrivateVariable = secretVarible()
console.log(getPrivateVariable());

//what is the outcome?
var num = 4;
function outer(){
  var num = 2
  function inner(){
    num++;
    var num = 3;
    console.log(num);
    //the outcome of this solution is 3 because the function keeps on being
    //overwritten  with each new number assigned

  }
  inner();
}
outer();

// what is the outcome
console.log(typeof typeof 1);
// order of operations
//(typeof(typeof 1));
//goes for typeof 1 first and that gives you NUMBER
// then prints typeof which gives you a STRING
//ANSWER: string 
