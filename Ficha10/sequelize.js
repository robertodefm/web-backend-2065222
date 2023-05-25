const {Sequelize,DataTypes} = require('sequelize')


const UserDataModel = require('./Models/Users')
const BookDataModel = require('./Models/Books')
const LoanDataModel = require('./Models/Loans')

//Connect to the database
const sequelize = new Sequelize('ficha10_backend', 'root', '', {
    dialect: 'mysql'
});

const User = UserDataModel(sequelize,DataTypes);
const Book = BookDataModel(sequelize,DataTypes);
const Loan = LoanDataModel(sequelize,DataTypes);

//Define relationships
User.hasMany(Loan);
Loan.belongsTo(User);

Book.hasMany(Loan, {onDelete: 'CASCADE'});
Loan.belongsTo(Book);

sequelize.authenticate()
    .then(() => {
        console.log("Connection has been established");
    })
    .catch(err => {
        console.error("Unable to connect", err);
    })

User.create({firstName:"Test"}).then((results)=>{
    console.log(results);
});

Book.create({title:"Test"});
Loan.bulkCreate(
    [
        {
            loan_date: "physicians formula",
            userId: 1,
            BookId:1
        }]);

// sequelize.sync({ force: false })
// .then(() => {
//     console.log('Database & tables created!');
// }).then(function () {
//     return Person.findAll();
// }).then(function (persons) {
//     console.log(persons);
// });

module.exports={
    User, Book, Loan
}