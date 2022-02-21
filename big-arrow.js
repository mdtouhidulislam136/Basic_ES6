const add = (num1, num2) => num1 + num2;

const sum = add(13, 15);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(20, 20, 20);


const fiveTimes = num => num * 5;
const value = fiveTimes(2);
console.log(sum, result, value);

const getName = () => 'Brandon sam';
const name = getName();

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x-y;
    const result = sum * diff;
    const output = result * 5;
    return output;

}

const total = doMath(12, 5);
console.log(total);