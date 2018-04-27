namespace async_await{
async function firstAsyncFunction(delay:number): Promise<string> {
  console.log("Entering firstAsyncFunction at " + new Date())
    var result = new Promise<string>((resolve) => {
        setTimeout(() => resolve("World"), delay);
    });
    return result;
}
async function secondAsyncFunction(param:string, delay:number): Promise<string> {
    console.log("Entering secondAsyncFunction at " + new Date())
    var result = new Promise<string>((resolve) => {
        setTimeout(() => resolve(`Hello ${param}`), delay);
    });
    return result;
}
async function sequence(){
  console.log("Entering sequence at " + new Date())
  var result = await firstAsyncFunction(1000)
  var result2 = await secondAsyncFunction(result, 2000)
  console.log(`result: ${result}, result2: ${result2} at ${new Date()}`)
}

sequence()
}
