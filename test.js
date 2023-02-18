console.log("hello")
let pnj = document.getElementById("pnj");
let caisse = document.getElementById("caisse");
let score = document.querySelector("#score");
let gameOver = document.querySelector("#gameOver");

//variable pour le score
let interval = null;
let playerScore = 0;

//function pour le score
let scoreCounter = () => {
    playerScore++;
    score.innerHTML = `score <b>${playerScore}</b>`;
}
interval = setInterval(scoreCounter, 200);



//function pour sauter
function jump() {
    if (pnj.classList != "jump") {
        pnj.classList.add("jump");

        setTimeout(function() {
            pnj.classList.remove("jump");
        }, 1000);
    }

}
//function pour glisser 
function slide() {
    if (pnj.classList != "slide") {
        pnj.classList.add("slide");

        setTimeout(function() {
            pnj.classList.remove("slide");
        }, 500);
    }

}

let isAlive = setInterval(function() {
    // position pnj Y position
    let pnjTop = parseInt(window.getComputedStyle(pnj).getPropertyValue("top"));

    // position caisse X position
    let caisseLeft = parseInt(
        window.getComputedStyle(caisse).getPropertyValue("left")
    );

    // detection collision
    if (caisseLeft < 50 && caisseLeft > 0 && pnjTop >= 140) {
        // collision
        alert("Game Over!");
    }
}, 10);

//Touche pour les 2 functions jump et slide
document.addEventListener("keydown", function(event) {
    if (event.key === "m") {
        jump();
    } else if (event.key === "l") {
        slide();
    }
})