namespace promises{
function firstAsyncFunction(delay:number): Promise<string> {
  console.log("Entering firstAsyncFunction at " + new Date())
    var result = new Promise((resolve) => {
        setTimeout(() => resolve("World"), delay);
    });
    return result;
}
function secondAsyncFunction(param:string, delay:number): Promise<string> {
    console.log("Entering secondAsyncFunction at " + new Date())
    var result = new Promise((resolve) => {
        setTimeout(() => resolve(`Hello ${param}`), delay);
    });
    return result;
}
console.log("Calling firstAsyncFunction at " + new Date())
firstAsyncFunction(1000).then((res:string) => secondAsyncFunction(res, 2000)).then((res:string) => console.log(`Resolving result ${res} at ${new Date()}`))


Promise.all([firstAsyncFunction(1000), secondAsyncFunction(1000)]).then((res:any) => {console.log("Finishing Promise.all at " + new Date() + res)})

}
