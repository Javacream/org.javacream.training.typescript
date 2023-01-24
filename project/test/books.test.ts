import {Book, BookClass} from '../src/application/books'

describe("books application works", () => {
    it("book can be created", () => {
        const book:Book = new BookClass("ISBN1", "Title1", 200, 19.99, true)
        expect(book).toBeDefined()
    })
})