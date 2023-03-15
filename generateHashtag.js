// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag (str) {
    let result="#";
    let text = str;
    if(text.length === 0){
        result = false
    }else{
        text = text.split(" ").map((item)=>item.length > 0  && item[0].toUpperCase()+item.slice(1)).join("").split(false).join("")
        console.log(text)
        result = result + text;
       if(result.length > 140 || text.length===0){result = false}
    }
    return result
}