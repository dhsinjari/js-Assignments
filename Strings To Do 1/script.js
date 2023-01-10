console.log('Exercise 1:')
function removeBlanks(str) {
    let newString = "";  
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== " ") {
        newString += str[i];
      }
    }  
    return newString;
  }
  console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));
  console.log(removeBlanks("I can not BELIEVE it's not BUTTER"));

console.log('Exercise 2:')

function getDigits(str) {
    let digits = "";
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(Number(str[i]))) {
            digits += str[i];
        }
    }
    return Number(digits);
}

console.log(getDigits("abc8c0d1ngd0j0!8"));
// Output: 801008
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));
// Output: 1357924680

console.log('Exercise 3:')

function acronym(str) {
    let words = str.split(" ");
    let acronym = "";

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length > 0) {
            acronym += word[0].toUpperCase();
        }
    }
    return acronym;
}

console.log(acronym(" there's no free lunch - gotta pay yer way. "));
// Output: "TNFL-GPYW"
console.log(acronym("Live from New York, it's Saturday Night!"));
// Output: "LFNYISN"

console.log('Exercise 4:')

function countNonSpaces(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            count++;
        }
    }
    return count;
}
console.log(countNonSpaces("Honey pie, you are driving me crazy"));
// Output: 29
console.log(countNonSpaces("Hello world !"));
// Output: 11

console.log('Exercise 5:')

function removeShorterStrings(arr, num) {
    return arr.filter(function(str) {
        return str.length >= num;
    });
}
console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4));
// Output: ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3));
// Output: ['There', 'bug', 'the', 'system']

