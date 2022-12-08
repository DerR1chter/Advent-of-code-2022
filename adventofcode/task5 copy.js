// [D]    
// [N] [C]    
// [Z] [M] [P]
//  1   2   3 

// move 1 from 2 to 1
// move 3 from 1 to 3
// move 2 from 2 to 1
// move 1 from 1 to 2

const {readFileSync} = require('fs');

function fileReader(filename) {
	const content = readFileSync(filename, 'utf-8');
	const arr = content.split(/\n/);
	return arr;
}

let arrInput = fileReader('task5.txt').slice(0,8);

function rearrange(str) {
	let newStr = new Array();
	for (let i=0; i<str.length; i+=4) {
		newStr.push(str.slice(i, i+3));
	}
	return newStr;
}
arrInput = arrInput.map(e => rearrange(e));
function inputCreator(arr) {
	const newArr = new Array();
	for (let j=0; j <= arr.length; j++) {
		let newSubArr = new Array();
		for (let i = 7; i >= 0; i--) {
			newSubArr.push(arr[i][j]);
		}
		newArr.push(newSubArr);
	}
	return newArr;
}

arrInput = inputCreator(arrInput);




let commands = fileReader('task5.txt').slice(10);
commands = commands.map(str => str.replaceAll( /\D+/g, ' '));
commands = commands.map(str => str.replaceAll( /^\ /g, ''));
commands = commands.map(str => str.split(' '));

const arr1 = ['Z', 'N'];
const arr2 = ['M', 'C', 'D'];
const arr3 = ['P'];

function mover(arrInput, commands) {
	for (let i = 0; i<commands.length; i++) {
		//eval(`arr${command[2]}`).push(eval(`arr${command[1]}`).pop());
		for (let j = 0; j < commands[0]; j++)
		arrInput[commands[i][2]-1].push(commands[i][1].pop());
	}
	return arrInput;
}

console.log(mover(arrInput, commands));
// console.log(arr1.slice(-1)+arr2.slice(-1)+arr3.slice(-1));

console.log(arrInput);