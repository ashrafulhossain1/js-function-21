/*
* Object: write a function to  give me the sum of numbers in a array
1.declare a function
2. call check whether the function is called properly
3. set a parameter
4.pass the parameter(s) check weather parameter is passed in a proper format
5. do the function task
// */

function sumOfNumber(numbers) {
    // console.log(numbers) insure (2)
    let sum = 0;
    for (const number of numbers) {
        console.log(number);
        sum += number;
        console.log('Sum Is:', sum);

    }
    return sum;
}

const numbs = [20, 30, 40, 50, 60, 70, 80, 90]
const sum = sumOfNumber(numbs);
console.log('sum of numbers:', sum)


// same for loop


// function sumOfNumber(numbers) {
//     let sum = 0; // শুরুতে sum কে ০ দিয়ে ইনিশিয়ালাইজ করা হলো।
    
//     // numbers অ্যারের প্রতিটি উপাদান (index) এর উপর লুপ চালানো হলো
//     for (let i = 0; i < numbers.length; i++) {
//         console.log(numbers[i]); // প্রতিটি সংখ্যা কনসোলে প্রদর্শন করা হলো
//         sum += numbers[i]; // প্রতিটি সংখ্যাকে sum এর সাথে যোগ করা হলো
//         console.log('Sum Is:', sum); // বর্তমান যোগফল কনসোলে প্রদর্শন করা হলো
//     }
    
//     return sum; // পুরো যোগফল রিটার্ন করা হলো
// }

// const numbs = [20, 30, 40, 50, 60, 70, 80, 90];
// const sum = sumOfNumber(numbs);
// console.log('Sum of numbers:', sum);
