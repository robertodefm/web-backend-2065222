const Loan = require('../sequelize.js').Loan;

exports.getAllLoans = (req, res, next)=>{
    Loan.findAll().then(results =>{
        res.send(results);
    });
}

exports.getLoanById = (req, res, next)=>{
    Loan.findByPk(req.params.id).then(results =>{
        res.send(results);
    });
}

exports.deleteLoanById = (req, res, next)=>{
    var id= req.params.id;
    Loan.destoy({
        where: {
            id:id
        }
    }).then(results)=>{
        res.send("Loan com o id "+id+"eliminado")
    }
};

exports.updateLoanById = (req, res, next)=>{
    var id= req.params.id;
    var details = req.body;

    Loan.update({ return_date: details.return_date },{
        where: {
            id:id
        }
    }).then((results) =>{
        res.send(results);
    });
};