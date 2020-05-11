function longBurp(num) {
	return "Bu" + "r".repeat(num) + "p"
}

// ---

function checkEnding(str1, str2) {
	return str1.endsWith(str2)
}

// ---

function repeat(item, times) {
	let resultArr = []
	for (let i = 0; i < times; i++) {
		resultArr.push(item)
	}
	return resultArr
}

// ---

function addOddToN(n) {
	return (~~((n+1)/2))**2
}

//from a solution via python
//num+1 to get the even end point
//divide result by 2 to get an odd number of total numbers to be added
//~~ similur to // which is floor division, dividing by 2 results in a float.
//square the result to get the sum
// ---

function acceptedWords(arr) {
 const newArr = arr.filter(function(word) {
	 return word[0] !== "C"
 })
 return newArr
}

//return arr.filter(word => word[0] !== "C"), did not work in edabit.
// ---

function nSidedShape(n) {
	shapeObj = {
		1:"circle",
		2:"semi-circle",
		3:"triangle",
		4:"square",
		5:"pentagon",
		6:"hexagon",
		7:"heptagon",
		8:"octagon",
		9:"nonagon",
		10:"decagon"
	}
	return shapeObj[n]
}

// ---

function wordLengths(arr) {
	return arr.map(word => word.length)
}

// ---
