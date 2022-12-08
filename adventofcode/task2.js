// A Y
// B X
// C Z

// X - 1 Rock
// Y - 2 Paper
// Z - 3 Scissors

const {readFileSync} = require('fs');


function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');
  const arr = contents.split(/\n/);
  return arr;
}

function arraySplitter(arr) {
  let newArr = new Array();
  let i = 0, j = 1;
  for (; i<arr.length; i++, j++) {
	newArr.push(arr.slice(i, j));
  }
  return newArr;
}

let splittedArr = arraySplitter(syncReadFile('./task2.txt'));
splittedArr = splittedArr.map(entry => entry[0].split(' '));

//const newArr = [['A', 'Y'], ['B', 'X'], ['C','Z']];

function RockPaperScissors(arr) {
	let points = 0;
	for (let i = 0; i<arr.length; i++) {
		let p1 = arr[i][0];
		let p2 = arr[i][1];
		
		switch (p1) {
			case 'A': 
				if (p2 == 'X') {
					points += 1 + 3
				} else if (p2 == 'Y') {
					points += 2 + 6
				} else if (p2 == 'Z') {
					points += 3 + 0
				}
				break;
			case 'B':
				if (p2 == 'X') {
					points += 1 + 0
				} else if (p2 == 'Y') {
					points += 2 + 3
				} else if (p2 == 'Z') {
					points += 3 + 6
				}
				break;
			case 'C':
				if (p2 == 'X') {
					points += 1 + 6
				} else if (p2 == 'Y') {
					points += 2 + 0
				} else if (p2 == 'Z') {
					points += 3 + 3
				}
				break;
		}
	}
	return points;
}

console.log(RockPaperScissors(splittedArr));