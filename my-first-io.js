 
//   Write a program that uses a single synchronous filesystem operation to  
//   read a file and print the number of newlines (\n) it contains to the  
//   console (stdout), similar to running cat file | wc -l.  

const fs = require('fs');
const contents = fs.readFileSync(process.argv[2]);
const lines = contents.toString().split("\n").length -1;
console.log(lines);