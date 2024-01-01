var fs = require('fs')
var http = require('http')
var formidable = require('formidable')
const server = http.createServer();

server.on('request', (req, res) => {
    if(req.method === 'POST' && req.url === '/fileupload') {
         const form = new formidable.IncomingForm();

         form.parse(req, (err, fields, files) => {
         if(err){
                console.log(err)
         } 
            console.log("fields: ", fields);
            console.log("files:", files);
        
        const oldPath = files.fileToUpload.filepath;
        const newPath = __dirname + "/uploads/" + files.fileToUpload.filepath;
        console.log(oldPath)
        console.log(newPath);

        fs.rename(oldPath, newPath, (err) => {
            if (err) throw err;
            return res.end("File uploaded successfully");
        });
         });
        
        
    }
    else{
        fs.readFile('index.html', (err, data) => {
            if (err) throw err
            return res.end(data)
        })
    }
});

server.listen(8001, ()=>{
    console.log("Server is running on PORT: 8001")
})

// For Express Server
/*
step 1: install express-fileupload package
step 2: create a route to access
step 3: Output data is in object format. use mv function to extract the data.
eg: image.mv(_dirname + "/upload/" + image.name)