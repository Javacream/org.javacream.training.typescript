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