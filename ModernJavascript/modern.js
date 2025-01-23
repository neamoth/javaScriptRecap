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