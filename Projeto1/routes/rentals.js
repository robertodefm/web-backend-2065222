var express = require('express');
var mysql = require('mysql')
var router = express.Router();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'projeto1_backend'
});

// PARTE A

// a. Listar todos os alugueres existentes na tabela e devolver na resposta. (1 valor)

router.get('/', function(req, res, next) {

    connection.query("SELECT * FROM rentals",(err,results,fields)=>{
    res.send(results);
  })
});

// b. Adicionar um novo aluguer à base de dados. Deverá ser enviada uma mensagem de sucesso na
// resposta indicando o ID do aluguer adicionado. (2 valores)

router.post('/', (req, res,next) => {

if (Object.keys(req.body).length==0){
    res.status(400).send("Details not valid");
}
else{
    var rentals = req.body;
    connection.query('INSERT INTO rentals SET ?',rentals,(err,results)=>{
      res.send(results);
  })
}
});

// c. Selecionar todos os alugueres de um determinado cliente e devolver essa lista na resposta. (2
//   valores)
  
router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    connection.query("SELECT * FROM persons WHERE id = ?",id,(err,results,fields)=>{
        res.send(results);
    })
  });

// d. Aplicar um desconto em percentagem no preço de um aluguer (via params) e atualizar a entrada.
// Devolver a entrada atualizada na resposta. (2 valores)

router.delete('/:id', function(req, res, next) {
  var id = req.params.id;
  connection.query("DELETE FROM persons WHERE id = ?",[id],(err,results,fields)=>{
      res.send(results);
  })
});

// e. Listar todos os alugueres anteriores a uma determinada data (via body) e devolver a lista na
// resposta. (2 valores)

router.get('/:age/:profession', function(req, res, next) {
  var age = req.params.age;
  var profession = req.params.profession;
  connection.query("SELECT * FROM persons WHERE age = ? AND profession = ?",[age,profession],(err,results,fields)=>{
      res.send(results);
  })
});


router.put('/:id', function(req,res,next){
  var id = req.params.id;
  var person = req.body;
  connection.query('UPDATE persons SET ? WHERE id = ?', [person,id],(err,results,fields) =>{
    if (err){
      res.status(500).end("Error while performing query.")
    }
    else if (results.affectedRows == 0) {
      res.status(400).end("Details not valid");
    }else{

      res.send(results);
    }
  })
})

module.exports = router;
