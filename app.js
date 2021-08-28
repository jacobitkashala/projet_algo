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
