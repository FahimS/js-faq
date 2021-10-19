var name = 'fahim';
function add(num1, num2){
    var result =num1+num2;
    // window.result =num1+num2;
    console.log('result inside', result);
    return result;
}
// console.log('result outside', result);
var sum =add(13,12);
console.log(sum);