const {promises: fsPromises} = require('fs');


async function asyncReadFile(filename) {
	try {
	  const contents = await fsPromises.readFile(filename, 'utf-8');
	  const arr = contents.split(/\n/);
	  return arr;
	} catch (err) {
	  console.log(err);
	}
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

function findMax(arr) {
	let max = 0;
	// let maxInd = 0;
	for (let i = 0; i<arr.length; i++) {
		let sum = arr[i].reduce((a,b) => parseInt(a)+parseInt(b), 0);
		if (sum > max) {
			max = sum;
			// maxInd = i;
		}
	}
	return max;
}

asyncReadFile('./task1.txt').then((arr) => console.log(findMax(arraySplitter(arr))));