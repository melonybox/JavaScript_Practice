function giveMeSomething(a) {
	return "something " + a
}

function shouldServeDrinks(age, onBreak) {
	return age >= 18 && onBreak === false
}

function has_bugs(buggy_code) {
	return buggy_code === true ? "sad days" : "it's a good day"
}

// buggy_code ? 'sad days' : "it's a good day";

function footballPoints(wins, draws, losses) {
	return wins*3 + draws
}

function equation(s) {
	return eval(s)
}

// NEVER USE EVAL THOUGH

function acceptIntoMovie(age, isSupervised) {
	if (age >= 15) {
		return true
	}
	return isSupervised
}

// return age >= 15 || isSupervised

function arrBetween(num1, num2, arr) {
	return arr.filter(x => {
		return x > num1 && x < num2
	})
}

function absolute(n) {
	return n >=0 ? n : -n
}

function stringInt(str) {
	return parseInt(str)
}

function areaShape(base, height, shape) {
	switch(shape) {
		case "triangle":
			return 0.5 * (base * height)
		case "parallelogram":
			return base * height
	}
}

// return (shape === 'triangle' ? 0.5 : 1) * base * height;

function flipBool(b) {
	return !!b ? 0 : 1
}

function getVoteCount(votes) {
	return votes.upvotes - votes.downvotes
}

function eq(evaluate) {
	return eval(evaluate)
}

function howManyStickers(n) {
	return 6*n*n
}

function newWord(str) {
	return str.slice(1, str.length)
}

function yeah_nope(bool) {
	return bool ? "yeah" : "nope"
}

function kineticEnergy(m, v) {
	return Math.round((m*v**2)*.5)
}

function arrayToString(arr) {
	return arr.join("")
}

function sayWhat(obj) {
	return `${obj[1]} ${obj[2]} ${obj[3]} ${obj[2]}`
}

function checkSquareAndCube(arr) {
	return Math.sqrt(arr[0]) === Math.cbrt(arr[1])
}

function firstLast(name) {
	return name[0] + name[name.length-1]
}

function starNumber(n) {
	return 6*n*(n-1)+1
}

function validStrNumber(n) {
	return !isNaN(n)
}

function stutter(word) {
	const repeatWord = word.slice(0,2) + "... "
	return repeatWord.repeat(2) + word + "?"
}

// `${`${word.slice(0, 2)}... `.repeat(2)}${word}?`

function emotify(str) {
	const objList = {smile: ":D", grin: ":)", sad: ":(", mad: ":P"}
	const emojiFace = str.split(" ")[2]
	return `Make me ${objList[emojiFace]}`
}

function relationToLuke(name) {
	const strPreName = "Luke, I am your "
	switch(name) {
		case "Darth Vader":
			return strPreName + "father."
		case "Leia":
			return strPreName + "sister."
		case "Han":
			return strPreName + "brother in law."
		case "R2D2":
			return strPreName + "droid."
	}
}

// const rels = {
// 		"Darth Vader": "father",
// 		"Leia": "sister",
// 		"Han": "brother in law",
// 		"R2D2": "droid"
// 	}
// 	return `Luke I am your ${rels[name]}.`
// had this in mind but brain go blank

function distanceHome(arr) {
	const distanceWalked = arr.reduce((sum, x) => {
		return sum + x
	})
	return Math.abs(distanceWalked)
}
