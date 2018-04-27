namespace ClosuresExample {
  let func = () => {
    let statusMessage = "OK"
    let inner = () => {
      return `inner: ${statusMessage}`
    }
    //console.log(inner())
    return inner
  }
  let resultOfFunc:() => string = func()
  let result = resultOfFunc() 
  console.log(result)
  for (var i = 0; i < 5; i++){
    let j = i
    setTimeout(() => {console.log("timer triggered " + j)}, 2000)
  }
}