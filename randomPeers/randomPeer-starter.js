let users = [
    {id:1},
    {id:2},
    {id:3},
    {id:4},
    {id:5},
    {id:6},
    {id:7},
    {id:8},
]

/******* Create random peer ******/
/******** Result : ********/
/* 
[
    [ { id: 5 }, { id: 1 } ],
    [ { id: 3 }, { id: 7 } ],
    [ { id: 6 }, { id: 8 } ],
    [ { id: 4 }, { id: 2 } ]
]
*/

// Création de groupes de 2 joueurs de manière aléatoire
// si le nombre de joueurs est impair alors il y aura un groupe de 3 joueurs

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let shuffledUsers = shuffle(users);

let groups = [];
for (let i = 0; i < shuffledUsers.length; i += 2) {
    if (i + 1 < shuffledUsers.length) {
        groups.push([shuffledUsers[i], shuffledUsers[i + 1]]);
    } else {
        groups[groups.length - 1].push(shuffledUsers[i]);
    }
}

console.log(groups);