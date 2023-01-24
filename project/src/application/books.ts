const applicationName = "BOOKS APPLICATION"

interface Book{
    isbn:string
    title:string
    pages:number
    price:number
    available:boolean
    description?:string

}

interface SchoolBook extends Book{
    subject:string
    year:number
}
interface SpecialistBook extends Book{
    topic:string
}

class BookClass implements Book{
    constructor(readonly isbn:string, readonly title:string, public pages:number, public price:number, public available:boolean){}
}

class SchoolBookClass extends BookClass implements SchoolBook{
    constructor(isbn:string, title:string, pages:number, price:number, available:boolean, readonly subject:string, readonly year:number){
        super(isbn, title, pages, price, available)
    }

}
class SpecialistBookClass extends BookClass implements SpecialistBook{
    constructor(isbn:string, title:string, pages:number, price:number, available:boolean, readonly topic:string){
        super(isbn, title, pages, price, available)
    }

}


interface GenericBook extends Record<string, any>{
    isbn:string
    title:string
}


export{
    Book, SchoolBook, SpecialistBook, GenericBook, BookClass, applicationName
}



