const express = require("express");
const Sequelize = require("sequelize");
// const swaggerUi = require('swagger-ui-express');
const app = express();
const port = 3000;
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());

app.listen(port, () => {
  console.log("server is running");
});

const sequelize = new Sequelize("ficha9_backend", "root", "", {
  dialect: "mysql",
});

sequelize
  .sync({force:false})
  .then(() => {
    console.log("connection has been established");
  })
  .catch((err) => {
    console.log("Unable to connect", err);
  });

const Person = sequelize.define("person", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
    // allowNull:false
  },
  profession: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  }
});

// comentar o bulkCreate para criar primero a tabela
// Person.bulkCreate([
//   { firstName: "Saul", lastName: "De Abreu", profession: "engineer", age: 23 },
//   { firstName: "Ricardo", lastName: "Sousa", profession: "farmer", age: 26 },
//   { firstName: "Roberto", lastName: "Moniz", profession: "photographer", age: 29,},
//   { firstName: "Jack", lastName: "Camara", profession: "physician", age: 31 },
//   { firstName: "Miguel", lastName: "Penaranda", profession: "pilot", age: 34 }
// ]);

app.get("/", function (req, res, next) {
    var id = req.query.id;

    if (id==undefined){
        Person.findAll()
          .then((people) => {
            res.json(people);
        })
        
    }else{
        Person.findByPk(id)
        .then((results)=>{
            if (results==null){
                res.status(500).json("ID not exist");
            }else{

                res.json(results)
            }
        })
        
    }
   
});

app.post("/", function (req, res, next) {
    Person.create({ firstName: req.body.firstName, lastName: req.body.lastName, age: req.body.age})
      .then((people) => {
        res.json("id criado: "+people.id);
      })
      .catch((err) => {
        console.log("Error:", err);
        res.status(500).json({ error: "Error retrieving people" });
      });
  });


app.delete("/", function (req, res, next) {
    Person.destroy({
        where: {
            id: req.body.id
        }
    }).then((affectRows)=>{
        if (affectRows==1){
            res.status(200).json("Delete OK!")
        }else{
            res.status(500).json("Person not found!")
        }
    })
});

app.delete("/:id", function (req, res, next) {
  var id = req.params.id;
    Person.destroy({
        where: {
            id: id
        }
    }).then((affectRows)=>{
            if (affectRows==1){
                res.status(200).json("Delete OK!")
            }else{
                res.status(500).json("Person not found!")
            }
        })
        .catch((err) => {
            console.log("Error:", err);
            res.status(500).json(err);
        });
});

app.get("/", function (req, res, next) {

});


app.get("/:Age/:Profession", function (req, res, next) {});

app.put("/:id", function (req, res, next) {});