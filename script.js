var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var h3 = document.querySelector('h3');



function setGradient() {
    body.style.background = "linear-gradient(90deg, " + color1.value + "," + color2.value + ")";
    css.textContent = body.style.background + ';';
}

function copyOnClick() {
    h3.addEventListener('click')
}


color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);