class PersonClass implements Person{
    constructor(readonly lastname:string, readonly firstname:string){}
    sayHello():string{
        return "Person: lastname=" + this.lastname
    }
}

interface Person{
    lastname:string
    firstname:string
}

function oop_scratch(){
    let p1:Person = new PersonClass("Sawitzki", "Rainer")
    console.log(p1.lastname)

    let obj:Person = {
        lastname: "Mustermann",
        firstname: "Hannah"
    }

    console.log(obj.lastname)
}

oop_scratch()