import { SimpleStoreService, StoreController } from "../src/application/storeservice"

describe("storeservice works", () => {
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

describe("storecontroller works", () => {
    let storeController = new StoreController()
    it("stores a new entry", async () => {
        await storeController.setStock("sawitzki", "0815", 42)
    })
    it("retrieves stock", async () => {
        let stock = await storeController.getStock("sawitzki", "0815")
        expect(stock).toBe(42)
    })
})
