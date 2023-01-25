import {BooksController} from '../src/application/books.controller'
import {AsyncSequenceIsbnGenerator} from '../src/application/books.isbngenerator'
import {StoreController} from '../src/application/storeservice'
describe("books repository works", () => {
    let booksController:BooksController
    beforeEach(() => {
        booksController = new BooksController(new AsyncSequenceIsbnGenerator(), new StoreController())
    })
    it("creates a isbn", async () => {
        let generatedIsbn = await booksController.createBook("TEST")
        expect(generatedIsbn).toBeDefined()
    })

    it("created book has title", async () => {
        const TITLE = "TEST"
        let generatedIsbn = await booksController.createBook(TITLE)
        let book = await booksController.findBookByIsbn(generatedIsbn)
        expect(book.title).toBe(TITLE)
    })
    xit("updates a book", async () => {
        const TITLE = "TEST"
        const NEW_PRICE = 6.66
        let generatedIsbn = await booksController.createBook(TITLE)
        await booksController.updateBook(generatedIsbn, {price: NEW_PRICE})
        let book = await booksController.findBookByIsbn(generatedIsbn)
        expect(book.price).toBe(NEW_PRICE)
    })
    it("deletes a book", async () => {
        const TITLE = "TEST"
        let generatedIsbn = await booksController.createBook(TITLE)
        await booksController.deleteBookByIsbn(generatedIsbn)
    })
    it("throws an error deleting an unknown isbn", async () => {
        expect(() => booksController.deleteBookByIsbn("UNKNOWN")).rejects.toThrow(Error)
    })
    it("throws an error updating an unknown isbn", async () => {
        expect(() => booksController.updateBook("UNKNOWN", {})).rejects.toThrow(Error)
    })
    it("throws an error searching for an unknown isbn", async () => {
        expect(() => booksController.findBookByIsbn("UNKNOWN")).rejects.toThrow(Error)
    })
})