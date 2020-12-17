function maxNum(n1,n2) {
	if (n1>n2) {
	  return n1
	}
  else {
		return n2
  }
}

const add2 = (x) => x + 2
const add3 = (x) => x + 3
const add5 = (x) => x + 5
const add7 = (x) => x + 7
const add11 = (x) => x + 11

function imposterFormula(i, p) {
	return `${Math.round(i/p*100)}%`
}

function weightAllowed(car, p, maxWeight) {
	const totalP = (total,num) => total + num
	const peopleWeight = p.reduce(totalP,0)
	const kgConv = 0.453592
	return peopleWeight*kgConv + car*kgConv < maxWeight
}

//const weightAllowed = (car, p, maxWeight) => (p.reduce((a, c) => a + c, 0) + car) * 0.453592 < maxWeight;
