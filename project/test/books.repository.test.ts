import {BooksRepository} from '../src/application/books.repository'
import {SequenceIsbnGenerator} from '../src/application/books.isbngenerator'
import { SimpleStoreService } from '../src/application/storeservice'
describe("books repository works", () => {
    let br:BooksRepository
    beforeEach(() => {
        br = new BooksRepository(new SequenceIsbnGenerator(), new SimpleStoreService)
    })
    it("creates a isbn", () => {
        let generatedIsbn = br.createBook("TEST")
        expect(generatedIsbn).toBeDefined()
    })

    it("creates a book", () => {
        const TITLE = "TEST"
        let generatedIsbn = br.createBook(TITLE)
        let book = br.findBookByIsbn(generatedIsbn)
        expect(book.title).toBe(TITLE)
    })
    it("updates a book", () => {
        const TITLE = "TEST"
        const NEW_PRICE = 6.66
        let generatedIsbn = br.createBook(TITLE)
        br.updateBook(generatedIsbn, {price: NEW_PRICE})
        let book = br.findBookByIsbn(generatedIsbn)
        expect(book.price).toBe(NEW_PRICE)
    })
    it("deletes a book", () => {
        const TITLE = "TEST"
        let generatedIsbn = br.createBook(TITLE)
        br.deleteBookByIsbn(generatedIsbn)
    })
    it("throws an error deleting an unknown isbn", () => {
        expect(() => br.deleteBookByIsbn("UNKNOWN")).toThrow(Error)
    })
    it("throws an error updating an unknown isbn", () => {
        expect(() => br.updateBook("UNKNOWN", {})).toThrow(Error)
    })
    it("throws an error searching for an unknown isbn", () => {
        expect(() => br.findBookByIsbn("UNKNOWN")).toThrow(Error)
    })
    it("creates books that can be found by title search", () => {
        br.createBook("a first title of a book")
        br.createBook("a second title of a book")
        br.createBook("title")
        br.createBook("titles are great")
        br.createBook("hugo")
        expect(br.findBooksByTitle("title").length).toBe(4)
    })
    it("creates books that can be found by price range", () => {
        br.createBook("", 9.99)
        br.createBook("", 29.99)
        br.createBook("", 6.66)
        br.createBook("", 6.99)
        br.createBook("", 19.99)
        expect(br.findBooksByPriceRange(0, 999).length).toBe(5)
        expect(br.findBooksByPriceRange(10, 999).length).toBe(2)
        expect(br.findBooksByPriceRange(0, 20).length).toBe(4)
    })

})