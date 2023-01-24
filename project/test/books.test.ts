import {Book, BookClass, GenericBook} from '../src/application/books'

describe("books application works", () => {
    it("can create a book", () => {
        const book:Book = new BookClass("ISBN1", "Title1", 200, 19.99, true)
        expect(book).toBeDefined()
    })

    it("description is optional", () => {
        const b1:Book = {isbn: "", title: "", price: 19.99, pages: 200, available: true}
        const b2:Book = {isbn: "", title: "", price: 19.99, pages: 200, available: true, description: "..."}
        //const b3:Book = {title: "", price: 19.99, pages: 200, available: true, description: "..."}
        //const b4:Book = {isbn: "", title: "", price: 19.99, pages: 200, available: true, desc: "..."}
    
    })

    it ("tests GenericBook", () => {
        let gb:GenericBook = {isbn:"GenericIsbn", title: "GenericTitle"}
        gb.price = 19.99
        gb.desc = "description"
        console.log(gb)

    })
})