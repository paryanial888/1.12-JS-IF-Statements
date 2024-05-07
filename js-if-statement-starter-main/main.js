// Alexander Paryani
// 5/7/2024
// JS IF Statements

// Demo #1
const firstName = 'Alexander';
console.log(`${firstName}!`)
if (firstName.length > 7) {
    console.log('Wow, you have a REALLY long name!')
}

// Demo #2
const fName = 'Alex';
console.log(`Hello, ${fName}!`)
if (fName.length > 7) {
    console.log('Dude, you have a REALLY long name!')
} else {
    console.log(`Your name isn't very long, ${fName}, is it? `)
}

// Demo #3
const age = parseInt(prompt('Enter your age: (Example: 16\n)'))

if (age < 3){
    const message = "You're still just a baby!";
    console.log(message);
} else if (age < 18) {
    const message = "You're not yet an adult.";
    console.log(message);
} else if (age < 100) {
    const message = "Almost at the century mark!";
    console.log(message);
} else {
    const message = "What an unusual age!";
    console.log(message);
}
