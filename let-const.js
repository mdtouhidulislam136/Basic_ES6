
// we can't redeclare or reassign const variable
// 

const numbers = [20, 30, 40, 50, 60];
//numbers = [99,145, 4] // not allowed
// change numbers 
numbers[1] = 333;

//object
const student = {
    roll: 110, name: "muri", job: "intern",
}

for (let i = 0; i< numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}