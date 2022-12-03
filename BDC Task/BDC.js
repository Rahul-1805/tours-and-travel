
window.onload = function(){
    var pos = 0;

    var box = document.getElementById('box');
    var t = setInterval(move, 10);
    
    function move(){
        if(pos >= 400){
            clearInterval(t);
        }
        else{
            pos += 1;
            box.style.left = pos+'px';
        }
    }
}



let target = document.body;

function changeBgColor() {
    target.style.background = getRandomColor();
    setTimeout(changeBgColor,1000);
}

function getRandomColor(){
    const LIMIT_VALUE = 256;
    let red = getRandomNumber(LIMIT_VALUE);
    let green = getRandomNumber(LIMIT_VALUE);
    let blue = getRandomNumber(LIMIT_VALUE);
    return 'rgb('+red+','+green+','+blue+')';
}

function getRandomNumber(limitValue){
    let randomNumber = Math.random();
    randomNumber = randomNumber*limitValue;
    randomNumber = Math.floor(randomNumber);
    return randomNumber;
}

changeBgColor();