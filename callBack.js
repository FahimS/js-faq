function explainCallBack(name, age, task){
    console.log('Hello', name);
    console.log('Your age is', age);
    task();
}

function washHand(){
    console.log('Wash your hand with soap');
}
function takeBath(){
    console.log('Take Bath');
}
explainCallBack('Fahim', 25, washHand);
console.log(" ");
explainCallBack('Shahriar', 27, takeBath);