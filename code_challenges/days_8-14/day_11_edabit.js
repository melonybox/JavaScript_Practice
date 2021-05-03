function isSeven(x) {
	return x===7?true:false;
}

function yearsInOneHouse(age, moves) {
	if (moves === 0) return age
	return Math.round(age / (moves + 1))
}

function calculateFuel(n) {
	if ((n * 10) < 100) return 100
	return n * 10
}

function addBinary(a, b) {
	return (a + b >>> 0).toString(2)
}

function journeyDistance(num) {
	if ( num === 0) return 0
	if (num <= 3) return 1
	return (num-3)/2+1
}

function decimalPart(n) {
	const newNum = Math.abs(n)
	return newNum - Math.floor(newNum)
}

function reversePsychology(s) {
	// DO NOT WRITE YOUR CODE HERE
	if (s === undefined) return "Do not do anything."
	return "Do not " + s + "."
}

function evenOrOdd(arr) {
	if (arr.length === 0) return "even"
	const arrSum = arr.reduce((total,amount) => total + amount)
	return arrSum % 2 === 0 ? "even" : "odd"
}
