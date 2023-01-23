class Person{
    lastname:string
    firstname:string

    constructor(lastname:string, firstname:string){
        this.firstname = firstname
        this.lastname = lastname
    }

    sayHello():string{
        return "a person, lastname=" + this.lastname
    }
}

function oop_scratch(){
    let p1 = new Person("Sawitzki", "Rainer")
    let p2:Person = new Person("Mustermann", "Hannah")
    console.log(p1.sayHello())
}

oop_scratch()