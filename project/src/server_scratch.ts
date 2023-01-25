async function getData(url:string){
    let response = await fetch(url)
    let data = await response.json()
    return data

}

let dataPromise = getData("http://h2908727.stratoserver.net:8080/api/books")
dataPromise.then((data) => console.log(data))
console.log("********************** ")