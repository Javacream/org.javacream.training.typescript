import {applicationName} from './src/application/books'

function main(){
    const booksApplication = require('./src/application/books')
    console.log(`starting main ${applicationName}... `)
    console.log("done")
}

main()