let p = `
Faites tremper les pois chiches et les fèves dans l'eau 12 h, les égoutter et les cuire 45 mn à l'auto cuiseur.
Peler oignon et ail, les hacher ainsi que le persil.
Passer les fèves et les pois chiches au mixer (ou robot).
Mélanger avec le persil, l'oignon, l'ail, la farine, les épices, le sel.
Pétrissez le tout avec vos mains en ajoutant un peu d'eau si nécessaire. Rassemblez la pâte et laisser reposer au réfrigérateur pendant minimum 30 mn.
Façonner une trentaine de boulettes de la grosseur d'une pièce de 2 euros.
Les faire frire 2/3 mn puis les égoutter sur du papier absorbant.
Servir chaud ou froid avec des petites sauces tomates aux herbes, ou sauces yaourts.
`
// compter le nombre d'occurence pour chaque mot
// La casse n'est pas prise en compte
/********  EXEMPLE */
/*
[
  { word: 'chiches', occurences: 2 },
  { word: 'les', occurences: 10 },
  { word: 'pois.', occurences: 2 },
  { word: 'et', occurences: 5 },
  ...
]
*/


function countWordOccurrences(text) {
  text = text.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  
  let words = text.split(/\s+/);
  
  let wordCounts = {};
  words.forEach(word => {
    if (wordCounts[word]) {
      wordCounts[word]++;
    } else {
      wordCounts[word] = 1;
    }
  });
  
  let wordOccurrences = [];
  for (let word in wordCounts) {
    wordOccurrences.push({ word: word, occurences: wordCounts[word] });
  }
  
  return wordOccurrences;
}


let wordOccurrences = countWordOccurrences(p);
console.log(`Occurences pour chaque mots : `, wordOccurrences);


// Bonus : trier les mots par ordre alphabétique
function sortWordsAlphabetically(words) {
  return words.sort((a, b) => a.word.localeCompare(b.word));
}
// Bonus : trier les mots par ordre décroissant du nombre d'occurence
function sortWordsByOccurrences(words) {
  return words.sort((a, b) => b.occurences - a.occurences);
}
// Bonus : afficher les 10 mots les plus utilisés
function top10MostUsedWords(words) {
  return sortWordsByOccurrences(words).slice(0, 10);
}
// Bonus : afficher les 10 mots les moins utilisés
function top10LeastUsedWords(words) {
  return sortWordsByOccurrences(words).slice(-10).reverse();
}
// Bonus : afficher les 10 mots les plus longs
function top10LongestWords(words) {
  return words.sort((a, b) => b.word.length - a.word.length).slice(0, 10);
}
// Bonus : afficher les 10 mots les plus courts
function top10ShortestWords(words) {
  return words.sort((a, b) => a.word.length - b.word.length).slice(0, 10);
}

let wordOccurenceSortAlphabetically = sortWordsAlphabetically(wordOccurrences);
console.log(`Tri par ordre alphabétique : `, wordOccurenceSortAlphabetically);

let wordOccurenceSortByOccurences = sortWordsByOccurrences(wordOccurrences);
console.log(`Tri par ordre décroissant du nombre d'occurence : `, wordOccurenceSortByOccurences);

let top10MostUsed = top10MostUsedWords(wordOccurrences);
console.log(`Les 10 mots les plus utilisés : `, top10MostUsed);

let top10LeastUsed = top10LeastUsedWords(wordOccurrences);
console.log(`Les 10 mots les moins utilisés : `, top10LeastUsed);

let top10Longest = top10LongestWords(wordOccurrences);
console.log(`Les 10 mots les plus longs : `, top10Longest);

let top10Shortest = top10ShortestWords(wordOccurrences);
console.log(`Les 10 mots les plus courts : `, top10Shortest);