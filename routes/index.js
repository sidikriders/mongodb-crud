var express = require('express');
var router = express.Router();
var fung = require('../controller/mongoController.js')

/* GET home page. */
router.get('/books', fung.findAllBooks);

router.get('/trans', fung.findAllTrans);

router.get('/cust', fung.findAllCust);

router.post('/books', fung.addBooks);

router.get('/books/:id', fung.findBooksById);

router.put('/books/:id', fung.updateBooksbyId);

router.delete('/books/:id', fung.deleteBookByID);

module.exports = router;
