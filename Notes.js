/*
Expression:
Statement of value, variable, and operations into a single value

Like 6*5=30

Literal:

Fixed value: Literal - "Jhon" or 5
Variable value: Variable - let x, Now x can be assign any number

Variable: (Storing data)

var - can declare and assign later, can redeclare
let - ES6 2015, Let can not be redeclared, #Block Scope(can not access outside of scope)
const - Never changed, const can not be re-assign.

Global Scope - Live the hole house
function Scope -Like a room
#Block Scope - {} curly brackets
(not like function scope with declarations function a {})

 */

let x = "Neamoth"
//let x = 5 syntax error

// Block Scope

{
   let x = 2;
   console.log(x + " inside the block")
   // It will not be re-declared on global space
}

console.log(x) 
//ReferenceError - which is scope reference can not be defined
x = 3;
console.log(x + " After reassign")

/* 
Const: When we use it?
   1. New Array
   2. New Function
   3. New Object
   4. New RegExpression

What we can't do? Reassign
What we can do? 
   Element of array
   Properties of object
   
Block Scope is same for const also

*/

const c = 4
{
   const c = 5 // reassign in scope but  it can be re-declared in global scope
   console.log(c + " Const in Local Scope")
}
// const c = 5 SyntaxError: Identifier 'c' has already been declared
console.log(c + " Const in global Scope")


// Array and object

{
   const array = ["Neamoth", "Sakib vai", "Imtiaz vai"]
   console.log(array + " Before change")
   array.push("Nahid") 
   console.log(array + " After change")
}


/*
Operators:

Types:

Increment and decrement operators.
Bitwise operators.
Assignment operators.
Logical operators.
Relational operators.
Special operators.
Conditional operators.
Arithmetic Operators.

*/

//Concatenate operators

{
   let x = "Neamoth get the marks: "
   let y = 5
   let z = "0" //here this 0 is a string

   console.log(x +z+y)
   console.log(typeof(z))//string
}

//Assignments Operators

{
   let x = 5, y = 10
   var z=15
   // assignment practice
   console.log("The value of z: " + z)
   console.log("1. " + (z=(x-y)))
   console.log("Now the value of z: " + z)
   console.log("2. " + (x))
   console.log("3. " + (x+y))
   console.log("4. " + (x))
}

/*
DataType:

String
Number
Bigint
Boolean
Undefined
Null
Symbol
Object

*/
{
   let x = 5 + 6 + " volvo"// Here the int will be get priority
   let y ="volvo"+ 5 + 6// here the string will be get priority
   console.log(x)
   console.log(y)
}

{
   // javascript is dynamically typed because a single variable can hold multiple date types
   let x = "Neamoth is string" // this is now string
   console.log(x + " is now a: " + typeof(x))
   x = 4 // this is now a number
   console.log(x + " is now a: " + typeof(x))
   x = true // this is now boolean
   console.log(x + " is now a: " + typeof(x))
}

{
   //Exponential Notation
   let y = 123e5;    // 12300000
   let z = 123e-5;   // 0.00123
}

{  
   //bigInt use for store big integer number is ES 2020
   let x = BigInt(123456789123456789123456789)
   console.log(x)
}

//Object
{
   // an object with 4 properties
   const person = {
      firstName: "Neamoth",
      lastName: "Ullah",
      age: 50,
      educationBackground: "CSE",
      jobHistory: null,
      searchingForJob : true
   }
   // Object structure will be synchronized a to z

   console.log(person) // print the full object
   console.log(person.educationBackground) // print only the Education Background Property
   console.log(person.firstName + " " + person.lastName) // print <fullName></fullName>
   console.log("Person is an: "+ typeof(person))
}

{
   /*
      Function
   */
   function displayInput(){
      console.log("Option 1: Add ")
      console.log("Option 2: Sub ")
      console.log("Option 3: Mult ")
      console.log("Option 4: Div ")
   }
      displayInput()
      let option = prompt("Enter a number to continue: ")
      
      function calculator(option, a, b){
         let result
         if(option == 1){
            result = a+b
         }
         if(option == 2){
            result = a-b
         }
         if(option == 3){
            result = a*b
         }
         if(option == 4){
            result = a/b
         }
         console.log(result)
      }
      let a = parseInt(prompt("Enter a number: "))
      let b = parseInt(prompt("Enter b number: "))
      //calculator(option, a, b);
}