import fs from 'fs';

const inputString = fs.readFileSync('data.txt', 'utf-8');
const mulRegex = /mul\((\d{1,3}),(\d{1,3})\)/g;

// // DAY 03 PART 01
const matches = [];
let mulMatch;
while ((mulMatch = mulRegex.exec(inputString)) !== null) {
  matches.push([parseInt(mulMatch[1], 10), parseInt(mulMatch[2], 10)]);
}

const results = matches.map(([x, y]) => x * y);
const totalMulSum = results.reduce((sum, value) => sum + value, 0);

console.log(totalMulSum); // 174561379

// DAY 03 PART 02
const combinedRegex = /(do\(\)|don't\(\)|mul\((\d{1,3}),(\d{1,3})\))/g;

let isEnabled = true;
let totalSum = 0;
let match;

while ((match = combinedRegex.exec(inputString)) !== null) {
  const [instruction, x, y] = match;

  if (instruction === 'do()') {
    isEnabled = true;
  } else if (instruction === "don't()") {
    isEnabled = false;
  } else if (x !== undefined && y !== undefined) {
    if (isEnabled) {
      totalSum += parseInt(x, 10) * parseInt(y, 10);
    }
  }
}

console.log(totalSum); //  106921067
