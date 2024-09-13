

//  give me return even numbers and sum use functuin

function evenNumberOnly(numbers) {
    // console.log(numbers); [ignore]
    let evens = [];
    for (const number of numbers) {
        if (number % 2 === 0) {
            console.log(number)
            evens.push(number)
            // console.log('total:',evens)
        }
       
    }
    return evens;
   
}

// const numbersSet = [5, 20, 30, 50, 710, 500];
// const setOfEvens = evenNumberOnly(numbersSet);
// console.log('evens arrat are:' , setOfEvens)




// even number sum
function sumOfEvenNumber(numbers) {
    let sum = 0;
    for (const number of numbers) {
        if (number % 2 === 0){
            console.log(number)
            sum +=number
        }
    }
return sum
}

// const sum = sumOfEvenNumber(numbersSet)
// console.log('sum of this:', sum)
