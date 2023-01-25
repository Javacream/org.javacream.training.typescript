import { AsyncIsbnGenerator } from "./books.isbngenerator"
import {Book, BookUpdate } from "./books.types"
import { StoreController } from "./storeservice"

export class BooksController{
    baseUrl:string = "http://h2908727.stratoserver.net:8080/api/books"

    constructor(readonly isbnGenerator: AsyncIsbnGenerator, readonly storeController: StoreController){}

    createBook = async (title:string, price=0, available=false): Promise<string> => {
        let response = await fetch(`${this.baseUrl}/${title}`, {method: 'POST'})
        if (response.status != 200){
            throw new Error("create book failed" + response.status)
        }
        return await response.text()
    }

    findBookByIsbn = async (isbn:string): Promise<Book> => {
        let response = await fetch(`${this.baseUrl}/${isbn}`)
        if (response.status != 200){
            throw new Error("findBook failed" + response.status)
        }
        let data:Book = await response.json()
        return data
   }


    updateBook = async (isbn:string, update:BookUpdate): Promise<void> =>{
        const book = await this.findBookByIsbn(isbn)
        if (update.available){
            book.available = update.available
        }
        if (update.title){
            book.title = update.title
        }
        if (update.price){
            book.price = update.price
        }
        let response = await fetch(`${this.baseUrl}/${isbn}`, {method: "PUT", body: JSON.stringify(book), headers: {"Content-Type": "application/json"}})
        if (response.status != 200){
            throw new Error("update book failed" + response.status)
        }

    }
    deleteBookByIsbn= async (isbn:string): Promise<void>  =>{
        let response = await fetch(`${this.baseUrl}/${isbn}`, {method: 'DELETE'})
        if (response.status != 200){
            throw new Error("delete book failed" + response.status)
        }

    }
    setAvailability = async (book:Book): Promise<Book> => {
        book.available = await this.storeController.getStock('books', book.isbn) > 0
        return book
    }
}