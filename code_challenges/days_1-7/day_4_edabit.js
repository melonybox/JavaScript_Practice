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

let promise = new Promise( (resolve) => {
	let animal = "cat"
  setTimeout(() => {
		if(animal === "dog") {
			resolve("It's a dog!")
		}
	  if(animal !== "dog") {
			reject("It's not a dog!")
		}
  }, 1000)
})

function smashFactor(bs, cs) {
	return parseFloat((bs/cs).toFixed(2))
}

const REGEXP = /\b\d\d:\d\d\b/

function getFillings(sandwich) {
	return sandwich.slice(1,-1)
}

function isEven(n) {
	return !(n % 2)
}

function makeCopy(obj) {
	return {...obj}
}

function hasSameBread(arr1, arr2) {
	const bread1 = Array.from(new Set([arr1[0],arr1[arr1.length-1]]))
	const bread2 = Array.from(new Set([arr2[0],arr2[arr2.length-1]]))

	if (bread1.length !== bread2.length){
		return false
	}

	return JSON.stringify(bread1) === JSON.stringify(bread2)
}

// return arr1.shift() === arr2.shift() && arr1.pop() === arr2.pop();

function isSafeBridge(str) {
	return !str.includes(" ")
}

function countUnique(s1, s2) {
	return Array.from(new Set(s1 + s2)).length
}

// return new Set(s1 + s2).size;
// The size accessor property returns the number of (unique) elements in a Set object.

function and(a, b) {
	return a && b
}

function calculate(num1, num2, op) {
	return eval(num1+op+num2)
}

function mean(nums) {
	sumNums = nums.reduce((sum, x) => sum + x)
	return parseFloat((sumNums/nums.length).toFixed(1))
}

function word(s) {
	const wordObj = {
		"one": 1,
		"two": 2,
		"three": 3,
		"four": 4,
		"five": 5,
		"six": 6,
		"seven": 7,
		"eight": 8,
		"nine": 9,
		"zero": 0
	}
	return wordObj[s]
}

function integerBoolean(n) {
	return n.split("").map(x => !!parseInt(x))
}

function countCharacters(arr) {
	if (arr.length === 0) {
		return 0
	}
	return arr.map(x => x.length).reduce((sum, x) => sum += x)
}

// return r.join('').length
