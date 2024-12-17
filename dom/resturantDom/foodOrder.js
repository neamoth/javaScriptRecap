const menuList = {
    pizza: 750,
    burger: 150,
    meatbox: 120,
    orangeJuice: 70,
    lamonJuice: 20,
    water: 20,
    regularTea: 20,
    redTea: 10
}

let menuHtml = Object.keys(menuList).some((value) => document.getElementById('ul').innerHTML =`<li>${value}</li>` )
function menu(){
    document.getElementsByClassName('btnMenu').innerHTML = ``
}