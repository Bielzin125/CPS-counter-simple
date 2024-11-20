const cps = document.querySelector(".cps");
const contador = document.querySelector('.contador');
let count = 0
cps.addEventListener('mousedown', function(){
     count += 1;
     contador.innerHTML = count;
});

document.addEventListener('keydown', function(e){
    if(e.key == 'Backspace'){
        count = 0;
        contador.innerHTML = count;
        
    }
    
    
});