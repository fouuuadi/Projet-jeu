let pnj = document.getElementById("pnj");
let caisse = document.getElementById("caisse");
let scoreElement = document.querySelector("#score");
let gameOver = document.querySelector("#gameOver");
let menu_start_resume = document.getElementsByClassName("menu_option_mid");
let block = document.getElementsByClassName("bottomBackground");
let pause_menu = document.getElementsByClassName("pause_menu");
var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);

//variable pour le score
let interval = null;
let playerScore = 0;
let isGameResume = false;
let isGameStart = false;
let isPnjCrouch = false;
let score = 0;

//function pour le score
let scoreCounter = () => {
    playerScore++;
    score.innerHTML = `score <b>${playerScore}</b>`;

}
interval = setInterval(scoreCounter, 200);

document.addEventListener("keydown", function(event) {
    if (event.key === "g") {
        isGameResume = false
        menu_start_resume[0].innerHTML = 'G = Commencer'
        startGame()
    }
})

pause_game = () => {
    menu_start_resume[0].innerHTML = 'P = Reprendre'
    displayBackgroundOrMenu('paused', 'none')
    isGameResume = false
}

document.addEventListener("keydown", function(event) {
    if (event.key === "p") {
        if (isGameStart) {
            if (isGameResume) {
                pause_game()
            } else {
                displayBackgroundOrMenu('running', 'none')
                isGameResume = true
            }
        }
    }
})



displayBackgroundOrMenu = (att, menu) => {
    caisse.style = `animation-play-state: ${att};`
    pnj.style = `animation-play-state: ${att}`
    pause_menu[0].style = `display: ${menu};`
}

startGame = () => {
    root.style.setProperty('--speed', '1.5s');
    console.log(caisse.style)
    console.log('ingame')
    isGameResume = true;
    isGameStart = true;
    displayBackgroundOrMenu('running', 'none')

    caisse.style = `animation-play-state: running;`


}

if (!isGameResume || !isGameStart) {
    console.log('je sius dans les menu')
    menu_start_resume[0].innerHTML = 'G = Commencer'

} else if (!isGameResume && playerScore !== 0) {

    menu_start_resume[0].innerHTML = 'G = Reprendre'

} else {

    isGameResume = true
        //je suis en partis
}



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


    var speed = rootStyles.getPropertyValue('--speed').split('s')[0];
    console.log(speed)

    // detection collision
    if ((caisseLeft < 120) && !isPnjCrouch) {
        // collision
        pause_game()
        console.log('finito')
        alert("Game Over!");
    }
}, 10);


//Touche pour les 2 functions jump et slide
document.addEventListener("keydown", function(event) {
    if (event.key === "m") {
        jump();
    } else if (event.key === "l") {
        isPnjCrouch = true
        slide();
    }
})

document.addEventListener("keyup", function(event) {
    if (event.key === "l") {
        isPnjCrouch = false
    }
})