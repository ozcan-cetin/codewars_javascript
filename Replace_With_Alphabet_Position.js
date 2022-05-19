// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
let liste = ["abcdefghijklmnopqrstuvwxyz"];
let list = liste.join().split("");
let alphabet = [];
for (let i = 0; i < list.length; i++) {
  alphabet[list[i]] = String(i + 1);
}
console.log(alphabet["a"]);
console.log(alphabet);

function alphabetPosition(text) {
  let liste = ["abcdefghijklmnopqrstuvwxyz"];
  let list = liste.join().split("");
  let alphabet = [];
  for (let i = 0; i < list.length; i++) {
    alphabet[list[i]] = String(i + 1);
  }
  let newtext = text.toLowerCase()
  let result = [];
    for (let i = 0; i < newtext.split("").length; i++) {
    if (newtext[i] in alphabet) {
      result.push(alphabet[newtext[i]]);
    } else {
      result.push("?");
    }
  }
  return result.join(" ");
}
let z = "ELMA"
console.log(z.toLowerCase());
console.log(z.replace("E","e"));
console.log(alphabet["A"]);
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition("a''a"));
let a = ["a", "b"];
console.log(a[0]);
console.log("'" in alphabet);
// console.log(a.includes("a"));
// console.log(a.toLowerCase());
// let b = ["a", "g"];
// let c = b.filter((x) => a.includes(x));
// console.log(c);
