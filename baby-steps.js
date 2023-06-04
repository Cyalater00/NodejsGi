// Write a program that accepts one or more numbers as command-line arguments
let result = 0;
for (let i = 2; i < process.argv.length; i++) {
  result += Number(process.argv[i]);
}
console.log(result);
// console.log(process.argv);
