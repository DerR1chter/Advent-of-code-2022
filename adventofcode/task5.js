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
arrInput = arrInput.map(entry => entry.filter(e => e !== '   '));



let commands = fileReader('task5.txt').slice(10);
commands = commands.map(str => str.replaceAll( /\D+/g, ' '));
commands = commands.map(str => str.replaceAll( /^\ /g, ''));
commands = commands.map(str => str.split(' '));


function mover(arrInput, commands) {
	for (let i = 0; i<commands.length; i++) {
		for (let j = 0; j < commands[i][0]; j++) {
			arrInput[commands[i][2]-1].push(arrInput[commands[i][1]-1].pop());
			
		}
	}
	return arrInput;
}

const replacedArr = mover(arrInput, commands);

function finalFunc(arr) {
	console.log(arr);
	let answer = '';
	for (let i = 0; i < arr.length; i++) {
		answer+=replacedArr[i].slice(-1);
	}
	return answer;
}


console.log(finalFunc(replacedArr).replaceAll('[', '').replaceAll(']', ''));
