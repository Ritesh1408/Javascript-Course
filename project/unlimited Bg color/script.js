//generate random color

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i = 0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)];

    }
    return color;
};

console.log(randomColor());
let clrInterval;
const startChangingColor = function(){
    if(!clrInterval){
        clrInterval = setInterval(bgColor, 500);
    }
    function bgColor(){
        document.body.style.backgroundColor = randomColor();
    }
}

const stopChangingColor = function(){
    clearInterval(clrInterval)
    clrInterval = null;
    
}

document.querySelector('#start').addEventListener('click', startChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)


// console.log(Math.floor(Math.random() * 16));



