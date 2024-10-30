// Pour chaque question
// Afficher une boite de dialogue avec la question + les propositions + un champ de réponse
// Stocker la réponse dans une variable
// Comparer la réponse avec la bonne réponse

// Une fois toutes les questions posées
// Afficher le nombre de bonnes réponses et le pourcentage de bonnes réponses

/**
 * Questions
 */

// Question 1
// Que doit-on écrire comme selecteur CSS pour appliquer un style aux balises de titre de niveau 2 et 3 ?
// Réponse : h2, h3
// Propositions :
// h2 + h3
// h2 h3
// .h2 .h3
// h2, h3

// Question 2
// Quelle est la particularité de l'attribut class par rapport à l'attribut id ?
// Réponse : Il ne peut y avoir qu'un seul et même nom d'id par page, et plusieurs fois une même classe
// Propositions :
// Il ne peut y avoir qu'un seul et même nom d'id par page, et plusieurs fois une même classe
// class est utilisable dans les vieilles versions de HTML mais pas id
// class peut être utilisé dans un fichier .css mais pas id
// Il n'y a strictement aucune différence entre les deux

// Question 3
// Lequel de ces alignements fait prendre au texte toute la largeur disponible ?
// Réponse : justify
// left
// center
// right
// justify

// Question 4
// Laquelle de ces couleurs correspond à du blanc ?
// Réponse : #FFFFFF
// #000
// rgb(100, 100, 100)
// #FFFFFF
// purple


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [
    {
        question: "Que doit-on écrire comme selecteur CSS pour appliquer un style aux balises de titre de niveau 2 et 3 ?",
        propositions: ["h2 + h3", "h2 h3", ".h2 .h3", "h2, h3"],
        reponse: "h2, h3"
    },
    {
        question: "Quelle est la particularité de l'attribut class par rapport à l'attribut id ?",
        propositions: [
            "Il ne peut y avoir qu'un seul et même nom d'id par page, et plusieurs fois une même classe",
            "class est utilisable dans les vieilles versions de HTML mais pas id",
            "class peut être utilisé dans un fichier .css mais pas id",
            "Il n'y a strictement aucune différence entre les deux"
        ],
        reponse: "Il ne peut y avoir qu'un seul et même nom d'id par page, et plusieurs fois une même classe"
    },
    {
        question: "Lequel de ces alignements fait prendre au texte toute la largeur disponible ?",
        propositions: ["left", "right", "center", "justify"],
        reponse: "justify"
    },
    {
        question: "Laquelle de ces couleurs correspond à du blanc ?",
        propositions: [
            "#000",
            "rgb(100, 100, 100)",
            "#FFFFFF",
            "purple"
        ],
        reponse: "#FFFFFF"
    }
];

let bonnesReponses = 0;
let questionIndex = 0;

const poserQuestion = () => {
    if (questionIndex < questions.length) {
        const q = questions[questionIndex];
        const propositionsAffichees = q.propositions.map((prop, index) => `${index + 1}. ${prop}`).join('\n');
        rl.question(`${q.question}\n${propositionsAffichees}\n`, (reponseUtilisateur) => {
            const reponseIndex = parseInt(reponseUtilisateur) - 1;
            if (q.propositions[reponseIndex] === q.reponse) {
                bonnesReponses++;
            }
            questionIndex++;
            poserQuestion();
        });
    } else {
        console.log(`Vous avez ${bonnesReponses} bonnes réponses sur ${questions.length}. Pourcentage de bonnes réponses: ${(bonnesReponses / questions.length) * 100}%`);
        rl.close();
    }
};

poserQuestion();