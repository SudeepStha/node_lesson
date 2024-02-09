// File System

const  fs = require('fs') // it import all the function of filesystem(fs)
// READING FILES
fs.readFile('./docs/blog.txt', (err, data) => {
    if(err){
        console.log(err)
    }
    console.log(data.toString())
})

// //this line will be logged before reading the file. it because reading file will take some time. 
// //so at the mean time it will log other objects or log other things.
setTimeout(() => {
    console.log('inside settimeout')
}, 5000)

// console.log('this is last line')

// WRITING FILES
//when this code runs, it will replace all the text of that file
fs.writeFile('./docs/blog.txt', 'hello, WORLD', () => {
    console.log('file was written.')
})

// when this code runs and doesnot finds the given file in the given directory then it auto creates the file and writes the given content in it.
// In another way we can say it also helps to create new files with new content to write in it.

fs.writeFile('./docs/blog1.txt', 'This code was made to run to create new file and save the content in it.', () => {
        console.log('file was written.')
    })

// DIRECTORIES createing new directory/folder
// when it runs, if it doesnot find dir then it creates and if it finds then it will give error.
fs.mkdir('./assets', (err) => {
    if(err){
        console.log(err)
    }
    console.log('folder created.')
})

//another way to overcome the error, if condition checks the folder first
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
        if(err){
            console.log(err)
        }
        console.log('folder created.')
    })
}else{
    fs.rmdir('./assets', (err) => { // this rmdir helps to delete the folder if it exists.
        if(err){
            console.log(err)
        }
        console.log('folder deleted!')
    })
}


// DELETING FILES
if(fs.existsSync('./docs/deletefile.txt')){
    fs.unlink('./docs/deletefile.txt', (err) => {
        if(err){
            console.log(err)
        }
        console.log('file deleted!!')
    })
}
