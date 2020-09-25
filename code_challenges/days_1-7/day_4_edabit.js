function halfQuarterEighth(n) {
	return [n/2, n/4, n/8]
}

function isOdd(num) {
	return num % 2 !== 0;
}

function carsNeeded(n) {
	if (n <= 0) {
		return 0
	}
	return Math.ceil(n/5)
}

function parity(n) {
	return n % 2 === 0 ? "even" : "odd"
}

// return n % 2 ? "even" : "odd"

function getFilename(path) {
	const arrSplit = path.split("/")
	return arrSplit[arrSplit.length - 1]
}

// return path.split('/').pop()

function halloween(dt) {
	return dt.getMonth()+1 === 10 && dt.getDate() === 31 ? "Bonfire toffee" : "toffee"
}

function filterArray(arr) {
	return arr.filter(x => Number.isInteger(x))
}

function cubeSquareRoot(num) {
	return Math.sqrt(num * num * num)
}

function posCom(num) {
	return Math.pow(2, num)
}

function findBob(names) {
	return names.findIndex(x => x === "Bob")
}

function modifyLast(str, n) {
	return str + str[str.length-1].repeat(n-1)
}

const REGEXP = /\w+/g

function totalAmountAdjectives(obj) {
	return Object.entries(obj).length
}

function endCorona(recovers, newCases, activeCases) {
	return Math.ceil(activeCases/(recovers - newCases))
}
