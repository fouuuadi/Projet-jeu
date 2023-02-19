let pnj = document.getElementById("pnj");
let caisse = document.getElementById("caisse");
let bush = document.getElementById("bush");
let score_element = document.getElementById("score");
let score_background = document.getElementById("score_background");
let pause_menu_title = document.getElementById("menu_pause_title");
let gameOver = document.querySelector("#gameOver");
let menu_start_resume = document.getElementsByClassName("menu_option_mid");
let block = document.getElementsByClassName("bottom_background");
let pause_menu = document.getElementsByClassName("pause_menu");
const root = document.querySelector(':root');
const rootStyles = getComputedStyle(root);

let interval = null;
let playerScore = 0;
let isGameResume = false;
let isGameStart = false;
let isPnjCrouch = false;
let isPnjJump = false;
let isGameOver = false;
let score = 0;
let speedValues = 1.5
let isBushAnim = false;
let blockPass = 0;
let blockLvl = 0;

let descrease = 0.05;

document.addEventListener("keydown", function(event) {
    if (event.key === "g" || event.key === "G") {
        isGameResume = false
        if (menu_start_resume[0] !== undefined)
            menu_start_resume[0].innerHTML = 'G = Commencer'
        startGame()
    }
})

const pause_game = () => {
    menu_start_resume[0].innerHTML = 'P = Reprendre'
    pause_menu_title.innerHTML = 'Menu Pause'
    displayBackgroundOrMenu('paused', 'block')
    isGameResume = false
}



const displayBackgroundOrMenu = (att, menu) => {
    if (isBushAnim) {
        bush.style = `animation-play-state: ${att}!important;animation: block ${speedValues}s normal linear; visibility:visible`
    } else {
        caisse.style = `animation-play-state: ${att}!important;animation: block ${speedValues}s normal linear; visibility:visible`
    }
    pnj.style = `animation-play-state: ${att}`
    pause_menu[0].style = `display: ${menu};`

}

const startGame = () => {
    speedValues = 1.5
    root.style.setProperty('--speed', `${speedValues}s`);
    isGameResume = true;
    isGameStart = true;
    isGameOver = false;
    score_background.style = 'display:block';

    caisse.style = `animation: block ${speedValues}s normal linear;animation-iteration-count: 1; animation-play-state: running; visibility:visible;`
    bush.style = 'animation:none; visibility:hidden;'
    pnj.style = `animation-play-state: running`
    pause_menu[0].style = `display: none`

}

if (!isGameResume || !isGameStart) {
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

const game_over = () => {
    isGameOver = true;
    isGameResume = false;

    if (menu_start_resume[0] !== undefined) {
        menu_start_resume[0].style = "display:none";
    }

    displayBackgroundOrMenu('paused', 'block');
    caisse.style = `animation: none`;
    bush.style = `animation: none`;
    pause_menu[0].style = `display: block`;

    pause_menu_title.innerHTML = 'Game Over';
    score_element.innerHTML = `${Math.round(score)} points`;
    score_background.style = `display: none`;
    score = 0;
}

const isAlive = setInterval(function() {
    // position pnj Y position
    let pnjTop = parseInt(window.getComputedStyle(pnj).getPropertyValue("top"));

    // position caisse X position
    let caisseLeft = parseInt(
        window.getComputedStyle(caisse).getPropertyValue("left")
    );

    const bushLeft = parseInt(
        window.getComputedStyle(bush).getPropertyValue("left")
    )



    if ((bushLeft < 90 && bushLeft > 80) && !isPnjJump) {
        game_over()
    }

    // detection collision
    if (((caisseLeft < 140 && caisseLeft > 130) && !isPnjCrouch)) {
        game_over()
    }
}, 10);

const blockPassChecking = () => {
    score = blockPass * speedValues * 10
    score_background.innerHTML = `${Math.round(score)} points`;
    if (blockLvl === 9) {
        blockLvl = 0;
        if (speedValues - descrease > 0.5) {
            speedValues = speedValues - descrease
            root.style.setProperty('--speed', `${speedValues}s`);
        }

    }
}


caisse.addEventListener('animationend', () => {
    bush.style = `animation: block ${speedValues}s normal linear;animation-iteration-count: 1; animation-play-state: running; visibility:visible`
    caisse.style = 'animation:none; visibility:hidden;'
    blockPass++;
    blockLvl++;
    blockPassChecking()
    isBushAnim = true;
});

bush.addEventListener('animationend', () => {
    caisse.style = `animation: block ${speedValues}s normal linear;animation-iteration-count: 1; animation-play-state: running; visibility:visible;`
    bush.style = 'animation:none; visibility:hidden;'
    blockPass++;
    blockLvl++;
    blockPassChecking()
    isBushAnim = false;
});




//Touche pour les 2 functions jump et slide
document.addEventListener("keydown", function(event) {
    if (event.key === "m") {
        jump();
        isPnjJump = true
    } else if (event.key === "l") {
        isPnjCrouch = true
        slide();
    } else if (event.key === "r") {
        startGame()
    } else if (event.key === "p") {
        if (isGameStart && !isGameOver) {
            if (isGameResume) {
                pause_game()
            } else {
                displayBackgroundOrMenu('running', 'none')
                isGameResume = true
            }
        }
    }
})

document.addEventListener("keyup", function(event) {
    if (event.key === "l") {
        isPnjCrouch = false
    } else if (event.key === "m") {
        isPnjJump = false
    }
})