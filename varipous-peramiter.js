/* 
for a given string tell me whether is has even number of character or not
 */

function evenSizedString(srt) {
    const size = srt.length;
    console.log(srt+ '|'+ 'size: '+ size);
    if (size % 2 === 0) {
        console.log('even length');
        return true
    }
    else {
        console.log('odd length')
        return false
    }
}
// evenSizedString('dhaka')
// console.log('----------------')
// evenSizedString('Faka')

// const string = 'independent in 2024';
// const stringSize = evenSizedString(string)
// console.log(stringSize);


function doubleOrTriple(number, doDouble) {
    if (doDouble === true) {
        const result = number * 2;
        return result;
    }
    else {
        const result = number * 3;
        return result
    }
}
// console.log(doubleOrTriple(5, true))
// console.log(doubleOrTriple(5, false))


// function numberOfElements(numbers) {
//     const length = numbers.length;
//     return length;
// }
// console.log(numberOfElements([12,45,78,121254,4,5]))

function getAge(person) {
    const age = person.age;
    return age
}

// // ---------------------------------------------
// // object value access from function

// function objectAccess(parts) {
//     let specification = 'my laptop name: ' + parts.name + ' used experience:' + parts.age + ' years';
//     return specification;
// }

// let pcQuality = objectAccess({ name: "HP", age: 2 });
// console.log(pcQuality);