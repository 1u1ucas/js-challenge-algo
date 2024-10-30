// Ce message doit être crypté
message ="voici un texte qui peut etre crypte"

// Vous devez réaliser un script pour crypter le texte ci-dessus
// Chaque lettre doit être remplacée par sa position dans l'alphabet
// "a" = 1, "b" = 2,

function cryptageByNumber(message) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let cryptage = "";
    for (let i = 0; i < message.length; i++) {
        let lettre = message[i].toLowerCase();
        if (alphabet.includes(lettre)) {
            cryptage += alphabet.indexOf(lettre) + 1 + " ";
        } else {
            cryptage += lettre;
        }
    }
    return cryptage;
}


function cryptage(message) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let cryptage = "";
    for (let i = 0; i < message.length; i++) {
        let lettre = message[i].toLowerCase();
        if (alphabet.includes(lettre)) {
            let index = alphabet.indexOf(lettre);
            let lettreCryptee = alphabet[(index + 1) % alphabet.length];
            cryptage += lettreCryptee;
        } else {
            cryptage += lettre;
        }
    }
    return cryptage;
}

console.log(cryptageByNumber(message));

console.log(cryptage(message));