// stream is used when a chunk of data is needed to send to user slowly like when we are playing youtube videos

const fs = require('fs')

// when encoding is not written then we need to write toString()
const readStream = fs.createReadStream('./docs/streamfile.txt')

readStream.on('data', (chunk) => {  
    console.log('----- Chunk Data without encoding -------')
    console.log(chunk.toString()) 
})

// -------------------------------------------------------------

// when encoding is written then no need to write toString()
const readFileStream = fs.createReadStream('./docs/streamfile.txt', {encoding: 'utf-8'})

// it will create file and write that code from chunk to another file
const writeStream = fs.createWriteStream('./docs/streamfile2.txt') 

readFileStream.on('data', (chunk) => {
    console.log('----- Chunk Data with encoding -------')
    console.log(chunk)
    writeStream.write('\n---- New Chunk ----\n')
    writeStream.write(chunk)
})

// this one line code can be written in place of above 18 to 23 line of code. it does same work as above.
readFileStream.pipe(writeStream) 