// The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

// The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.

// Other Examples:
// ls = [1, 2, 3, 4, 5, 6] 
// parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0]

// ls = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
// parts_sums(ls) -> [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]

// Notes
// Take a look at performance: some lists have thousands of elements.
// Please ask before translating.



let liste = [1,2,3,4]
function partsSums(ls) {
    let result =[0]
    for( let i in liste){
        result.push(ls[i]+result[i])
    }
    return result.reverse()
}
console.log(partsSums(liste));//[ 10, 6, 3, 1, 0 ]


