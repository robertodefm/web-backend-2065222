const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000;

//Middleware que converte o BODY para JSON
app.use(express.json());

app.use(writeLog);

fs.appendFileSync("log.txt","SERVER STARTED \n");

function writeLog(req,res,next){
    var log = req.url + ", " + req.method + ", " + new Date().toString() + "\n";
    fs.appendFileSync("log.txt",log);
}

app.get('/', (req, res) => {
    const body = "Hello World";
    res.writeHead(200,{
        'content-length': Buffer.byteLength(body),
        'content-type': 'text/plain'
    });
    res.end(body);
});

app.get('/html', (req, res) => {
    const body = "<h1>Hello World</h1>";
    res.writeHead(200,{
        'content-length': Buffer.byteLength(body),
        'content-type': 'text/html'
    });
    res.end(body);
});

app.get('/html2', (req, res) => {
    const body=fs.readFileSync("./index.html");
    res.writeHead(200,{
        'content-length': Buffer.byteLength(body),
        'content-type': 'text/html'
    });
    res.end(body);
});

app.get('/html/:name', (req, res) => {
    var date = new Date();
    var log = req.url + ", " + req.method + ", " + new Date().toString() + "\n";
    fs.appendFileSync("log.txt",log);
    var name= req.params.name;
    var body=fs.readFileSync("./index.html","utf-8");
    body=body.replace("{name}",name);
    body=body.replace("{date}", date.toDateString());
    res.writeHead(200,{
        'content-length': Buffer.byteLength(body),
        'content-type': 'text/html'
    });
    res.end(body);
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });


