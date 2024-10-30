let words = [
    "kayak",
    "Paris",
    "été",
    "Ressasser"
]

/******** Result : ********/
/*
kayak est un palindrome
Paris n'est pas un palindrome
été est un palindrome
Ressasser est un palindrome
*/

function isPalindrome(word) {
    let lowerCaseWord = word.toLowerCase();
    let reversedWord = lowerCaseWord.split('').reverse().join('');
    return lowerCaseWord === reversedWord;
}

words.forEach(word => {
    if (isPalindrome(word)) {
        console.log(`${word} est un palindrome`);
    } else {
        console.log(`${word} n'est pas un palindrome`);
    }
});