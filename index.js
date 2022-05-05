//******************** Réussi ! *****************

// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)


//----------------Variables
const littleCircle  = document.querySelector(".little-circle"); 
const mediumCircle  = document.querySelector(".medium-circle"); 
const largeCircle   = document.querySelector(".large-circle"); 



//----------------Fonctions




//----------------Evenements
window.addEventListener("mousemove", (e) => {
    littleCircle.style.left = e.pageX + "px";
    littleCircle.style.top = e.pageY + "px";

    mediumCircle.style.left = e.pageX + "px";
    mediumCircle.style.top = e.pageY + "px";

    largeCircle.style.left = e.pageX + "px";
    largeCircle.style.top = e.pageY + "px";
});

// Optimsation de l'évenement
// const circles = document.querySelectorAll(".rond");

// window.addEventListener("mousemove", (e) => {
//     circles.forEach((circle) => {
//         circle.style.top = e.y + "px";
//         circle.style.left = e.x + "px";
//     });
// });