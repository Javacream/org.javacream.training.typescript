namespace BasicTypes{
  let name:string = "Hugo"
  let state:boolean = true
  let number:number = 42
  console.log(number)
}

namespace Declarations{
  const name:string = "Hugo"
  let state:boolean = true
  state = false
}

namespace TypeAnnotations{
  let value :any ="Hello"
  const message :string = <string>value
  const message2 : string = value as string
}

namespace Namespace1{
  export let message = "Hello from namespace1"
}

namespace Namespace2{
  console.log(Namespace1.message);
}
