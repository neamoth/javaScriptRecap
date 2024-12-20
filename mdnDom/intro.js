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



