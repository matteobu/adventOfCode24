import fs from 'fs';

const data = fs.readFileSync('data.txt', 'utf-8');
const regex = /mul\((\d{1,3}),(\d{1,3})\)/g;

const matches = [];
let match;
while ((match = regex.exec(data)) !== null) {
  matches.push([parseInt(match[1], 10), parseInt(match[2], 10)]);
}

const results = matches.map(([x, y]) => x * y);
const totalSum = results.reduce((sum, value) => sum + value, 0);

console.log(totalSum); // 161
