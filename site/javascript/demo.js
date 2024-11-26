
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

// Ajouter un effet "vibration" vintage sur les images au survol
document.querySelectorAll('.ImgLangage').forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.animation = "vintageShake 0.2s";
        setTimeout(() => image.style.animation = "", 200);
    });
});

// Définir une animation de vibration vintage
const style = document.createElement('style');
style.innerHTML = `
@keyframes vintageShake {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(1deg); }
    50% { transform: rotate(-1deg); }
    75% { transform: rotate(0.5deg); }
}`;
document.head.appendChild(style);

function animateAllProgressBars() {
    const progressBars = document.querySelectorAll(".progress-bar");

    progressBars.forEach((bar) => {
        const percentage = parseInt(bar.getAttribute("data-percentage")); // Récupérer le pourcentage
        let currentProgress = 0;

        const progressText = bar.nextElementSibling; // Sélectionner le texte associé

        // Animation progressive
        const interval = setInterval(() => {
            if (currentProgress >= percentage) {
                clearInterval(interval); // Arrêter l'animation
            } else {
                currentProgress++;
                bar.style.width = currentProgress + "%"; // Mettre à jour la largeur
                progressText.textContent = currentProgress + "%"; // Mettre à jour le texte
            }
        }, 15); // Ajuste la vitesse d'animation
    });
}

// Lancer l'animation une fois la page chargée
document.addEventListener("DOMContentLoaded", animateAllProgressBars);




function changeText(variable) {
    return () => {
        document.getElementById("txtProject").textContent = variable;
    }
}

let textSae = "Pendant le second semestre, nous avions une Sae qui se nommais : \“installation d’un services réseau\”. Ce projet se réalisé seul et ce qui était demander était d’effectuer des configurations systèmes et des démarrages, arrêt et configuration de services. plus concrètement chaque semaine, nous avions des mission à réalisé afin de réaliser ces objectifs. afin de mener a bien cette Saé, je réutilisais certain travaux pratique déjà réaliser en cours pour les utilisé dans le contexte de la Saé, par contre, toute les mission était réalisable avec les TP, je suis donc allé dans la documentation de certain services afin de pouvoir les configurés."
let textOnitama ="Je vous présente mon premier gros projet en équipe. Durant ma première année de BUT, nous devions réaliser une application de type jeu en C#, nous étions par groupe de trois et nous avions choisi le jeu Onitama. Nous avons donc develloppé cette application de A à Z, Nous avons fait la conception puis nous l'avons programmé et enfin testé. J'ai pu beaucoup apprendre sur le langage C# que j'ai très particulièrement apprecier. J'ai également beaucoup découvert, appris sur la gestion du travail au sein d'une équipe ce qui était pour moi complètement inconnu. Je me siuis beaucoup investi dans ce projet et ce projet est une grande fierté pour moi."
let textProject2 = "Ce projet est mon plus ambitieux projet personnel. Je me suis fixé pour objectif de concevoir un algorithme de poker capable de prendre les meilleures décisions sur le long terme. Cela fait un mois que je travaille dessus, à raison de 2 à 4 heures par semaine. Le développement est réalisé en C#, et je prévois d’intégrer une base de données en SQL. Pour réussir ce projet, je lis des livres traitant de la théorie du poker, mais aussi des ouvrages spécialisés sur l'aspect mental du poker. "
let loca = "Voici un projet d’équipe de six personnes que je suis en train de réaliser. Il s’agit d’un projet scolaire dans lequel nous travaillons avec un \"client\" (un professeur) pour répondre à son besoin. Le projet consiste à développer une application de gestion de location d'appartements. Le client peut ajouter ses biens, et les utilisateurs peuvent louer ces biens pour une durée déterminée. Ce projet se déroule en deux phases : Partie web : Nous devons développer en PHP, HTML, CSS, JavaScript, et Blazor. Cette partie suit le modèle MVC et m'a permis de découvrir le PHP et Blazor, deux technologies que je ne connaissais pas auparavant. Partie mobile : Cette phase, prévue pour le second semestre, sera réalisée en Android. Le projet s'étend sur toute l'année, et il me permet de travailler en équipe, d'apprendre de nouvelles technologies, et d'approfondir mes compétences en développement."


document.getElementById("img1").addEventListener("mouseenter", changeText(textSae));

document.getElementById("onitama").addEventListener("mouseenter", changeText(textOnitama));

document.getElementById("poker").addEventListener("mouseenter", changeText(textProject2));

document.getElementById("loc").addEventListener("mouseenter", changeText(loca));

function changeText2(variable) {
    return () => {
        document.getElementById("txtInteret").textContent = variable;
        console.log("Poker text triggered!");
    }
}

let rugby ="Le rugby, ce sport si merveilleux auquel j'ai consacré 13 ans de ma vie, de mes 5 ans à mes 18 ans, a toujours été une grande passion pour moi. J'ai même eu la chance de le pratiquer à haut niveau au sein de la grande équipe auvergnate de l'ASM Clermont Auvergne pendant trois ans. Ce sport m'a permis de développer mon esprit d'équipe, ma persévérance ainsi que mon fair-play. J'y ai également découvert une valeur personnelle qui m'accompagne encore aujourd'hui : toujours donner le meilleur de soi-même, à 100 %."

let video = "Les jeux vidéo occupent une place importante dans mon temps libre, et j'adore y jouer. Cette passion ne date pas d'hier : j'ai commencé à jouer quand j'étais enfant, sur la Nintendo DS, avec des jeux comme Mario Kart et Mario Bros. Aujourd'hui, je préfère les jeux de stratégie, car ils me permettent de réfléchir, de trouver la meilleure stratégie pour surpasser mes adversaires et de travailler sur les mécaniques du jeu. Mais ce que je préfère dans les jeux vidéo, c'est le fait qu'on peut toujours s'améliorer."

let dev = "L'informatique, c'est une passion qui a commencé tôt pour moi. Au collège, j'ai découvert la programmation en créant de petits jeux avec Scratch, un langage éducatif. Je passais beaucoup de temps au CDI du collège, curieux d'apprendre et de tester mes idées. Plus tard, en terminale, j'ai choisi la spécialité NSI (Numérique et Sciences Informatiques), ce qui m'a conduit tout naturellement à intégrer le BUT Informatique. Mon objectif est de transformer cette passion pour l'informatique en mon futur métier. Durant le BUT, j'ai découvert de nombreux langages, dont les langages orientés objet. J'ai rapidement adoré cette façon de programmer, qui me permet aujourd'hui de réaliser des projets personnels, notamment avec C#, mon langage de prédilection."

let escalade = "L'escalade est ma passion la plus récente. Bien que je connaisse cette discipline depuis longtemps, je n'avais jamais réellement eu l'occasion de la pratiquer. Depuis le début de l'année scolaire, je m'y suis mis de manière régulière, à raison de deux séances par semaine. Ce que j'aime dans ce sport, c'est qu'il offre une progression constante, et cette évolution est facilement perceptible : certains murs sont plus difficiles que d'autres, ce qui permet de mesurer ses progrès. Pendant mes séances, je me lance des défis personnels, ce qui m'encourage à me dépasser à chaque fois. En plus, l'escalade est une discipline qui favorise les rencontres. J'ai l'occasion de pratiquer avec d'autres passionnés, souvent plus expérimentés, ce qui rend chaque séance encore plus enrichissante"

let muscu = "La musculation est une discipline que je pratique depuis maintenant six ans. Je l'ai découverte lors de mes débuts au rugby à haut niveau, et je continue à m'entraîner régulièrement aujourd'hui, à raison de deux à trois séances par semaine. Ce sport m'apporte beaucoup : il me permet de fixer des objectifs physiques et techniques, mais surtout, il m'aide à me vider l'esprit et à me concentrer uniquement sur mes performances. À mon sens, le plus grand défi de la musculation est de maintenir une motivation constante. Cependant, grâce à ma persévérance, je parviens toujours à retrouver cette motivation pour continuer à progresser."

let musique = "La musique fait partie intégrante de ma vie. J'en écoute depuis que je suis tout petit, avec des artistes et groupes comme Sexion d'Assaut, Maître Gims, Indila ou encore Zaz. Aujourd'hui, la musique m'accompagne dans toutes les situations : pour me concentrer, m'ambiancer, me changer les idées, et même chanter (même si je chante très faux !). J'écoute énormément de musique et explore des styles très variés, allant de Charles Aznavour à Lorenzo, en passant par AC/DC et Indochine "

let pokerr = "Je connais le poker depuis que je suis petit. J'y jouais déjà au centre de loisirs avec des amis. Ce jeu, qui allie chance et calcul, me fascine énormément. Récemment, je me suis inscrit au club NoLimit 63 à Clermont. Grand amateur de mathématiques, j'adore analyser mes chances de remporter un coup et m'efforcer de toujours prendre la meilleure décision (selon la théorie, bien sûr). Cependant, je suis bien conscient que le poker est un jeu d'argent qui peut rapidement devenir addictif. C'est pourquoi je ne dépense pas d'argent : mon club me permet déjà de jouer contre des joueurs expérimentés, et cela me suffit pleinement."

document.getElementById("rugby").addEventListener("mouseenter", changeText2(rugby));

document.getElementById("video").addEventListener("mouseenter", changeText2(video));

document.getElementById("dev").addEventListener("mouseenter", changeText2(dev));

document.getElementById("escalade").addEventListener("mouseenter", changeText2(escalade));

document.getElementById("muscu").addEventListener("mouseenter", changeText2(muscu));

document.getElementById("musique").addEventListener("mouseenter", changeText2(musique));

document.getElementById("pokerr").addEventListener("mouseenter", changeText2(pokerr));;
