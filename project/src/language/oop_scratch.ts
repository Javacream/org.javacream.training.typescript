class Person{
    constructor(readonly lastname:string, readonly firstname:string){
        Object.preventExtensions(this)
    }

    sayHello():string{
        return "a person, lastname=" + this.lastname
    }
}

function oop_scratch(){
    let p1 = new Person("Sawitzki", "Rainer")
//    p1.lastname = "Meier"
    console.log(p1.lastname)
    let p2:Person = new Person("Mustermann", "Hannah")
    console.log(p1.sayHello())

    p1.sayHello = function(){return "42"}
    console.log(p1.sayHello())

}

oop_scratch()