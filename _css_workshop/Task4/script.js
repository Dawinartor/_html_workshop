var imgObj = null;
var subscribeButton = null;

            
function init() {
    // load image movement 
    imgObj = document.getElementById('myImage');
    imgObj.style.position= 'relative'; 
    imgObj.style.left = '0px'; 

    // load button switch colour
    subscribeButton = document.getElementById('subscribe-button');
}

function moveRight() {
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
}

function changeColor() {
    if(subscribeButton.style.backgroundColor == "blue") {
        subscribeButton.style.backgroundColor = "red";
    } else if (subscribeButton.style.backgroundColor = "red") {
        subscribeButton.style.backgroundColor = "blue";
    }
    console.log(subscribeButton.style.backgroundColor);
}

window.onload = init;