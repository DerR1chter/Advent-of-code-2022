const {readFileSync} = require('fs');

function fileReader(filename) {
	const content = readFileSync(filename, 'utf-8');
	return content;
}

const input = fileReader('task6.txt');
//const input = 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg';

function detecter(input) {
	for (let i = 0; i<input.length; i++) {
		let buf = new Array();
		for (let j = i; j<i+14; j++) {
			buf.push(input[j]);
		}
		
		let bufSet = new Set(buf);
		if(bufSet.size === 14) {
			return i+14;
		}
	}
}

console.log(detecter(input));