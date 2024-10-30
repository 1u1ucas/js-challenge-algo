// La partie est composé de deux joueurs et un croupier
// Au début de la partie :
    // Le croupier reçoit une carte
    // Les joueurs reçoivent 2 cartes

// Chaques joueurs joue à son tour
// Le joueur peut choisir de piocher une carte
// Le joueur peut choisir de rester

// Le croupier joue à son tour
// Le croupier pioche une carte tant qu'il a moins de 17 points

// Les joueurs doivent se rapprocher du score 21
// Le joueur qui se rapproche le plus du score 21 gagne
// Si le joueur dépasse le score 21, il perd
// Si le joueur et le croupier ont le même score, le croupier gagne

// Chaque carte numérotée de 2 à 10 a sa valeur nominale (égale au numéro sur la carte)
// Les valets, les dames et les rois (les figures), ont une valeur de 10 points
// L’As vaut 1 point ou 11 points, au choix du joueur

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const cardValues = {
    '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10,
    'J': 10, 'Q': 10, 'K': 10, 'A': [1, 11]
};


function calculateScore(hand) {
    let score = 0;
    let aces = 0;

    hand.forEach(card => {
        if (card === 'A') {
            aces += 1;
        } else {
            score += cardValues[card];
        }
    });

    for (let i = 0; i < aces; i++) {
        if (score + 11 <= 21) {
            score += 11;
        } else {
            score += 1;
        }
    }

    return score;
}


function drawCard() {
    const cards = Object.keys(cardValues);
    return cards[Math.floor(Math.random() * cards.length)];
}


function playerTurn(playerHand, callback) {
    console.log(`Votre main: ${playerHand}`);
    rl.question('Voulez-vous piocher une carte ? (oui/non) ', (answer) => {
        if (answer.toLowerCase() === 'oui') {
            playerHand.push(drawCard());
            console.log(`Vous avez pioché: ${playerHand[playerHand.length - 1]}`);
            if (calculateScore(playerHand) > 21) {
                console.log(` Le joueur perd avec ${calculateScore(playerHand)} points`);
                rl.close();
            } else {
            playerTurn(playerHand, callback);
            }
        } else {
            callback(calculateScore(playerHand));
        }

    });
}


function dealerTurn(dealerHand, playerHand) {
    let dealerScore = calculateScore(dealerHand);

    
    while (dealerScore < 17 || dealerScore < calculateScore(playerHand)) {
        console.log(`La main du croupier: ${dealerHand}`);
        dealerHand.push(drawCard());
        console.log(`Le croupier a pioché: ${dealerHand[dealerHand.length - 1]}`);
        dealerScore = calculateScore(dealerHand);
    }

    return dealerScore;
}

function determineWinner(playerScore, dealerScore) {
    if (playerScore > 21) {
        return ` Le joueur perd avec ${playerScore} points et le dealer a ${dealerScore} points`;
    } else if (dealerScore > 21 || playerScore > dealerScore) {
        return `Le joueur gagne avec ${playerScore} points contre ${dealerScore} points`;
    } else if (playerScore === dealerScore) {
        return `Egalité avec ${playerScore} points, le croupier gagne`;
    } else {
        return `le croupier gagne avec ${dealerScore} points contre ${playerScore} points`;
    }
}

function init() {
    const playerHand = [drawCard(), drawCard()];
    const dealerHand = [drawCard(), drawCard()];

    console.log(`La main du joueur: ${playerHand}`);
    console.log(`La main du croupier: ${dealerHand}`);

    playerTurn(playerHand, (playerScore) => {
        const dealerScore = dealerTurn(dealerHand, playerHand);
        console.log(determineWinner(playerScore, dealerScore));
        rl.close();
    });
}

init();

