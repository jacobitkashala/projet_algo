function CamelCase(str) {
  let asc = 0;
  let result = "";
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    asc = str.codePointAt(i);
    if (asc >= 97 && asc <= 122) {
      result += String.fromCharCode(asc);
    }
    else {
      let ascCase = str.codePointAt(i + 1);
      result += (String.fromCharCode(ascCase)).toUpperCase();
    }
  }
  return result;
}
//

function comptChar(str) {
  let comptChar = {
    char: "",
    nbr: 0
  }
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    for (let i = count = 1; i < str.length; count += +(char === str[i++])) {
      comptChar.char = char;
      comptChar.nbr = count;
    }
    if (char !== str[i + 1]) {
      console.log(comptChar.char + " " + comptChar.nbr);
    }
  }
}


function SommeDiag(matrix) {
  let somDiagonaleP = 0, somDiagonaleSec = 0;

  for (let i = 0; i < matrix.length; i++) {
    let colonne = matrix.length - i - 1;
    somDiagonaleP += matrix[i][i];
    somDiagonaleSec += matrix[i][colonne]
  }
}

function MinWindowSubstring(strArr) {
  const subs = substrings(strArr[0]);

  subs.sort((a, b) => a.length - b.length);

  for (let i = 0; i < subs.length; i++) {
    if (containsAllCharacters(subs[i], strArr[1])) {
      return subs[i];
    }
  }
}

function substrings(string) {
  const subs = [];

  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length; j++) {
      subs.push(string.slice(i, j + 1));
    }
  }

  return subs;
}

function containsAllCharacters(string, other) {
  const array = Array.from(string);

  for (let i = 0; i < other.length; i++) {
    const index = array.indexOf(other[i]);
    if (index !== -1) {
      array.splice(index, 1);
    } else {
      return false;
    }
  }

  return true;
}

function palindrome(){
  let n="maxam";
console.log(n===n.split("").reverse().join("")?"palindrome":"palindrome");
}
//input :23 output :32

function inverse(nbr){
  if( nbr<=99){ 
    return 10*(nbr%10) + Math.trunc(nbr/10)
  }
}
