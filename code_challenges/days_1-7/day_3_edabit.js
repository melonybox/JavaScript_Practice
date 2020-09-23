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
