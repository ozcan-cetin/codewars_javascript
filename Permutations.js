// 4 kyu
// Permutations
// In this kata you have to create all permutations of a non empty input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

// Examples:
// * With input 'a'
// * Your function should return: ['a']
// * With input 'ab'
// * Your function should return ['ab', 'ba']
// * With input 'aabb'
// * Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

// The order of the permutations doesn't matter.

function permutations(string) {
  let result = []
  function sFact(num){
    let first=1;
    for (let i = 2; i <= num; i++)
        first = first * i;
    return first;
}
  
  for (let i = 0; i < sFact(string.length); i++){
      let test = string.split("").sort(() => (Math.random() > .5) ? 1 : -1)
      if (result.hasOwnProperty(test.join(""))){
        continue
      }else{
        result.push(test.join(""))
      }
  }
return result.sort()
}

console.log(permutations("ab"));
