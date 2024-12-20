console.log("-----DOM Practices-----");

// So we can create a new dom without help of body but it will works properties with js
// declearations only
// const dom = document.createElement("div");
// dom.id = "dom";

// dom.textContent = "Hello heading";
// dom.style.backgroundColor = "rgba(255,255,255)"

// document.body.appendChild(dom);


// child

// const [a,b,c] = ["Neamoth", "Nahid", "Saima"]

// document.getElementById('li').firstChild.nodeValue = a
// document.getElementById('li').nextSibling.nodeValue =  b


// addEventListener
const listener = document.getElementById('listener')
const hiddenContent = document.createElement('h1');
const buttonPress = document.addEventListener('click', function(){
    hiddenContent.textContent = "Hello Hi Bye Bye";
    listener.appendChild(hiddenContent);
});
const buttonChickAgain = document.addEventListener('hover',function(){
    hiddenContent.textContent = "";
    listener.removeChild(hiddenContent);
    console.log("button click again");
    
});