
document.addEventListener("DOMContentLoaded", function() {
    const titleText = "Hey ! I'm Lucas LHOMMET";
    const paragraphText = "I'm a French student in 2nd year for a Bachelor University and Technology";
    let titleIndex = 0;
    let paragraphIndex = 0;
    const speed = 100; // Vitesse de frappe en millisecondes

    function typeWriterTitle() {
        if (titleIndex < titleText.length) {
            document.getElementById("typed-title").textContent += titleText.charAt(titleIndex);
            titleIndex++;
            setTimeout(typeWriterTitle, speed);
        } else {
            typeWriterParagraph(); // Lance l'effet d'écriture du paragraphe après le titre
        }
    }

    function typeWriterParagraph() {
        if (paragraphIndex < paragraphText.length) {
            document.getElementById("typed-paragraph").textContent += paragraphText.charAt(paragraphIndex);
            paragraphIndex++;
            setTimeout(typeWriterParagraph, speed);
        }
    }
    typeWriterTitle();
});







function changeText(variable) {
    return () => {
        document.getElementById("txtProject").textContent = variable;
    }
}

let textSae = "Pendant le second semestre, nous avions une Sae qui se nommais : \“installation d’un services réseau\”. Ce projet se réalisé seul et ce qui était demander était d’effectuer des configurations systèmes et des démarrages, arrêt et configuration de services. plus concrètement chaque semaine, nous avions des mission à réalisé afin de réaliser ces objectifs. afin de mener a bien cette Saé, je réutilisais certain travaux pratique déjà réaliser en cours pour les utilisé dans le contexte de la Saé, par contre, toute les mission était réalisable avec les TP, je suis donc allé dans la documentation de certain services afin de pouvoir les configurés."
let textOnitama ="Je vous présente mon premier gros projet en équipe. Durant ma première année de BUT, nous devions réaliser une application de type jeu en C#, nous étions par groupe de trois et nous avions choisi le jeu Onitama. Nous avons donc develloppé cette application de A à Z, Nous avons fait la conception puis nous l'avons programmé et enfin testé. J'ai pu beaucoup apprendre sur le langage C# que j'ai très particulièrement apprecier. J'ai également beaucoup découvert, appris sur la gestion du travail au sein d'une équipe ce qui était pour moi complètement inconnu. Je me siuis beaucoup investi dans ce projet et ce projet est une grande fierté pour moi."
let textProject2 = "mon projet poker, la description arrive "
let textProject3 = "Ceci est la description du projet 3"


document.getElementById("img1").addEventListener("mouseenter", changeText(textSae));

document.getElementById("onitama").addEventListener("mouseenter", changeText(textOnitama));

document.getElementById("poker").addEventListener("mouseenter", changeText(textProject2));

document.getElementById("img3").addEventListener("mouseenter", changeText(textProject3));


