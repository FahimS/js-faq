function addNumbers(num1, num2) { //num1, num2 use na korleo kono problem nai
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num;
    }
    return sum;
}
var result = addNumbers(5, 4, 9, 7);
console.log(result);