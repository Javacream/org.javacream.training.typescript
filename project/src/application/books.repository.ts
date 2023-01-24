import { IsbnGenerator } from "./books.isbngenerator";
import { Book } from "./books.types";
export type Update = {price?:number, pages?:number, title?:string, available?:boolean}
export class BooksRepository{

    constructor(readonly isbnGenerator: IsbnGenerator){}
    
    books = new Map<string, Book>()
    createBook(title:string, pages=0, price=0, available=false): string{
        const isbn = "ISBN" + this.isbnGenerator.next!()
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
    findBooksByTitle(title:string): Array<Book>{
        const books = Array.from(this.books.values());
        return books.filter(book => book.title.includes(title))
    }
    findBooksByPriceRange(min:number, max:number): Array<Book>{
        const books = Array.from(this.books.values());
        return books.filter(book => book.price> min && book.price < max)
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