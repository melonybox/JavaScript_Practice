function format(a, b, c) {
	const template = `Their names were: ${a}, ${b} and ${c}.`
	return template
}

function equilibrium (x) {
	if (x > 0) return "positive"
	if (x < 0) return "negative"
	return true
}

function oddOrEven(s) {
	return s.length % 2 === 0
}

function sumArray(arr) {
	let sum = 0
  for (let i=0; i<arr.length; i++) {
	  sum+=arr[i]
	}
  return sum
}

function area(h, w) {
	if (h < 0 || w < 0 || h === 0 || w === 0) return -1
	return h*w
}
//return h <= 0 || w <= 0 ? -1 : h*w;

function makesTen(a, b) {
	return a+b === 10 || a === 10 || b === 10 ? true : false
}
//return [a, b, a + b].includes(10)
//return a + b === 10 ||a === 10 || b === 10

function greeting(name) {
	if(name === "Mubashir") {
    return "Hello, my Love!";
  }
  return "Hello, " + name + "!";
}

function inchesToFeet(inches) {
	if (inches < 12) return 0
	return ~~(inches/12)
}

function makePair(num1, num2) {
	return [num1, num2]
}

function fiftyThirtyTwenty(ati) {
	return {"Needs": ati*.5, "Wants": ati*.3, "Savings": ati*.2}
}

function operate(num1, num2, operator) {
	return eval(`${num1}${operator}${num2}`)
}

function mod(a, b) {
	return a%b
}

function intToString(num) {
	return `${num}`
}
function stringToInt(num) {
	return Number(num)
}

//const [intToString, stringToInt] = [String, Number];
//const intToString = n => ''+n;
//const stringToInt = n => +n;

function jayAndBob(str) {
	const weights = {
		"half": 14,
		"quarter": 7,
		"eighth": 3.5,
		"sixteenth": 1.75
	}
	return `${weights[str]} grams`
}

function drop(arr, val = 1) {
	return arr.slice(val, arr.length)
}
