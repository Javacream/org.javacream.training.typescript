class Person{
    private _lastname:string
    private _firstname:string

    constructor(lastname:string, firstname:string){
        this._firstname = firstname
        this._lastname = lastname
    }

    get lastname():string {
        return this._lastname
    }
    set lastname(lastname:string) {
        this._lastname = lastname
    }
    get firstname():string {
        return this._firstname
    }
    sayHello():string{
        return "a person, lastname=" + this.lastname
    }
}

function oop_scratch(){
    let p1 = new Person("Sawitzki", "Rainer")
    p1.lastname = "Meier"
    console.log(p1.lastname)
    let p2:Person = new Person("Mustermann", "Hannah")
    console.log(p1.sayHello())
}

oop_scratch()