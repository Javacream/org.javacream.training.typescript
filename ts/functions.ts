let func: () => string

func = () => {
  return "OK"
}


console.log(func())

let funcWithOptionalParam = (param1: string, param2?: string) => {
  return "param1=" + param1 + ", param2=" + param2
}


console.log(funcWithOptionalParam("Hello", "World"))
console.log(funcWithOptionalParam("Hello"))

let funcWithDefaultParam = (param1: string, param2: string = "Moon") => {
  return "param1=" + param1 + ", param2=" + param2
}

console.log(funcWithDefaultParam("Hello", "World"))
console.log(funcWithDefaultParam("Hello"))

let funcWithRestParam = (param1: string, ...param2 :string[]) => {
  return "param1=" + param1 + ", param2=" + param2.concat()
}

console.log(funcWithRestParam("Hello", "World"))
console.log(funcWithRestParam("Hello"))
console.log(funcWithRestParam("Hello", "World", "And", "Jupiter"))

