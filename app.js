var http = require('http');
var fs = require('fs');

// read file
// http.createServer((req, res) => {
//     fs.readFile('index.html', function(err, data) { // 
//         if (err) throw err
//         res.writeHead(200, {'Content-Type': 'text/html'}) // response to be displayed as HTML
//         res.write(data)
//         return res.end() // end the response
//     });
// }).listen(8001)

// create a file (appendFile, open, writeFile)
// fs.appendFile('newFile.txt', "hello world", function(err) {
//     if (err) throw err
//     console.log("The file has been saved!")
// })

// update a file (appendFile, writeFile)
// fs.appendFile('newFile.txt', "This is my text.", function(err) {
//     if (err) throw err
//     console.log("The file has been updated!")
// })

// delete a file (unlink)
// fs.unlink('newFile.txt', function(err) {
//     if (err) throw err
//     console.log("The file has been deleted!")
// })

// rename a file (rename)
// fs.rename('newFile.txt', 'renamedFile.txt', function(err) {
//     if (err) throw err
//     console.log("The file has been renamed!")
// })
