function circle_or_square(rad, area){
	return (rad*2*Math.PI).toFixed(2)>Math.sqrt(area)*4
}

function sumPolygon(n) {
	return (n-2)*180
}

function howManyWalls(n, w, h) {
	return ~~(n/(w*h))
}

function printArray(number) {
  var newArray = [];

  for(var i = 0; i < number; i++) {
    newArray.push(i+1);
  }

  return newArray;
}

function arrayValuesTypes(arr) {
	return arr.map(x => typeof(x))
}

function debugMe() {
	return true
}

function nameString(name){
	var b = "Edabit"
	var result = name + b
  	return result
}
