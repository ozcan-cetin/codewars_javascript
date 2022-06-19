//! https://www.coderbyte.com/results/cetin445:First%20Factorial:JavaScript


function FirstFactorial(num) { 
    let result = 1;
    if(num == 0 || num == 1){
        result = 1;
    }
    else if(num > 1){
      for(let i = 1; i<=num; i++){
        result *= i
    }  
    }
    else{
        result = ""
    }
    return result; 
  }

  console.log(FirstFactorial());