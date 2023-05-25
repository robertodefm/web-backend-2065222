const express = require('express')
const Sequelize = require('sequelize')

const app = express()
const port = 3000;

//Middleware que converte o BODY para JSON
app.use(express.json());

app.listen(port, () => {
    console.log("Server is running");
})

const sequelize = new Sequelize('ficha9_backend', 'root', '', {
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => {
        console.log("Connection has been established");
    })
    .catch(err => {
        console.error("Unable to connect", err);
    })

const Person = sequelize.define('person', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING
    },
    profession: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.INTEGER
    }
}, {
    //options
});

sequelize.sync({ force: false })
    .then(() => {
        console.log('Database & tables created!');
    }).then(function () {
        return Person.findAll();
    }).then(function (persons) {
        console.log(persons);
    });

// Person.bulkCreate([
//     { firstName: 'Roberto', lastName: 'Moniz', profession: 'student', age: 27 },
//     { firstName: 'Saul', lastName: 'Abreu', profession: 'student', age: 22 },
//     { firstName: 'Miguel', lastName: 'Peñaranda', profession: 'student', age: 20 },
//     { firstName: 'Jackeline', lastName: 'Camara', profession: 'student', age: 18 }
// ]).then(function () {
//     return Person.findAll();
// }).then(function (persons) {
//     console.log(persons);
// });

app.get('/', function (req, res, next) {

    Person.findAll()
        .then((people) => {
            res.json(people);
        })
        .catch((err) => {
            console.log("Error", err);
            res.status(500).json({ error: "Error retrieving people" });
        });

});

app.post('/', (req, res, next) => {

    Person.create(req.body)
        .then((people)=>{
            res.json("Person create, ID: "+people.id);
        })
        .catch((err)=>{
            console.log("Error", err);
            res.status(500).json({ error: "Error creating person" });
        })
})

app.delete('/', function (req, res, next) {
    var id = req.body.id;
    Person.destroy({
        where: {
            id: id
        }
    }).then(()=>{
        res.json()
    })
});

app.delete('/:id', function (req, res, next) {
    var id = req.params.id;
    Person.destroy({
        where: {
            id: id
        }
    }).then(()=>{
        res.json()
    })
});


app.get('/:id', function (req, res, next) {
    var id = req.params.id;
    connection.query("SELECT * FROM persons WHERE id = ?", id, (err, results, fields) => {
        res.json(results);
    })
});






app.get('/:age/:profession', function (req, res, next) {
    var age = req.params.age;
    var profession = req.params.profession;
    connection.query("SELECT * FROM persons WHERE age = ? AND profession = ?", [age, profession], (err, results, fields) => {
        res.send(results);
    })
});


app.put('/:id', function (req, res, next) {
    var id = req.params.id;
    var person = req.body;
    connection.query('UPDATE persons SET ? WHERE id = ?', [person, id], (err, results, fields) => {
        if (err) {
            res.status(500).end("Error while performing query.")
        }
        else if (results.affectedRows == 0) {
            res.status(400).end("Details not valid");
        } else {

            res.send(results);
        }
    })
})
