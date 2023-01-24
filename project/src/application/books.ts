const applicationName = "BOOKS APPLICATION"

interface Book{
    isbn:string
    title:string
    pages:number
    price:number
    available:boolean
}

class BookClass implements Book{
    constructor(readonly isbn:string, readonly title:string, public pages:number, public price:number, public available:boolean){}
}

export{
    Book, BookClass, applicationName
}



