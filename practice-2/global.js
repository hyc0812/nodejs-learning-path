// Global object

// console.log(global);

// Output untill timeout
setTimeout(() => {
  console.log('in the timeout');
  clearInterval(intv);
}, 5000);

// output every second
const intv = setInterval(() => {
  console.log('in the interval');
}, 1000);

// Output absolute directory
console.log(__dirname);

// Output file name
console.log(__filename);
