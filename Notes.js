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
      //let option = prompt("Enter a number to continue: ")
      
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
      //let a = parseInt(prompt("Enter a number: "))
      //let b = parseInt(prompt("Enter b number: "))
      //calculator(option, a, b);
}

{
   /*
      Object in JavaScript
      const bike = new Object();
    
      bike.name = prompt("Enter the bike name: ");
      bike.brand = prompt("Enter the brand: ");
      bike.start = function (){
         let speed = parseInt(prompt("Enter the speed and put 1 to start: "));
         if(speed == 1){
            console.log("Bike started");
            speed = parseInt(prompt("Enter current speed: "));
            if (speed > 1 & speed == 40){
               console.log("Bike is stopped at " + speed)
            }
         
         }
         return this.name + " speed is: " + speed;
    
      }
    
      let option = parseInt(prompt("Enter 1 for name, 2 for brand, 3 for engine: "));
      if(option == 1){
         console.log(bike.name);
      }
      else if (option == 2){
         console.log(bike.brand);
      }
      else if (option == 3){
         console.log(bike.start());
      }else{
         console.log("PLease enter a valid number");
      }
   */

}
{
   // event practices 
   const person = {
      firstName :"Khadiza",
      lastName: "Noor",
      age: "2 Month and 13 Days",
      fathersName: "MD. Neamoth Ullah"
   }
   function fullName(){
      document.getElementById('name').innerHTML = person.firstName + " " + person.lastName
   }
   function age(){
      document.getElementById('age').innerHTML = person.lastName + "'s Age is: "+ person.age;
   }
   function fathersName(){
      document.getElementById('fathersName').innerHTML = person.fathersName + " is the father of, " + person.lastName
   }
   function clearAll(){
      document.getElementById('name').innerHTML = ''
      document.getElementById('age').innerHTML = ''
      document.getElementById('fathersName').innerHTML = ''
   }
}
{
   // String practice

   let name = " Neamoth is a Good father          ";
   document.getElementById('display').innerHTML = name
   document.getElementById('display2').innerHTML ="Repeat: "+ name.repeat(2)
   document.getElementById('display3').innerHTML ="Replace: "+ name.replace("Neamoth is good boy")
}
{
   //Search With Practices: 
   let inputText = "Neamoth is a good father. His baby name is Khadiza Noor. Wife is Mitu"
   function displayText(){
      document.getElementById('displayText').innerHTML = inputText
   }
   function search(){
      let text = document.getElementById("searchValue").value;
      document.getElementById('displayString1').innerHTML = inputText.search(text);
   }
   function match(){
      let text = document.getElementById("searchValue").value;
      document.getElementById('displayString2').innerHTML =inputText.match(text);
   }
   function searchAll(){
      let text = document.getElementById("searchValue").value;
      document.getElementById('displayString3').innerHTML = inputText.matchAll(text);
   }
}
{
  // search in console.log
   let inputText = "Neamoth is a good father. His baby name is Khadiza Noor. Wife is Mitu"
   console.log(inputText)
   console.log("search: is in " + inputText.search("Neamoth") + " index")
   console.log("match: " + inputText.match(/is/) + " has been found")
   console.log("matchAll: " + Array.from(inputText.matchAll(/is/gi)) + " has been found")
   console.log("startWith: Neamoth is " + inputText.startsWith("Neamoth") + " ")
   console.log("endsWith: Neamoth is " + inputText.endsWith("Neamoth") + " ")
}
{
   //String Template:
   function show(){
      let fn = document.getElementById("fn").value;
      let ln = document.getElementById("ln").value;
      let result = `Full name: ${fn} ${ln}`;
      document.getElementById('nameDisplay').innerHTML = result;
   }
   show()
}

{
   /**
    Normal integer number without expotential notation can be 
    writen upto 15 digit correctly

    Like: 12345678901234
    */
   let faultInteger = 99999999999999999 // longer then 15
   document.getElementById('faultNumber').innerHTML = faultInteger;
}

{
   //numbers:

   let number = 9.112; // This is a integer number now
   console.log(`${number}'s String is ${number.toString()}`); // This is a string number
}

{
   //array in javascript

   const personObject = {
      firstname: 'Neamoth',
      lastName: 'Ullah',
      age: 27
   }
   const personArray = ['Neamoth', 'Nahid', 'Saima', 'Samira']
   console.log(`Javascript denotes all array as Object
      For Example: 
      personObject = ${typeof(personObject)},
      personArray = ${typeof(personObject)},
      - To solve this problem Array can be recognized with "isArray"
      PersonObject = ${Array.isArray(personObject)} because it's Object,
      PersonArray = ${Array.isArray(personArray)}, because it's Array
      - Another way is to use "instanceof"
      PersonArray = ${personArray instanceof Array}, because it's Array
      `)

   // To add something in array is,
   personArray.push('Noor');
   personArray[personArray.length] = 'Noor er ammu';
   console.log();
   console.log(`After pushing through .push function and length
      array is, ${personArray} &
      length is, ${personArray.length}
      
      Accessing the 1st index of the array: ${personArray[0]}
      Accessing the Last index of the array: ${personArray[personArray.length - 1]}

      Note: Array with name index is call object

      `);
      // array using new create problem so its better use []
      const problemArray = new Array(40);
      const safeArray = [40];
      console.log(`
         safe array is ${safeArray} and
         problem array is ${problemArray}
         `)
}

{
   /*Array Methods:
   Basic Array Methods
      1.1 Array length
      1.2 Array toString()
      1.3 Array at()
      1.4 Array join()
      1.5 Array pop()
      1.6 Array push()
      1.7 Array unshift()
      1.8 Array delete()
      1.9 Array concat()
      1.10 Array copyWithin()
      1.11 Array flat()
      1.12 Array splice()
      1.13 Array toSpliced()
      1.14 Array slice()
   */
  //Declearation
  const fruits = ["banana", "Grape", "Pineapple", "Cherry", "Avocado", "Guava", "Coconut", "Muskmelon"];
  const concat = ["Watermelon", "pear", "Kiwi"]
document.getElementById('arrayMethods').innerHTML = `The Array = ${fruits}</br>
1.1 Array Length</br>
- Length = ${fruits.length}</br></br>
1.2 Array toString()</br>
- Before Array Type isArray? = ${Array.isArray(fruits)}</br>
- After Array type = ${Array.isArray(fruits.toString())}, type is = ${typeof(fruits.toString())}</br></br>
1.3 Array at()</br>
- The 3rd element of the array = ${fruits.at(2)}</br></br>
1.4 Array join() - is use for joining all the elements in the array together</br>
- Join array with # = ${fruits.join('#')}, type =  ${typeof(fruits.join('#'))}</br></br>
1.5 Array pop() - It's use for remove the last element of the array <br>
- Array before using pop function = ${fruits}</br>
- Array after using pop function remove = ${fruits.pop()}, Now array = ${fruits}</br><br>
1.6 Array push() - Its use for add any element on last index</br>
- adding apple in array at ${fruits.push('Apple')} index, array now  - ${fruits}</br><br>
1.7 Array unshift() - Use for add element in 1st index of array</br>
- Adding Mango in ${fruits.unshift('Mango')} , Array = ${fruits} </br></br>
1.8 Array delete()- is now wise to use because it make an hole to the index and insert undefine</br>
-Use pop or shift instead</br></br>
1.9 Array concat() - use for join two array</br>
- concat result = ${fruits.concat(concat)}</br></br>
1.10 Array copyWithin() - </br>
- Result = ${fruits.copyWithin(length-1,5)} [Note- here (lenght-1) will be the index position where
the copy item will <b></b>e place and 5 is the item index which will be copied] </br></br>
1.11 Array flat()</br>
</br></br>

</br></br></br></br></br>
</br>
`
}

