namespace Classes{
  class SimplePerson{
  name:string
  height:number
  constructor(name:string, height:number){
    this.name = name
    this.height = height
  }
  sayHello():string{
    return "Hello, my name is " + this.name
  }
}

let simplePerson = new SimplePerson("Mustermann", 188)
console.log(simplePerson.sayHello())

class PersonWithGetterAndSetter {
    private _name: string;

    get name(): string {
	 console.log("reading name")
        return this._name;
    }

    set name(newName: string) {
      console.log("setting name")
      this._name = newName;
    }
}

let p = new PersonWithGetterAndSetter ();
p.name = "Bob Smith";
console.log(p.name);

abstract class Point {
    x: number;
    y: number;
    abstract move(deltax:number, deltay:number):void
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3, move: function(deltax:number, deltay:number){this.x += deltax, this.y += deltay}};
console.log(point3d)
point3d.move(5,4)
console.log(point3d)

interface Coordinate{
  x:number
  y:number
  z:number
}
class ConcreteCoordinate implements Coordinate{
  constructor(readonly x: number, readonly y:number, readonly z:number){
  }
  print():void{
    console.log("Coordinate: " + this.x + ", " + this.y + ", " + this.z)
  }
}

let cc = new ConcreteCoordinate(5,2,3)
cc.print()


class PersonWithGetterAndSetterAndStatic {
    private _name: string;
    static number_of_eyes = 2
    get name(): string {
	 console.log("reading name")
        return this._name;
    }

    set name(newName: string) {
      console.log("setting name")
      this._name = newName;
    }
}

console.log(PersonWithGetterAndSetterAndStatic.number_of_eyes)
}
