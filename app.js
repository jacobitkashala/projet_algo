/*
input:  data, serge%data
*/
function CamelCase(str) {
  let asc = 0;
  let result = "";
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    asc = str.codePointAt(i);
    if (asc >= 97 && asc <= 122) result += String.fromCharCode(asc);
    else {
      let ascCase = str.codePointAt(i + 1);
      result += (String.fromCharCode(ascCase)).toUpperCase();
    }
  }
  return result;
}
//console.log("a".codePointAt(0))
/*
  aabbnn
 a:2
 b2
 n:2  
 */

function SommeDiag(matrix) {
  let somDiagonaleP = 0, somDiagonaleSec = 0;
  for (let i = 0; i < matrix.length; i++) {
    let colonne = matrix.length - i - 1;
    somDiagonaleP += matrix[i][i];
    somDiagonaleSec += matrix[i][colonne]
  }
}

// function MinWindowSubstring(strArr) {
//   const subs = substrings(strArr[0]);

//   subs.sort((a, b) => a.length - b.length);

//   for (let i = 0; i < subs.length; i++) {
//     if (containsAllCharacters(subs[i], strArr[1])) {
//       return subs[i];
//     }
//   }
// }

// function substrings(string) {
//   const subs = [];

//   for (let i = 0; i < string.length; i++) {
//     for (let j = i; j < string.length; j++) {
//       subs.push(string.slice(i, j + 1));
//     }
//   }
//   return subs;
// }

// function containsAllCharacters(string, other) {
//   const array = Array.from(string);
//   for (let i = 0; i < other.length; i++) {
//     const index = array.indexOf(other[i]);
//     if (index !== -1) {
//       array.splice(index, 1);
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

function palindrome() {
  let n = "maxam";
  console.log(n === n.split("").reverse().join("") ? "palindrome" : " non palindrome");
}

function comptWord(str) {
  let cpt=1;
  for(const char of str){
    if(char ===" "){
      cpt++
    }
  }
  return cpt;
}

//console.log(comptWord("papa est à la maison"))
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
      const index = +(strSplit[i])
      tab[index] = strSplit[i - 1]
    }
  }
  return tab.join("")
}

// console.log(Name("E5-S1-G4-R3-E2"))

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

function suiteFibo(nbr) {
  let fibo = 1, nbrPre = 0, nbrCurr = 1;

  if (nbr <= 1) return fibo;
  for (let i = 1; i <= nbr; i++) {
    fibo = nbrPre + nbrCurr;
    nbrPre = nbrCurr;
    nbrCurr = fibo;
  }
  return fibo;
}

/**
 * 
 */



function Majorant() { 
  var a = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4].
  reduce(function (acc, curr) {
     if (typeof acc[curr] == 'undefined') {
        acc[curr] = 1;
      }else {
         acc[curr] += 1;
         } return acc; },{});
  
  console.log(a) 
  for(const value in a){
    console.log(value)
  } 
}

function numberFrequence (tab){
	strTab = tab.join("");
	let newTab = [];
	for(let i = 0; i < strTab.length; i++){
			let regExp = new RegExp(tab[i],"g");
			newTab[i] = strTab.match(regExp).length
	}
	const maxFrequence = Math.max(...newTab);
	const index = newTab.indexOf(maxFrequence);
	const number = tab[index]
	if(maxFrequence > tab.length/2)	return number ;
	return -1
}

function RunLength(string) { 
  let array = string.split("").sort();
  let counter = 0 ;
  let runLength = new String("");
  for(let i=0; i<=array.length; i++){
      if(array[i] !== array[i+1]) {
          runLength += counter + 1 + array[i];
          counter = 0;
      }
      else counter++;
  }
  return runLength;
}
// console.log(RunLength("aaddda"))

/*
*/

function swap(tab, i, j) {
  let aide = tab[i];
  tab[i] = tab[j];
  tab[j] = aide;

}
function selectionSort(items) {
  var len = items.length,
    min;
  for (var i = 0; i < len; i++) {
    min = i;
    for (j = i + 1; j < len; j++) {
      if (items[j] < items[min]) {
        min = j;
      }
    }
    if (i != min) {
      swap(items, i, min);
    }
  }
  return items;
}
// // let tab = [10, 2, 1, 12, 3, 4, 2, 3, 44]
// // console.log(selectionSort(tab));

function mathChanllenge(num) {
  let count = Math.trunc(num / 11);
  let rest = num % 11;
  if (num < 1 || num > 255) return -1;
  if (num < 5) return num;
  if (rest === 0) {
    return count;
  } else if (rest % 2 === 1) {
    return count + 1;
  } else {
    return count + (num-11);
  }
}

function binarySearch(array, n) {
  var interval = 0, length = array.length;
  while (interval <= length) {
    let midIndex = Math.trunc((length + interval) / 2);
    if (array[midIndex] === n) return array[midIndex]
    else if (array[midIndex] < n) {
      interval = midIndex
    } else {
      length = midIndex;
    }
  }
  return -1;
}

function sommeTo(array,value) {
  let tmp=0
  for(let i=0;i<=array.length;i++){
      tmp=array[i] + array[i+1]
      if(tmp===value){
          return tmp;
          break;
      }
  }
  return -1;
}
let result= sommeTo([1,2,6,8],0);
console.log(result)