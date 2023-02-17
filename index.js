<<<<<<< Updated upstream
=======

var niveau1 = {
    "title": "Découverte",
    "creator": "Mozamel Himidi",
    "difficulty": 1,
    "blocks": [
        {"type": "espace vide"},
        {"type": "bloc sol"},
        {"type": "espace vide"},
        {"type": "bloc en l'air"},
        {"type": "espace vide"},
        {"type": "bloc sol"},
        {"type": "bloc en l'air"},
    ]
};

    document.querySelector("#bouton1").onclick=()=>{
    let table= document.getElementById("montableau")
    let nouvelleLigne = table.insertRow(-1);
    let colonne = nouvelleLigne.insertCell(0);
    colonne.innerHTML = console.log(niveau1.blocks[1]);
    alert("vous avez placer un espace vide");
    }

let boutonx = document.getElementById("bouton2");
boutonx.addEventListener("click", function () {
    console.log(niveau1.blocks[1]);
    alert("vous avez placer un bloc sol");
});

let boutony = document.getElementById("bouton3");
boutony.addEventListener("click", function () {
        console.log(niveau1.blocks[3]);
        alert("vous avez placer un bloc en l'air");
});

// Charger le fichier JSON
fetch('fichier.json')
  .then(response => response.json())
  .then(data => {
    // Récupérer l'élément HTML
    var monElement = document.getElementsByClassName("constructeur");

    // Ajouter le texte à l'élément HTML
    monElement.innerText = data.blocks;
  });
>>>>>>> Stashed changes
