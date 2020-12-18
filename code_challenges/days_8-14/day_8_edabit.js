function areTrue(a, b) {
	return !!a && !!b ? "both" : !!a ? "first" : !!b ? "second" : "neither"
}

function length(s) {
	let strLen = 0
	for (let x in s) {
		strLen += 1
	}
	return strLen
}
//return s.lastIndexOf('')

function notShare(arr1, arr2) {
	return !arr1.some(x => arr2.includes(x))
}
//arr1.every(x => !arr2.includes(x))

function parseArray(arr) {
	if (arr.length === 0) {
		return arr
	}
	for (let i = 0; i < arr.length; i++) {
		arr[i] !== "string" ? arr[i] = arr[i].toString() : null
	}
	return arr
}
//return arr.map(String);

function preventChanges(obj) {
  // write your code here
	// don't use a return statement
	Object.freeze(obj)
  // DON'T CHANGE OR REMOVE THE LINES BELOW
  obj.noChanges = false;
  obj.signature = "whatever";
  return obj;
}

function elementSet(s) {
	return s.values().next().value
}
//return [...s][0]
