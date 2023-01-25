export interface IsbnGenerator{
    next():string
}

export class RandomIsbnGenerator implements IsbnGenerator{
    next():string{
       return "ISBN" + Math.random()
    }
}

export class SequenceIsbnGenerator implements IsbnGenerator{
    counter = 0
    next():string{
       return "ISBN" + this.counter++
    }
}

export interface AsyncIsbnGenerator{
    next():Promise<string>
}

export class AsyncRandomIsbnGenerator implements AsyncIsbnGenerator{
    next():Promise<string>{
       return Promise.resolve("ISBN" + Math.random())
    }
}

export class AsyncSequenceIsbnGenerator implements AsyncIsbnGenerator{
    baseUrl:string = "http://h2908727.stratoserver.net:8080/api/isbn"

    async next(){
        let response = await fetch(`${this.baseUrl}`, {method: 'POST'})
        let data = await response.text() as string
        return data
       
    }
}