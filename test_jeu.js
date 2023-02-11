const pnj = document.getElementById("pnj");

function jump() {
    if (pnj.classList != "jump") {
        pnj.classList.add("jump");

        setTimeout(function() {
            pnj.classList.remove("jump");
        }, 300)
    }

}

let inAlive = setInterval(function(){
    let pnjTop = window
})
document.addEventListener("keydown", function(event) {
    jump();
});