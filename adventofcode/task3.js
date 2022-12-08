const {readFileSync} = require('fs');

function syncReadFile(filename) {
	const contents = readFileSync(filename, 'utf-8');
	const arr = contents.split(/\n/);
	return arr;
}

const arr = syncReadFile('./task3.txt');

//const test = ["vJrwpWtwJgWrhcsFMMfFFhFp", "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL", "PmmdzqPrVvPwwTWBwg", "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn", "ttgJtRGJQctTZtZT", "CrZsJsPPZsGzwwsLwLmpwMDw"];

function stringCounter(str){
	const part1 = str.slice(0, str.length/2);
	const part2 = str.slice(str.length/2, str.length);

	let newArr = new Array();
	for (let i=0; i<part1.length; i++) {
		for (let j=0; j<part2.length; j++) {
			if(part1[i] === part2[j]) {
				newArr.push(part1[i]);
				break;
			}
		}
		if (newArr.length) {
			break;
		}
	}
	return newArr;
}

function arrCounter(arr) {
	return arr.flatMap(entry => stringCounter(entry)); 
}

// console.log(arrCounter(test).reduce((prev, cur) => {
// 	const prevVal = prev.charCodeAt(0) - 96 < 0 ? prev.charCodeAt(0) - 38 : prev.charCodeAt(0) - 96 ;
// 	const curVal = cur.charCodeAt(0) - 96 < 0 ? cur.charCodeAt(0) - 38 : cur.charCodeAt(0) - 96 ;
// 	return prevVal + curVal;
// }));




const arrWithVals = arrCounter(arr).map(char => char.charCodeAt(0) - 96 < 0 ? char.charCodeAt(0) - 38 : char.charCodeAt(0) - 96);
console.log(arrWithVals.reduce((prev, cur) => prev+cur, 0));
