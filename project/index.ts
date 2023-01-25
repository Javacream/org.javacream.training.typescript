import {readFile, writeFile} from "fs/promises"
import { StoreController } from "./src/application/storeservice"
async function main(){
    let storeController = new StoreController()
    console.log(`starting main... `)
    let ids = await readFile('./data/in/ids.txt', 'utf-8')
    let idList = ids.split(",")
    let stockList = new Map<string, number>()

    //idList.forEach(async (id) => await storeController.getStock("sawitzki", id)) //mit async functionen nicht nutzbar

    for (let id of idList){
        let stock = await storeController.getStock("sawitzki", id)
        stockList.set(id, stock)
    }
    console.log(stockList)
    await writeFile('./data/out/stocks.txt', JSON.stringify(stockList))
    console.log("done")
}

main()