import { SimpleStoreService } from "../src/application/storeservice"

describe("books repository works", () => {
    let storeService:SimpleStoreService
    beforeEach(() => {
        storeService = new SimpleStoreService()
    })
    it("storeService retrieves stock", () => {
        let stock = storeService.getStock("books", 'ISBN0')
        expect(stock).toBe(42)
    })
    it("storeService retrieves 0 stock for unknown category", () => {
        let stock = storeService.getStock("boks", 'ISBN0')
        expect(stock).toBe(0)
    })
})
