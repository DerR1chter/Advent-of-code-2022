const {readFileSync} = require('fs');
const { runInNewContext } = require('vm');


function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');
  const arr = contents.split(/\n/);
  return arr;
}

function arraySplitter(arr) {
  let newArr = new Array();
  let i = 0, j = 0;
  for (; i<arr.length; i++) {
	if (!arr[i].length) {
		newArr.push(arr.slice(j, i));
		j = i+1;
	}
  }
  newArr.push(arr.slice(j, i));

  return newArr;
}

const splittedArr = arraySplitter(syncReadFile('./task1.txt'));

const testArr = [['1', '2'], ['4'], ['7', '5'], ['6', '2']];
function findMax(arr) {
	let max = 0;
	let maxInd = 0;
	for (let i = 0; i<arr.length; i++) {
		let sum = arr[i].reduce((a,b) => parseInt(a)+parseInt(b), 0);
		if (sum > max) {
			max = sum;
			maxInd = i;
		}
	}
	return new Set([max, maxInd]);
}


let answer = new Array();
for (let i = 0; i<3; i++) {
	const newSet = findMax(splittedArr);
	const max = [...newSet][0];
	const maxInd = [...newSet][1];
	answer.push(max);
	splittedArr[maxInd].pop();
}

console.log(answer.reduce((prev, next) => prev+next, 0));