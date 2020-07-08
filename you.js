// Instructions: Create an object that represents you.

const Me = Object.create(null, {
    firstName: {
        value: "David"
    },
    lastName: {
        value: "Larsen"
    },
    dateOfBirth: {
        value: "1980-12-12"
    },
    placeOfBirth: {
        value: "Wisconsin, New York"
    },
    currentCity: {
        value: "Nashville",
        writable: true
    },
    currentState: {
        value: "Tennessee",
        writable: true
    },
    toString: {
        value: function () {
            return `${this.firstName} ${this.lastName} was born in ${this.placeOfBirth}. He was born on ${this.dateOfBirth}. He currently lives in ${this.currentCity}, ${this.currentState}.`
        }
    }
})

console.log(Me.toString())