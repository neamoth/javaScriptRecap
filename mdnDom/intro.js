/*
     DOM Basics:
     Concepts:
        What is the DOM? - The Document Object Model (DOM) is a programming interface for web documents
*/

const intro = document.getElementById('intro')
intro.innerHTML = "Hello JS" // we get the Document key and set the inner html

/*
        Locating DOM elements using selectors
        In previous we have already use a selector what is element ID selector
        there is more
*/

// The NodeSelector interface

// querySelector() - target like css class or id

const cs = document.querySelector('.classSelector')
const is = document.querySelector('#idSelector')

cs.innerHTML = "Hello Class"
is.innerHTML = "Hello ID"

//we can also css them

cs.style.color = "red"
is.style.color = "green"

cs.style.fontSize = "2em" // we have to use camelCase

// querySelectorAll()

// we can select multile with the all selector
const all = document.querySelectorAll(".all") // it will return a nodeList
//now loop this
all.forEach(selector => {
        selector.style.color = "red"
        selector.style.fontSize = "3em"
});


// Node traversal:

//  parentNode - parent of the current node

const parent= document.getElementById('parent');
document.getElementById('firstChild').innerHTML = `1st child of ${parent.firstChild.nodeValue}`;

//lastChild nextSibling - lastChild target the last element and next sibling target next one


{
        //Create Remove and replay in dom

        const callMe = document.createElement('div'); //Creating div
        callMe.className = 'callMeContainer' // naming class
        callMe.textContent = "Call Now..!" // giving a value

        document.body.appendChild(callMe); // appending to body

        // remove
        // callMe.remove();
}


//Events listeners
//create button click me
const button = document.createElement('button');
button.className = 'btnEvents'
button.textContent = "click me";
document.body.appendChild(button);
//create button remove
const buttonC = document.createElement('button');
buttonC.className = 'btnCEvents'
buttonC.textContent = "Remove";
document.body.appendChild(buttonC);
//creating para
const listenPera = document.createElement('p');
listenPera.className = 'listenPera';
//click to show
button.addEventListener('click', function(){
        listenPera.textContent = "Button clicked";
        document.body.appendChild(listenPera);
})
// click to remove
buttonC.addEventListener('click', function(){
        document.body.removeChild(listenPera);
})

//Prevent default and stop propagation

const google = document.getElementById('google');

google.addEventListener('mouseover', function(event){
        event.stopPropagation(); // stop the event from bubbling up to the parent
        event.preventDefault(); // stop the link from opening
        google.textContent = "Sorry you can i said";
})
google.addEventListener('mouseout', function(event){
        google.textContent = "You cant go to google";
})
const anotherClick = document.getElementById('anotherClick')
const dblClick = document.getElementById('dblClick');
const dblContent = document.createElement('p')
// anotherClick.appendChild(dblContent);
dblClick.addEventListener('click', function(){
        dblContent.textContent = "This secret is not free, Pay me 1000K first";
        dblClick.textContent = "Close";
});
dblClick.addEventListener('dblClick', function(){
        dblContent.textContent = "Thank you for Clicking me";
        dblClick.textContent = "Reveal"
});
