const cps = document.querySelector(".cps");
const contador = document.querySelector('.contador');
const reset= document.querySelector('.reset');
let count = 0
cps.addEventListener('mousedown', function(){
     count += 1;
     contador.innerHTML = count;
});

reset.addEventListener('mousedown', function(){
    
    count = 0;
    contador.innerHTML = count;
    
});