function CamelCase(str) {
  let asc = 0;
  let result = "";
  str = str.toLocaleLowerCase();
  for (let i = 0; i < str.length; i++) {
    asc = str.codePointAt(i);
    if (asc >= 97 && asc <= 122) {
      result += String.fromCharCode(asc);
    }
    else {
      let ascUpperCase = str.codePointAt(i+1)
      result += (String.fromCharCode(ascUpperCase)).toLocaleUpperCase();
    }
  }
  return result;
}
let resultat = CamelCase("abc def%g");

console.log(resultat)
