var express = require('express');
var mysql = require('mysql');
var router = express.Router();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ficha7_backend'
});

/**
 * @swagger
 * definitions:
 *   Persons:
 *     required:
 *       - firstname
 *       - lastname
 *     properties:
 *       firstname:
 *         type: string
 *       lastname:
 *         type: string
 *       age:
 *         type: int
 *       profession:
 *         type: string
 */


/**
 * @openapi
 * /persons:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get('/', function(req, res, next) {

  connection.query("SELECT * FROM persons",(err,results,fields)=>{
    res.send(results);
  })
});

/**
 * @openapi
 * /persons/{id}:
 *   get:
 *      tags:
 *        - Person
 *      summary: Reads a single person by id 
 *      description: Returns a single person
 *      produces:
 *        - aplication/json
 *      parameters:
 *        - name: id
 *          description: Person´s id
 *          in: path
 *          required: true
 *          type: int 
 * 
 *      responses:
 *        200:
 *          description: A single person.
 *          schema:
 *            $ref: '#/definitions/Person'
 *        
 */

router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    connection.query("SELECT * FROM persons WHERE id = ?",id,(err,results,fields)=>{
        res.send(results);
    })
  });

/**
 * @openapi
 * /persons/{id}:
 *   delete:
 *      tags:
 *        - Person
 *      summary: Delete a single person by id 
 *      description: Returns a single person
 *      produces:
 *        - aplication/json
 *      parameters:
 *        - name: id
 *          description: Person´s id
 *          in: path
 *          required: true
 *          type: int 
 * 
 *      responses:
 *        200:
 *          description: A single person.
 *          schema:
 *            $ref: '#/definitions/Person'
 *        
 */

router.delete('/:id', function(req, res, next) {
  var id = req.params.id;
  connection.query("DELETE FROM persons WHERE id = ?",[id],(err,results,fields)=>{
      res.send(results);
  })
});

/**
 * @openapi
 * /persons/{age}:/{profession}::
 *   get:
 *      tags:
 *        - Person
 *      summary: Reads persons by age and profession.
 *      description: Returns a single person
 *      produces:
 *        - aplication/json
 *      parameters:
 *        - name: age
 *          description: Person´s age
 *          in: path
 *          required: true
 *          type: int 
 *        - name: profession
 *          description: Person´s profession
 *          in: path
 *          required: true
 *          type: str 
 * 
 *      responses:
 *        200:
 *          description: A single person.
 *          schema:
 *            $ref: '#/definitions/Person'
 *        
 */

router.get('/:age/:profession', function(req, res, next) {
  var age = req.params.age;
  var profession = req.params.profession;
  connection.query("SELECT * FROM persons WHERE age = ? AND profession = ?",[age,profession],(err,results,fields)=>{
      res.send(results);
  })
});

router.post('/', (req, res,next) => {

  console.log('test')

if (Object.keys(req.body).length==0){
    res.status(400).send("Details not valid");
}
else{
  console.log('test2')
    var person = req.body;
    connection.query('INSERT INTO persons SET ?',person,(err,results)=>{
      res.send(results);
  })
}
})

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
