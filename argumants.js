
function doubleIt(number){
    const doubled = number *2;
    console.log(number, doubled)
}

// function call from hardcoded value
console.log('i will call the dunction');
doubleIt(15);
console.log('------------------')
doubleIt(85);
console.log('------------------')
doubleIt(500);

// function call form NV
//number is a 
const number= 55; 
doubleIt(number);
const money = 100;
doubleIt(money);


function difference(num1, num2){
    const differenceOf = num1 - num2;
    console.log('first person:', num1, 'second person:', num2, 'Difference is:', differenceOf)
} 
 const fatherAge= 60;
 const myAge = 24;
 difference(fatherAge, myAge);
