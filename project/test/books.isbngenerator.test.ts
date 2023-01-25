import {RandomIsbnGenerator, AsyncRandomIsbnGenerator, SequenceIsbnGenerator, AsyncSequenceIsbnGenerator } from "../src/application/books.isbngenerator"

describe("async isbngenerators work", () => {
    it("random generates an isbn", async () => {
        let ig = new AsyncRandomIsbnGenerator()
        let isbn = await ig.next()
        expect(isbn).toBeDefined();
    })
    it("sequence generates an isbn", async () => {
        let ig = new AsyncSequenceIsbnGenerator()
        let isbn = await ig.next()
        expect(isbn).toBeDefined();
    })

})

describe("sync isbngenerators work", () => {
    it("random generates an isbn", () => {
        let ig = new RandomIsbnGenerator()
        let isbn = ig.next()
        expect(isbn).toBeDefined();
    })
    it("sequence generates an isbn", () => {
        let ig = new SequenceIsbnGenerator()
        let isbn = ig.next()
        expect(isbn).toBeDefined();
    })

})

