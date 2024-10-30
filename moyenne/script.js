// OPTION 1
// Tant que l'utilisateur veut ajouter une note
    // On lui demande de saisir une note (prompt)
    // ajouté la note à la liste de notes (tableau)
    // On lui demande s'il souhaite ajouter une autre note (confirm)

// OPTION 2
// Demander à l'utilisateur de saisir une liste de notes séparées par des virgules
// On transforme la chaine de caractères en tableau avec la méthode split

// affciher la moyenne des notes
// afficher la note la plus haute
// afficher la note la plus basse


// Bonus
// afficher la note la plus proche de 10
// afficher la note la plus proche de 0



const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Veuillez saisir une liste de notes séparées par des virgules: ', (notesInput) => {
    let notes = notesInput.split(',').map(Number);

    let sum = notes.reduce((acc, note) => acc + note, 0);
    let average = sum / notes.length;

    let highestNote = Math.max(...notes);

    let lowestNote = Math.min(...notes);

    console.log(`Moyenne des notes: ${average}`);
    console.log(`Note la plus haute: ${highestNote}`);
    console.log(`Note la plus basse: ${lowestNote}`);


    let closestToTen = notes.reduce((prev, curr) => Math.abs(curr - 10) < Math.abs(prev - 10) ? curr : prev);
    console.log(`Note la plus proche de 10: ${closestToTen}`);

    let closestToZero = notes.reduce((prev, curr) => Math.abs(curr - 0) < Math.abs(prev - 0) ? curr : prev);
    console.log(`Note la plus proche de 0: ${closestToZero}`);

    rl.close();
});