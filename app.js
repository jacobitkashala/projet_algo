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

function palindrome() {
  let n = "maxam";
  console.log(n === n.split("").reverse().join("") ? "palindrome" : "palindrome");
}
//input :23 output :32

function inverse(nbr) {
  if (nbr <= 99) {
    return 10 * (nbr % 10) + Math.trunc(nbr / 10)
  }
}

// input:E5-S1-G4-R3-E2 => out:SERGE
function Name(str) {
  let strSplit = str.split("-").join("");

  let tab = [];
  for (let i = 0; i < strSplit.length; i++) {
    if (+strSplit[i]) {
      const index = parseInt(strSplit[i])
      tab[index] = strSplit[i - 1]
    }
  }
  return tab.join("")
}

function convertirBinaire(nbre) {
  let result = "";
  let quotient = nbre;
  let reste = 0;
  while (quotient !== 0) {
    reste = Math.trunc(quotient % 2);
    quotient = Math.trunc(quotient / 2);
    result += reste;
  }
  console.log(result.split("").reverse().join(""));
}
// input 2 ouput :4=> 1+1+2
function getNthFibo(nbr) {
  let fibo = 1, nbrPre = 0, nbrCurr = 1;

  if (nbr <= 1) return fibo;
  for (let i = 1; i <= nbr; i++) {
    fibo = nbrPre + nbrCurr;
    nbrPre = nbrCurr;
    nbrCurr = fibo;
  }
  return fibo;
}
function swap(tab, i, j) {
  let aide = tab[i];
  tab[i] = tab[j];
  tab[j] = aide;

}
function selectionSort(items) {
  var len = items.length,
    min;
  for (var i = 0; i < len; i++) {
    // set minimum to this position
    min = i;
    //check the rest of the array to see if anything is smaller
    for (j = i + 1; j < len; j++) {
      if (items[j] < items[min]) {
        min = j;
      }
    }
    //if the minimum isn't in the position, swap it
    if (i != min) {
      swap(items, i, min);
    }
  }
  return items;
}
// let tab = [10, 2, 1, 12, 3, 4, 2, 3, 44]
// console.log(selectionSort(tab));
function mathChanllenge(num) {
  let count = Math.trunc(num / 11);
  let rest = num % 11;
  if (num < 1 || num > 255) return -1;
  if (num < 5) return num;
  if (rest === 0) {
    return count;
  } else if (rest % 2===1) {
    return count + 1;
  } else {
    return count + 2;
  }
}
