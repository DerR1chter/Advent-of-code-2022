const {readFileSync} = require('fs');

function fileReader(filename) {
	const content = readFileSync(filename, 'utf-8');
	const arr = content.split(/\n/);
	return arr;
}

class Folder {
	constructor(name, parent) {
		this.name = name;
		this.children = [];
		this.files = []; 
		this.parent = parent == undefined ? this : parent;
	}
	getFilesSize() {
		return this.files.reduce((prevVal, curVal) => prevVal + parseInt(curVal.size), 0);
	}
	getFolderSize() {
		let res = 0;
		for (let child of this.children) {
				res += child.getFolderSize();
		}
		res += this.getFilesSize();
		return res;
	}
	// 2nd variant getFolderSize() {
	// 	return this.children.map(child => child.getFolderSize()).reduce((prevVal, curVal) => prevVal + curVal, 0) + this.getFilesSize();
	// }
}

class File {
	constructor(name, size) {
		this.name = name;
		this.size = size;
	}
	
}
const root = new Folder('/');
let cur = root;


const inputArr = fileReader('task7.txt');


for (input of inputArr) {
	if (input[0] === "$") {
		const commandInp = input.split(' ');
		switch (commandInp[1]) {
			case "cd":
				if (commandInp[2] === '/') {
					cur = root;
				} else if (commandInp[2] === '..') {
					cur = cur.parent;
				} else {
					cur = cur.children.find(e => e.name === commandInp[2]);
				}
				break;
			case "ls":

				break;
		}
	} else if (input.slice(0,3) === "dir") {
		cur.children.push(new Folder(input.slice(4), cur));
	} else {
		const file = input.split(' ');
		cur.files.push(new File(file[1], file[0]));
	}
}

let task1Arr = [];
function task1(current) {
	if (current.getFolderSize() <= 100000) {
		task1Arr.push(current);
	}
	for (child of current.children) {
		task1(child);
	}
}
task1(root);
console.log(task1Arr.reduce((prevVal, curVal) => prevVal+curVal.getFolderSize(),0));

let task2Arr = [];
function task2(current) {
	if (current.getFolderSize() >= 30000000 - (70000000 - root.getFolderSize())) {
		task2Arr.push(current);
	}
	for (child of current.children) {
		task2(child);
	}
}
task2(root);
console.log(task2Arr.reduce((prevVal, curVal) => prevVal.getFolderSize() <= curVal.getFolderSize() ? prevVal : curVal).getFolderSize());