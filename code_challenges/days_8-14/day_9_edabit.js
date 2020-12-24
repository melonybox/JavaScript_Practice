function returnNegative(n) {
	if (0 < n) return n * -1
	return n
}
//return -Math.abs(n)

function binaryToDecimal(arr) {
	return Number.parseInt(arr.join(''), 2)
}

function nthEven(n) {
	return (n-1) * 2
}

function createID(firstname, lastname) {
	return firstname[0].toLowerCase()+lastname[0].toUpperCase()+lastname.slice(1,3).toLowerCase()
}

function add(char, str) {
	return str.replace(/\s/g, char)
}
// \s = Matches a single white space character, including space, tab, form feed, line feed.

function firstOne(a, b = 0, c = 0, d = 0) {
	if (a || b || c || d) return a || b || c || d
	return "not found"
}

class Player {
	constructor(name, age, height, weight) {
		this.name = name
		this.age = age
		this.height = height
		this.weight = weight
	}

	getAge() {
		return `${this.name} is age ${this.age}`
	}

	getHeight() {
		return `${this.name} is ${this.height}cm`
	}

	getWeight() {
		return `${this.name} weighs ${this.weight}kg`
	}
}

function colorInvert(rgb) {
	return rgb.map(x => 255-x)
}

function height(side) {
	return `${((side * Math.sqrt(3) / 2)*10).toFixed(1)} mm`
}

function nothingIsNothing() {
	return [...arguments].every(x => !!x !== false)
}
