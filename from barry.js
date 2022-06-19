// From Barry a Question
// This is an interview question asked by Stripe.

// Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

// You can modify the input array in-place.

// let arr = [3, 2, 1];

function kayıp(arr){
let result;
let test = arr.sort((a,b)=>b-a)[0];
for(let i = 1; i<=test; i++){
    if(!arr.includes(i)){
        return result = i
    }else{result = i + 1}
}
return result
}
console.log(kayıp([3, 4, -1, 1]));
