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
  return res.status(400).send("Details not valid");
}
else{
  var rentals = req.body;
  connection.query('INSERT INTO rentals SET ?',rentals,(err,results)=>{
    res.status(200).end("Aluguer adicionado com sucesso, ID: " + results.insertId);
  })
}
});

// c. Selecionar todos os alugueres de um determinado cliente e devolver essa lista na resposta. (2
//   valores)
  
router.get('/:customer', function(req, res, next) {
    var customer = decodeURIComponent(req.params.customer);
    connection.query("SELECT * FROM rentals WHERE customer LIKE ?","%"+customer+"%",(err,results,fields)=>{
        if (err) {
          return res.status(500).send('Erro na consulta');
        };
        if (results.length==0){
          return res.status(404).send('Customer não existe');
        }
        res.send(results);
    })
  });

// d. Aplicar um desconto em percentagem no preço de um aluguer (via params) e atualizar a entrada.
// Devolver a entrada atualizada na resposta. (2 valores)

router.put('/:id/:discount', function(req, res, next) {
  var id = req.params.id;
  var discount = req.params.discount/100;
  connection.query("SELECT * FROM rentals WHERE rentals_id = ?",[id],(err,results,fields)=>{
      if (err) {
        return res.status(500).send('Erro na consulta');
      };
      if (results.length === 0) {
        return res.status(404).send('Aluguer não existe');
      };
      var rental = results[0];
      var price = rental.price;
      var totalDiscount = price * discount;
      var newPrice = price-totalDiscount;

      connection.query("UPDATE rentals SET price = ? WHERE rentals_id = ?",[newPrice,id],(err,results)=>{
        if (err) {
          return res.status(500).send('Erro ao atualizar o aluguer');
        };
        
        connection.query("SELECT * FROM rentals WHERE rentals_id = ?",[id],(err,results,fields)=>{
          if (err) {
            return res.status(500).send('Erro na consulta');
          };
          res.send(results);
        });
      });
  });
});

// e. Listar todos os alugueres anteriores a uma determinada data (via body) e devolver a lista na
// resposta. (2 valores)

router.post('/date', function(req, res, next) {
  var date = req.body.date;
  connection.query("SELECT * FROM rentals WHERE DATE(pickup_date) <= ?",[date],(err,results,fields)=>{
    if (err) {
      return res.status(500).send('Error en la consulta');
    };
    if (results.length === 0) {
      return res.status(404).send('Não existe aluguer antes da data selecionada');
    };
    res.send(results);
  });
});

// PARTE B


//I.
router.get('/byid/:id', function(req, res, next) {
var id = req.params.id;
connection.query('SELECT * FROM rentals WHERE rentals_id = ?', [id], (err, results) => {
  res.send(results);
});
});

//II.
router.delete('/:id', function(req, res, next) {
var id = req.params.id;
connection.query('DELETE FROM rentals WHERE rentals_id = ?', [id], (err, results) => {
  if (err) {
    res.status(500).send(err.message);
  } else if (results.affectedRows === 0) {
    res.status(404).send('O aluguer com o ID ' + id + ' não existe');
  } else {
    res.status(200).send('O aluguer com o ID ' + id + ' foi apagado com sucesso');
  }
});
});

// III.
router.get('/location/:localizacao_entrega', function(req, res, next) {
  var localizacao_entrega = req.params.localizacao_entrega;
  connection.query('SELECT * FROM rentals WHERE return_location = ?', [localizacao_entrega], (err, results) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      if (results.length === 0) {
        res.status(404).send('El lugar de recogida "' + localizacao_entrega + '" no existe');
      } else {
        res.send(results);
      }
    }
  });
});


// IV.
router.put('/comentarios/adicionar/:id', function(req, res, next) {
  var id = req.params.id;
  connection.query('SELECT comments FROM rentals WHERE rentals_id = ?', id, (err, results) => {
    if (err) {
      res.status(500).send('Error na consulta de SQL');
    } else if (Object.keys(req.body).length == 0) {
      res.status(404).send('O body esta vazio, insira um comentario');
    } else if (results.length == 0) {
      res.status(400).send('El ID ' + id + ' no existe');
    } else {
      var currentComment = results[0].comments;
      var updatedComment = currentComment + ', ' + req.body.comments;
      
      connection.query('UPDATE rentals SET comments = ? WHERE rentals_id = ?', [updatedComment, id], (err) => {
        if (err) {
          res.status(500).send('Error al actualizar el comentario');
        } else {
          connection.query('SELECT comments FROM rentals WHERE rentals_id = ?', [id], (err, results) => {
            if (err) {
              res.status(500).send('Error en la consulta SQL');
            } else {
              var commentResult = {
                comments: results[0].comments
              };
              res.status(200).send(commentResult);
            }
          });
        }
      });
    }
  });  
});

// V.
router.get('/price/ordered', function(req, res, next) {
connection.query('SELECT * FROM rentals ', (err, results) => {      
    res.send(results.sort(function(a, b) {
      return b.price - a.price;
    }));      
  }
);
});


module.exports = router;
