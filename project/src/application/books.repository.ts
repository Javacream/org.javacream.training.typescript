import { IsbnGenerator } from "./books.isbngenerator";
import { Book, BookUpdate } from "./books.types";
import { SimpleStoreService } from "./storeservice";
export class BooksRepository{

    constructor(readonly isbnGenerator: IsbnGenerator, readonly storeService: SimpleStoreService){}
    
    books = new Map<string, Book>()
    createBook = (title:string, price=0, available=false): string => {
        const isbn = "ISBN" + this.isbnGenerator.next()
        const newBook:Book = {isbn, title, price, available}
        this.books.set(isbn, newBook)
        return isbn
    }

    findBookByIsbn = (isbn:string): Book => {
        const result = this.books.get(isbn)
        if (result){
            return this.setAvailability(result)
        }else{
            throw new Error(`${isbn} not found`)
        }
    }
    findBooksByTitle = (title:string): Array<Book> => {
        const books = Array.from(this.books.values());
        return books.filter(book => book.title.includes(title)).map(this.setAvailability)
    }
    findBooksByPriceRange = (min:number, max:number): Array<Book> =>{
        const books = Array.from(this.books.values());
        return books.filter(book => book.price> min && book.price < max).map(this.setAvailability)
    }


    updateBook = (isbn:string, update:BookUpdate): void =>{
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
    deleteBookByIsbn=(isbn:string): void  =>{
        const result = this.books.delete(isbn)
        if (!result){
            throw new Error(`${isbn} not found`)
        }
    }

    setAvailability = (book:Book): Book => {
        book.available = this.storeService.getStock('books', book.isbn) > 0
        return book
    }
}