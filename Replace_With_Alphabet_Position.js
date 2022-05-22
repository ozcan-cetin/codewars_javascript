// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )


// function alphabetPosition(text) {
//   let liste = ["abcdefghijklmnopqrstuvwxyz"];
//   let list = liste.join().split("");
//   let alphabet = [];
// for (let i = 0; i < list.length; i++) {
//   alphabet[list[i]] = String(i + 1);
// }
//   let result ="";
//   newtext=text.toLowerCase().split("")
//   for (let i in newtext) {

//     if(list.includes(newtext[i])){
//         result += (alphabet[newtext[i]]) + " ";
//     };
//   }
//   return result.slice(0, result.length-1)
// }

//! Ben uzun bir yöntem kullanarak harfleri ve sayıları barındıran bir sözlük oluşturmuştum. Ancak çok daha güzel yöntemler olduğunu öğrendim.:))

console.log("A".charCodeAt());//65
console.log("Z".charCodeAt());//90
console.log("a".charCodeAt());//97
console.log("z".charCodeAt());//122

function alphabetPosition(text) {
  let newtext = text.toLowerCase().split("").filter(test=>test.charCodeAt()>96 && test.charCodeAt() < 123 ).map(change=>change.charCodeAt()-96).join(" ")
  return newtext
}

let text = "Ali123"
let newtext = 
text.toLowerCase()//ali123
.split("")//[ 'a', 'l', 'i', '1', '2', '3' ]
.filter(test=>test.charCodeAt()>96 && test.charCodeAt() < 127 )//[ 'a', 'l', 'i' ]
.map(change=>change.charCodeAt()-96)//[ 1, 12, 9 ]
.join(" ")//1 12 9