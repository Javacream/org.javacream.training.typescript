namespace AdvancedTypes {

  namespace Intersect {
    function intersect<T, U>(first: T, second: U): T & U {
      let result = <T & U>{};
      for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
      }
      for (let id in second) {
        if (!result.hasOwnProperty(id)) {
          (<any>result)[id] = (<any>second)[id];
        }
      }
      return result;
    }

    class Person {
      constructor(public name: string) { }
    }
    interface Loggable {
      log(): void;
    }
    class ConsoleLogger implements Loggable {
      log() {
        // ...
      }
    }
    let jim = intersect(new Person("Jim"), new ConsoleLogger());
    let n = jim.name;
    jim.log();
  }

  namespace Union {
    interface Bird {
      fly(): void;
      layEggs(): void;
    }

    interface Fish {
      swim(): void;
      layEggs(): void;
    }

    function createAnimal(): Fish | Bird {
      return {
        fly: function () {

        },
        layEggs: function () {
        }
      }
    }

    let animal = createAnimal()
    animal.layEggs()

    if ((<Fish>animal).swim) {
      (<Fish>animal).swim();
    }
    else {
      (<Bird>animal).fly();
    }

    function isFish(pet: Fish | Bird): pet is Fish {
      return (<Fish>pet).swim !== undefined;
    }
    if (isFish(animal)) {
      animal.swim();
    }
    else {
      animal.fly();
    }
  }
}
}
