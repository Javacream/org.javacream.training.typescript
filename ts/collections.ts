namespace Collections {
  namespace ArrayExample {
    let names: Array<string> = ["Hugo", "Emil", "Fritz"]
    names.forEach((element) => { console.log(element) })
  }

  namespace SimpleTransformerExample {
    class SimpleTransformer {
      private algorithms: Map<string, (s: string) => string>
      constructor() {
        this.algorithms = new Map<string, (s: string) => string>()
        let upperAlgo: (s: string) => string = (s: string) => { return s.toUpperCase() }
        this.algorithms.set("upper", upperAlgo)
      }

      register(algorithmName: string, algorithm: (s: string) => string) {
        this.algorithms.set(algorithmName, algorithm)
      }

      transform(algorithmName: string, value: string) {
        let algorithm = this.algorithms.get(algorithmName)
        if (algorithm) {
          return algorithm(value)
        } else {
          return value
        }

      }
      info(){
        this.algorithms.forEach((value, key) => {console.log(`${key} := ${value}`)})
      }
  }
    let simpleTransformer = new SimpleTransformer();
    simpleTransformer.info()
    console.log(simpleTransformer.transform("upper", "Hugo"))
    console.log(simpleTransformer.transform("lower", "Hugo"))
    simpleTransformer.register("lower", (s: string) => { return s.toLowerCase() })
    simpleTransformer.info()
    console.log(simpleTransformer.transform("lower", "Hugo"))
  }
namespace MapReduce{
  interface Person{
    lastname: string
    firstname:string
    height:number
  }
  let data = new Array<Person>()
  data.push({lastname: "Sawitzki", firstname: "Rainer", height: 183}, {lastname: "Metzger", firstname: "Georg", height: 177}, {lastname: "Schneider", firstname: "Hanna", height: 193})
  data.filter((element) => {return element.lastname.startsWith("M")}).map((element) => {return element.lastname}).forEach((element, index) => {console.log(`${index}:${element}`)})
}

}