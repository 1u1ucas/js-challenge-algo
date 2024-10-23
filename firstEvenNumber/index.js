// Trouver le premier nombre pair dans un tableau


const numbers = [1, 3, 7, 8, 10];

function findFirstEven(arg){
    for (let i=0; i < arg.length; i++) {
      if (arg[i] % 2 === 0) {
        return arg[i]
      } 
    }
    return undefined;
  }

console.log(findFirstEven(numbers))