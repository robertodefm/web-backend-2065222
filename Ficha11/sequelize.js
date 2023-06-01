// TODO Implement all the models and business logic using sequelize

const {Sequelize,DataTypes} = require('sequelize')

const UserDataModel = require('./models/Users')


//Connect to the database
const sequelize = new Sequelize(process.env.DB_SCHEMA, process.env.DB_USER, '', {
    dialect: 'mysql',
    host:process.env.DB_HOST
});

const User = UserDataModel(sequelize,DataTypes);


sequelize.authenticate()
    .then(() => {
        console.log("Connection has been established");
    })
    .catch(err => {
        console.error("Unable to connect", err);
    })

// User.create({firstName:"Roberto",email:"roberto@gmail.com",password:"123456"}).then((results)=>{
//     console.log(results);
// });


// User.bulkCreate(
//     [
//         {
//             email: "roberto@gmail.com",
//             password: "123456"
//         }]);

sequelize.sync({ force: false })
.then(() => {
    console.log('Database & tables created!');
}).then(function () {
    return User.findAll();
}).then(function (users) {
    console.log(users);
});

module.exports={
    User
}