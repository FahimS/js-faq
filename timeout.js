function doSomething(){
    console.log(2222);
}
console.log(3333);
// setTimeout(doSomething, 5000);
setTimeout(function(){
    console.log('lazy and waiting');
}, 4000)
console.log(4444);


//........................................

setInterval(() => {
    console.log('doing it');
}, 1000);