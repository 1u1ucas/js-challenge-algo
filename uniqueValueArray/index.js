const arr = [1, 2, 3, 4, 4, 5, 6, 6, 7];




// Écris une fonction qui prend un tableau en argument et retourne un tableau contenant uniquement des valeurs uniques.
var uniqueArray = [...new Set(arr)]

console.log(uniqueArray)