const {readFileSync} = require('fs');

function readFile(filename) {
	const content = readFileSync(filename, 'utf-8');
	const arr = content.split(/\n/);
	return arr;
}

const arr = readFile('task4.txt');

// const testArr = [
// 	'2-4,6-8',
// 	'2-3,4-5',
// 	'5-7,7-9',
// 	'2-8,3-7',
// 	'6-6,4-6',
// 	'2-6,4-8'
// ];

function isInside(str) {
	const arr = str.split(',');
	const a = arr[0].split('-');
	const b = arr[1].split('-');

	const Amin = a[0];
	const Amax = a[1];

	const Bmin = b[0];
	const Bmax = b[1];

	return ((Amin-Bmin <= 0 && Amax-Bmax >= 0) || (Bmin-Amin <= 0 && Bmax - Amax >= 0));

}

console.log(arr.reduce((prev, next) => prev+ isInside(next), 0));
