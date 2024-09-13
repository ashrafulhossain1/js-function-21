

function add(price1, price2) {
    const total = price1 + price2;
    return total;
}
const bill = add(5, 50);
// console.log(bill)


function add2(price1, price2) {
    return price1 + price2;
}
const bill2 = add2(5, 5);


// output  see 2 function in one line
console.log(bill, bill2);

// do maths
function doMaths(num1, num2) {
    const sum = num1 + num2;
    const difference = num1 - num2;
    const multi = sum * difference;
    const result = multi / 2;
    return result;
}

const doMathsResult = doMaths(10,5);
console.log(doMathsResult);

// function isEven(number){
//     if(number %2 ===0){
//         return true;
//     }
//     else{
//         return fal
//     }
// }

