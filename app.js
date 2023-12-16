const http = require('http');
const fs = require('fs')
const port = 3001;

const server = http.createServer((req,res)=>{
    fs.readFile('index.html',(err,data)=>{
        if(err){
            res.write('Error occured');
        }
        else{
            res.writeHead(200,{'Content-Type': 'text/html'})
            res.write(data);
        }
        res.end()
    })
})
server.listen(port,(err)=>{
    if(err)
    res.write("error in port");
});