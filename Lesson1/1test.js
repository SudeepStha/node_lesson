//simple log
const name = 'Sudeep';
console.log(name);

//log with function
const greet = (name) => {
    console.log(`hello, ${name}`);
}
greet('mario');
greet('Sudeep');

//global object
console.log(global)

global.setTimeout(() => {
    console.log('this is test alert for global')
}, 3000);

//setTimeout
//it runs after 3 seconds or 3000 miliseconds
setTimeout(() => {
    console.log('this is timeout check.');
}, 3000);

//setInterval-> it runs every 1 second or 1000 milisecond
setInterval(() => {
    console.log('this is interval test.');
}, 1000);

//to clear the interval
setTimeout(() => {
   console.log('this is stoping interval') 
   clearInterval(int)
}, 5000);

const int = setInterval(() => {
    console.log('this is test interval')
}, 3000);

// to get path of current directory
console.log(__dirname)

// to get path of current file name
console.log(__filename)