const {readFileSync} = require('fs');

function fileReader(filename) {
	const content = readFileSync(filename, 'utf-8');
	const arr = content.split(/\n/);
	return arr;
}

const input = fileReader('task8.txt');

// const input = ['30373', '25512', '65332', '33549', '35390'];

// 22232
// 11020
// 13024
// 04420
// 34124

function task8(input) {
	let unvisible = 0;
	for (let i = 1; i < input.length-1; i++) {
		for (let j = 1; j < input[i].length-1; j++) {
			let treesBiggerUp = 0;
			let treesBiggerDown = 0;
			let treesBiggerLeft = 0;
			let treesBiggerRight = 0;
			for (let k = 0; k < i; k++) {
				treesBiggerUp+=input[i][j]<=input[k][j];
			}
			for (let k = i+1; k < input.length; k++) {
				treesBiggerDown+=input[i][j]<=input[k][j];
			}
			for (let k = 0; k < j; k++) {
				treesBiggerLeft+=input[i][j]<=input[i][k];
			}
			for (let k = j+1; k < input[i].length; k++) {
				treesBiggerRight+=input[i][j]<=input[i][k];
			}
			if (treesBiggerUp && treesBiggerDown && treesBiggerLeft && treesBiggerRight) {
				unvisible++;

			}
		}
	}
	return unvisible;
}

console.log(input.length*input[0].length-task8(input));
