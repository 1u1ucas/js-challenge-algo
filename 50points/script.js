// Le jeu des cinquante points
// 2 dés
// À tour de rôle, deux joueurs lancent deux dés.
// S’ils n’obtiennent aucun double, ils ne marquent pas de points.

// En revanche, si leurs dés affichent des doubles, 
// voici comment calculer leur score :
// Un double 1, 2, 4, 5 = 5 points
// Un double 6 = 25 points
// S’ils obtiennent un double 3, ils repartent à zéro
// Le premier joueur à atteindre 50 points gagne la partie.



let scores, currentScore, currentPlayer, gamePlaying;

function init() {
    scores = [0, 0];
    currentScore = 0;
    currentPlayer = 0;
    gamePlaying = true;
    console.log("Game initialized");
}

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function nextPlayer() {
    currentPlayer = currentPlayer === 0 ? 1 : 0;
    currentScore = 0;
    console.log(`Next player: ${currentPlayer}, score: ${scores[currentPlayer]}`);
}

function checkWinner() {
    if (scores[currentPlayer] >= 50) {
        displayScore();
        displayWinner();
        endGame();
    } else {
    console.log(`Current score: ${scores[currentPlayer]} for current player: ${currentPlayer}`);
    nextPlayer();
    }
}

function displayScore() {
    console.log(`Player ${currentPlayer} score: ${scores[currentPlayer]}`);
}


function displayWinner() {
    console.log(`Player ${currentPlayer} wins!`);
}

function resetGame() {
    init();
    console.log("Game reset");
}

function endGame() {
    gamePlaying = false;
    console.log("Game ended");
}

function playGame() {
    if (gamePlaying) {
        let dice1 = rollDice();
        let dice2 = rollDice();
        console.log(`Player ${currentPlayer} rolls: ${dice1} and ${dice2}`);
        if (dice1 === dice2) {
            if (dice1 === 3) {
                scores[currentPlayer] = 0;
                checkWinner();
            } else if (dice1 === 6) {
                scores[currentPlayer] += 25;
                checkWinner();
                
            } else {
                scores[currentPlayer] += 5;
                checkWinner();
            }
        } else {
            checkWinner();
        }
    }
}


function simulateNewGameClick() {
    resetGame();
}

// Initialize game
init();

// Simulate game actions

// fait une boucle tant que gamePlaying est vrai la fonction rollDice est appelée   
while (gamePlaying) {
    playGame();
}
