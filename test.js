console.log("hello")
let pnj = document.getElementById("pnj");
let obstacle = document.getElementById("obstacle");

function jump() {
    if (pnj.classList != "jump") {
        pnj.classList.add("jump");

        setTimeout(function() {
            pnj.classList.remove("jump");
        }, 300);
    }

}

let isAlive = setInterval(function() {
    // position pnj Y position
    let pnjTop = parseInt(window.getComputedStyle(pnj).getPropertyValue("top"));

    // position caisse X position
    let obstacleLeft = parseInt(
        window.getComputedStyle(obstacle).getPropertyValue("left")
    );

    // detection collision
    if (obstacleLeft < 50 && obstacleLeft > 0 && pnjTop >= 140) {
        // collision
        alert("Game Over!");
    }
}, 10);


document.addEventListener("keydown", function(event) {
    jump();
})