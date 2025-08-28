// Removed unused 'fs' import
import fs from 'node:fs';

// fs.readFileSync();

let userName: string;
const a = 1;
const b = 2;
let c: number;
userName = 'Max';

console.log(userName);

function add(a: any, b: any) {
  return a + b;
}

c = add(a, b);

console.log(c);
