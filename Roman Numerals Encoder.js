// 6 kyu Roman Numerals Encoder
// Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:

// solution(1000); // should return 'M'
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
// Remember that there can't be more than 3 identical symbols in a row.

// More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals

function solution(number){
    let result="";
    while(number>=1000){
        result+="M"
        number=number-1000;
    }
    while(number>=900){
        result+="CM"
        number=number-900;
    }
    while(number>=500){
        result+="D"
        number=number-500;
    }
    while(number>=400){
        result+="CD"
        number=number-400;
    }
    while(number>=100){
        result+="C"
        number=number-100;
    }
    while(number>=90){
        result+="XC"
        number=number-90;
    }
    while(number>=50){
        result+="L"
        number=number-50;
    }
    while(number>=40){
        result+="XL"
        number=number-40;
    }
    while(number>=10){
        result+="X"
        number=number-10;
    }
    while(number==9){
        result+="IX"
        number=number-9;
    }
    while(number>=5){
        result+="V"
        number=number-5;
    }
    while(number==4){
        result+="IV"
        number=number-4;
    }
    while(number>=1){
        result+="I"
        number=number-1;
    }
    return result
}

