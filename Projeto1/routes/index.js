var express = require('express');
const { connect } = require('./rentals');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.put('/:id',(req,res,next)=>{
  var id = req.params.id;
  var name = req.body.name;

  connect.query('SELECT * from rentals where id = ? and name =? ',[id,name], function(err,results,fields){
    res.status(202).send('results')
  })


})

module.exports = router;
