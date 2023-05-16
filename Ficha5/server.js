const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

//Middleware que converte o BODY para JSON
app.use(express.json());

function readFile(path){
    var content=fs.readFileSync(path);
    return JSON.parse(content);
}

var content = readFile('./persons.json');
console.log(content);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
    
    res.send(content)
  })

app.post('/users', (req, res) => {

    if (Object.keys(req.body).length==0){
      res.status(400).send("Details not valid");
    }
    else{
      
      var person = req.body;
      var size = Object.keys(content).length;
      var id = size + 1;
      person.id = id;
      content["person"+id]=person;
  
      writeFile("persons.json",JSON.stringify(content));
  
      res.send("ID: " + id);
    }
  })

app.delete('/users/:id', (req, res) => {
  var id=req.params.id;
  if (content["person"+id]==undefined){
    res.status(404).send("ID not found");
  } else {

    delete content["person"+id];
    writeFile("persons.json",JSON.stringify(content));
    res.send("Delete ok! ID: "+ id);
  }

})

app.get('/users/:id', (req, res) => {
  var id=req.params.id;
  if (content["person"+id]==undefined){
    res.status(404).send("ID not found");
  } else {

    res.send(content["person"+id] );
  }



})

app.put('/users/:id', (req, res) => {
  var id=req.params.id;
  // if (content["person"+id]==undefined){
  //   res.send("Undefined");
  // } else {
  //     var details=req.body;
  //     content["person"+id].firstname = details.firstname;
  //     content["person"+id].id=id;
  //     res.send(content["person"+id]);
  // }

  Object.keys(req.body).forEach(item =>{
    content["person"+id][item]=req.body[item]; 
  })

  writeFile("persons.json",JSON.stringify(content));

  res.send(content["person"+id]);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function writeFile(path,data){
  fs.writeFileSync(path,data);

}