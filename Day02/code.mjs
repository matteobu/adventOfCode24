import fs from 'fs';

function getFileLines(fileName) {
  const columns = fs.readFileSync(fileName, 'utf-8');
  return columns.split('\n');
}

const rows = getFileLines('data.txt');
const levelsNumberArr = rows.map((r) => r.split(' ').map(Number));

const invalidArrays = [];

function isValidArray(arr) {
  let isIncreasing = null;
  for (let i = 1; i < arr.length; i++) {
    const diff = arr[i] - arr[i - 1];

    if (diff === 0 || Math.abs(diff) > 3) {
      invalidArrays.push(arr);
      return false;
    }
    if (isIncreasing === null) {
      isIncreasing = diff > 0;
    } else if (isIncreasing && diff < 0) {
      invalidArrays.push(arr);
      return false;
    } else if (!isIncreasing && diff > 0) {
      invalidArrays.push(arr);
      return false;
    }
  }
  return true;
}

const validCount = levelsNumberArr.filter(isValidArray).length;

console.log(validCount); // 510

const numberOfInvalidValidArrays = [];

invalidArrays.forEach((array, i) => {
  let shouldContinue = false;
  for (let j = 0; j < array.length; j++) {
    let arrToTest = [
      ...invalidArrays[i].slice(0, j),
      ...invalidArrays[i].slice(j + 1),
    ];

    if (isValidArray(arrToTest)) {
      shouldContinue = true;
      numberOfInvalidValidArrays.push(true);
      break;
    }
  }
  if (shouldContinue) {
    return;
  }
});

console.log(validCount + numberOfInvalidValidArrays.length); // 553
