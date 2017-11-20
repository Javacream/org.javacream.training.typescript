class InvalidPerson {

    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName;
    }

    greet(){
      return "Hello, my name is " + this.firstName + " " + this.lastName;
    }
}

var person = new InvalidPerson("Georg", "Metzger")
console.log(person.greet())
