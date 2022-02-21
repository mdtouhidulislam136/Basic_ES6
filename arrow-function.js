// function declaration;
function add(num1, num2){
   
    return  num1 + num2;


}

// function expression (anonymous)

const add3 = function(num1, num2){
    return num1 + num2;
}
// arrow function

const add4 = (num1, num2) => num1 + num2;

const sum3 = add3(24, 56);
const sum4 = add4(1, 1);


const sum = add(15, 17);
console.log(sum, sum3, sum4);
