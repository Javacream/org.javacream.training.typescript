function getData(url:string){
    let responsePromise = fetch(url)
    let dataPromise = responsePromise.then((response) => response.json() )
    return dataPromise

}

let dataPromise = getData("http://h2908727.stratoserver.net:8080/api/books")
dataPromise.then((data) => console.log(data))
console.log("********************** ")