console.log("hello")
let pnj = document.getElementById("pnj");
let caisse = document.getElementById("caisse");


function jump() {
    if (pnj.classList != "jump") {
        pnj.classList.add("jump");

        setTimeout(function() {
            pnj.classList.remove("jump");
        }, 500);
    }

}

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


document.addEventListener("keydown", function(event) {
    if (event.key === "m") {
        jump();
    } else if (event.key === "l") {
        slide();
    }
})