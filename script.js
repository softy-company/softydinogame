const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const button = document.querySelector('.btn');



document.addEventListener("click", function() {
    jump();
});


function jump() {
    if (dino.classList !="jump"){
       dino.classList.add("jump")
    }
    setTimeout(function() {
        dino.classList.remove("jump")
    }, 300)         
 }

    let is = setInterval(function() {
        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
        let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

        if(cactusLeft < 50 && cactusLeft>0  && dinoTop >= 140){
            alert(' softy крут, а ты лох!',
            )
        }
    }, 10)
