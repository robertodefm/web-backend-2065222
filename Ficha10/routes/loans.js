var express = require('express');
var loanController = require('../Controllers/loansController');

var router = express.Router();

/* GET users listing. */
router.get('/', loanController.getAllLoans);
router.get('/:id', loanController.getLoanById);
router.delete('/:id', loanController.deleteLoanById);
// router.post('/', loanController.createLoan);
router.put('/:id', loanController.updateLoanById);


module.exports = router;