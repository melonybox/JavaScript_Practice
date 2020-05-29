class Employee {
	constructor (firstname, lastname) {
		this.firstname = firstname
		this.lastname = lastname
		// Complete the code!
	}

	get fullname(){
    return `${this.firstname} ${this.lastname}`
  }

	get email(){
    return `${this.firstname.toLowerCase()}.${this.lastname.toLowerCase()}@company.com`
  }
}

// ---

function preventDistractions(str) {
	const badWords = /anime*|meme*|vines*|roasts*|Danny DeVito*/g
	return badWords.test(str)? "NO!" : "Safe watching!"
}

// remember to return turnarys, im waking up pls
// ---
