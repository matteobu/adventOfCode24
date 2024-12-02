import fs from 'fs';

// DAY 01 part 01
const col1 = [];
const col2 = [];
const diffCol = [];

function getFileLines(fileName) {
  const columns = fs.readFileSync(fileName, 'utf-8');
  return columns.split('\n');
}
getFileLines('data.txt').forEach((item) => {
  const [first, second] = item.split('   ');
  col1.push(+first);
  col2.push(+second);
});

const ascendCol1 = col1.sort();
const ascendCol2 = col2.sort();
for (let i = 0; i < col1.length; i++) {
  diffCol.push(Math.abs(ascendCol1[i] - ascendCol2[i]));
}
const totalSum = diffCol.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(totalSum); // 1579939

// DAY 01 part 02
const multiCol = [];

for (let i = 0; i < ascendCol1.length; i++) {
  ascendCol2.forEach((aC2) => {
    if (aC2 === ascendCol1[i]) {
      multiCol.push(ascendCol1[i]);
    }
  });
}

const countMap = multiCol.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1; // Increment count for each number
  return acc;
}, {});

const totalMultiSum = Object.entries(countMap).reduce((sum, [num, count]) => {
  return sum + num * count;
}, 0);

console.log(totalMultiSum); // 20351745
