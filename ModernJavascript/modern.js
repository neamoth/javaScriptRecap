{
    // Fat arrow function:

    // Old way:
    function add (a,b){
        return a+b;
    }

    console.log(add(2,3));
    //es6

    // For single line

    let number = (n) => n; // for return we dont need to write it
    let number2 = (n) => console.log(n);
    
    console.log(number(2));
    number2(4);
    

    // Use of this in arrow functions

    let search = document.querySelector('.search');
    let display = document.querySelector('.display');
    let greeting = document.querySelector('.greeting');

    function print(){
        display.innerHTML = this.value;
        setTimeout(() => greeting.innerHTML = `Thank you ${this.value}`, 1000);
    }

    search.addEventListener('keyup', print);    // But this will not work on here

    // Arrow functions dont change or care about this so that's why if  I want to use this we can do it with arrow functions
    
}

{

    //Truty and falsy value in ES6+

    /*
    Note: So we need to know what is truthy and falsy values are
    Truthy values: true, 1, "hello", {}, [], new Date(), function(){}
    Falsy values: false, 0, "", null, undefined, NaN
    */

    let check = "";

    if(check){
        console.log("Truthy value");
    }
    else{
        console.log("Falsy value");
    }
}

{
    //Ternary operators:

    //Traditional way: Must use for nested
    let age = 1;

    if (age >= 18){
        console.log("You are adult");
    }else{
        console.log("You are not adult");
    }

    // ES6 way: Best for single line or 2 line of nested structure
    
    let ageStatus = (age >= 18) ? "Adult" : (age <= 12) ?"Child" :
     "Not adult";
    ;
    console.log(ageStatus);

    let isLoggedin = true;
    let logout = !isLoggedin;
    console.log(logout);
}

{
    // Array.prototype.find()

    let numbers = [1,2,3,4,5,6,7,8,9,10];

    let findNumber = numbers.find((value) => value > 5);
    console.log(findNumber);
    

    // Array find index

    let findIndex = numbers.findIndex((value) => value > 5);
    console.log(findIndex); // index value is 5 found

    let filter = numbers.filter((value) => value < findIndex);
    console.log(filter);
    
    let slice = numbers.slice(-5); // count left to right
    console.log(slice);

    let splice = numbers.splice(1 ,2 , 11 ) // Remove 2, 3 and add 11 to main array
    console.log(numbers);
    console.log(splice);

    let number1 = [12,13,14]
    let concat = numbers.concat(number1); // this will not change the main array
    console.log(concat); 
    
    let push = numbers.push(12); // change main array add into last index
    console.log(numbers);
    console.log(push); // return where it push mean after 10


    //Map : loop trough array and return new array

    let map = numbers.map((num) => num+1);
    console.log(map);

    //Reduce:

    let reduceSumArray = numbers.reduce((preval, currentVal) => {
        return preval + currentVal;
    }, 0);

    console.log(reduceSumArray);

}

{
    //Loops

    const details = {
        firstName: 'Neamoth',
        lastName: 'Ullah',
        email: 'neamoth17@gmail.com',
    }
    
    //For each
    

    for(let key in details) {
        console.log(`Key: ${key} and Value: ${details[key]}`);
    }

    // for of

    let arr = [1,2,3]
    for(let keys of arr){
        console.log(keys);
    }
}

{
    //functions default perameters

    function myFunc(x =5){
        return x;
    }

    console.log(myFunc()); // log 5
    console.log(myFunc(10)); //log 10 and overwrite the default value
    console.log(myFunc(undefined)); // log 5, That will not overwrite the default value
    console.log(myFunc(null)); // log null, null is a value so it will overwrite the default value
}
{
    //Spread operator

    let number1 = [1,2,3,4];
    let number2 = [...number1, 5,6,7,8]; // that will concate number1 to number2
    console.log(number2); // number1+number2
    console.log(number1); // That will be not change

    let number3 = [9,10];

    let makeConcate = [...number1, ...number2, ...number3];

    console.log(makeConcate);   
}

{
    //Rest operators

    function sum(a, ...rest){
        let carryRest = rest.reduce((preval, currentval) => preval + currentval);
        return a + carryRest;
    }

    console.log(sum(1,2,3,4,5));
}

{
    //Destructuring - use it to unpack values from arrays or properties from objects into distinct variables

    //For object

    const person = {
        firstName: 'Neamoth',
        lastName: 'Ullah',
        age: 27,
        educations: {
            degree: 'Bachelor',
            major: 'Computer Science',
            graduationYear: 2024
        }
    }

    const {firstName, educations: {degree}, age} = person;

    console.log(`${firstName} is ${age} years old has ${degree} degree`);
    
    // For array
    const numbers = [1,2,[3],4,5];
    const [,a, [b]] = numbers;
    console.log(a,b); //log 2,3
}