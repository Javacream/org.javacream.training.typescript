namespace interfaces{
  interface Person{
    lastname: string
    readonly firstname: string
    address?: string
    formattedName():string //Methoden in interfaces sind möglich, aber nicht gebräuchlich
  }

  function sayHello(person: Person){
    console.log("Hello, my name is "+ person.formattedName())
    if (person.address){
      console.log("living at " + person.address)
    }
  }

  let p:Person = {lastname: "Sawitzki", firstname: "Rainer", formattedName: function(){
    return this.firstname + " " + this.lastname
  }}
  sayHello(p)
  p.address = "München"
  sayHello(p)
  p.lastname = "Meier"
  sayHello(p)
  //p.firstname = "Gregor" Compiler error,
  interface Worker extends Person{
    company: string
    work(): string
  }

  let worker:Worker = {company: "Integrata", lastname: "Sawitzki", firstname: "Rainer", formattedName: function(){
    return this.firstname + " " + this.lastname
  }, work: function(){return "working at " + this.company}

}
console.log(worker.work())

}
