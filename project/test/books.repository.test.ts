import {BooksRepository} from '../src/application/books.repository'

describe("books repository works", () => {
    it("creates a isbn", () => {
        const br = new BooksRepository()
        let generatedIsbn = br.createBook("TEST")
        expect(generatedIsbn).toBeDefined()
    })

    it("creates a book", () => {
        const TITLE = "TEST"
        const br = new BooksRepository()
        let generatedIsbn = br.createBook(TITLE)
        let book = br.findBookByIsbn(generatedIsbn)
        expect(book.title).toBe(TITLE)
    })
    it("updates a book", () => {
        const TITLE = "TEST"
        const NEW_PRICE = 6.66
        const br = new BooksRepository()
        let generatedIsbn = br.createBook(TITLE)
        br.updateBook(generatedIsbn, {price: NEW_PRICE})
        let book = br.findBookByIsbn(generatedIsbn)
        expect(book.price).toBe(NEW_PRICE)
    })
    it("deletes a book", () => {
        const TITLE = "TEST"
        const br = new BooksRepository()
        let generatedIsbn = br.createBook(TITLE)
        br.deleteBookByIsbn(generatedIsbn)
    })
    it("throws an error deleting an unknown isbn", () => {
        const br = new BooksRepository()
        expect(() => br.deleteBookByIsbn("UNKNOWN")).toThrow(Error)
    })
    it("throws an error updating an unknown isbn", () => {
        const br = new BooksRepository()
        expect(() => br.updateBook("UNKNOWN", {})).toThrow(Error)
    })
    it("throws an error searching for an unknown isbn", () => {
        const br = new BooksRepository()
        expect(() => br.findBookByIsbn("UNKNOWN")).toThrow(Error)
    })

})