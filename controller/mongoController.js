var MongoClient = require('mongodb').MongoClient
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost/library';

// tambah buku
function addBooks(req, res, next) {
  MongoClient.connect(url, function(err, db) {
    db.collection('books').insertOne(req.body, (err, records) => {
      db.close()
      res.send(records)
    })
  })
}

//tambah transaksi
function addTrans(req, res, next) {
  MongoClient.connect(url, function(err, db) {
    db.collection('transactions').insertOne(req.body, (err, records) => {
      db.close()
      res.send(records)
    })
  })
}

//tambah customer
function addCust(req, res, next) {
  MongoClient.connect(url, function(err, db) {
    db.collection('customers').insertOne(req.body, (err, records) => {
      db.close()
      res.send(records)
    })
  })
}

//find all books
function findAllBooks(req, res, next) {
  MongoClient.connect(url, function(err, db) {
    db.collection('books').find({}).toArray((err, docs) => {
      if (err) {
        console.log(err)
      } else if (docs) {
        res.json(docs)
        db.close()
      } else {
        res.send('masih kosong')
        db.close()
      }
    })
  })
}

//find all transactions
function findAllTrans(req, res, next) {
  MongoClient.connect(url, function (err, db) {
    db.collection('transactions').find().toArray((err, docs) => {
      if (err) {
        console.log(err)
      } else if (docs) {
        if (docs.length<1) {
          res.send('transaksi masih kosong')
          db.close()
        } else {
          res.json(docs)
          db.close
        }
      }
    })
  })
}

//find all customers
function findAllCust(req, res, next) {
  MongoClient.connect(url, function(err, db) {
    db.collection('customers').find().toArray( (err, docs) => {
      if (err) {
        console.log(err)
      } else if (docs) {
        if (docs.length < 1) {
          res.send('Customer masih kosong')
          db.close()
        } else {
          res.json(docs)
          db.close
        }
      }
    })
  })
}

//find books by id
function findBooksById(req, res, next) {
  MongoClient.connect(url, function(err, db) {
    db.collection('books').findOne({
      _id: new ObjectId(req.params.id)
    }, (err, docs) => {
      res.send(docs)
      db.close()
    })
  })
}

// update books
function updateBooksbyId(req, res, next) {
  MongoClient.connect(url, function(err, db) {
    db.collection('books').findOneAndUpdate({
      _id: new ObjectId(req.params.id)
    }, req.body, (err, docs) => {
      if (err) {
        res.send('ERROR!!\n' + err)
        db.close()
      } else {
        res.send('sudah terupdate!!\n' + docs)
        db.close()
      }
    })
  })
}

function deleteBookByID(req, res, next) {
  MongoClient.connect(url, function(err, db) {
    db.collection('books').deleteOne({
      _id: new ObjectId(req.params.id)
    }, (err, result) => {
      if (err) {
        res.send('ERROR!!\n' + err)
        db.close()
      } else {
        res.send(`${result} sudah terhapus!`)
        db.close()
      }
    })
  })
}

module.exports = {
  addBooks,
  addTrans,
  addCust,
  findAllBooks,
  findAllTrans,
  findAllCust,
  findBooksById,
  updateBooksbyId,
  deleteBookByID
}
