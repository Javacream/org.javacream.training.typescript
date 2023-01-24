export class SimpleStoreService{
    store = new Map<string, Map<string, number>>()
    constructor(){
        const booksMap = new Map<string, number>()
        booksMap.set('ISBN0', 42)
        booksMap.set('ISBN1', 4)
        booksMap.set('ISBN2', 2)
        const dvdsMap = new Map<string, number>()
        dvdsMap.set('Star Trek', 42)
        this.store.set('books', booksMap)
        this.store.set('dvds', dvdsMap)
    }

    getStock(category:string, id:string): number{
        const ids = this.store.get(category)
        if (ids){
            const stock = ids.get(id)
            if (stock){
                return stock
            }
        }
        return 0
    }
}