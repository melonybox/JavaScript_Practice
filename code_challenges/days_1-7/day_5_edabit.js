function points(twoPointers, threePointers) {
	return twoPointers*2 + threePointers*3
}

function cubes(a) {
	return a ** 3
}

function circuitPower(voltage, current) {
	return voltage * current
}

function calcAge(age) {
	return age*365
}

function valueAt(arr, i) {
	return arr[Math.floor(i)]
}

function calculator(str) {
	return eval(str)
}

function fifth() {
	if (arguments.length < 5) {
		return "Not enough arguments"
	}
	return typeof(arguments[arguments.length-1])
}

function frontThree(str) {
	if (str.length > 3) {
		return str.slice(0,3).repeat(3)
	}
	return str.repeat(3)
}
