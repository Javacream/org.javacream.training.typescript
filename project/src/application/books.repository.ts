import { Book } from "./books.types";
export type Update = {price?:number, pages?:number, title?:string, available?:boolean}
export class BooksRepository{
    
    books = new Map<string, Book>()
    counter = 0
    createBook(title:string, pages=0, price=0, available=false): string{
        const isbn = "ISBN" + this.counter++
        const newBook:Book = {isbn, title, pages, price, available}
        this.books.set(isbn, newBook)
        return isbn
    }

    findBookByIsbn(isbn:string): Book{
        const result = this.books.get(isbn)
        if (result){
            return result
        }else{
            throw new Error(`${isbn} not found`)
        }
    }


    updateBook(isbn:string, update:Update): void{
        const book = this.findBookByIsbn(isbn)
        if (update.available){
            book.available = update.available
        }
        if (update.title){
            book.title = update.title
        }
        if (update.price){
            book.price = update.price
        }
    }
    deleteBookByIsbn(isbn:string): void{
        const result = this.books.delete(isbn)
        if (!result){
            throw new Error(`${isbn} not found`)
        }
    }
}