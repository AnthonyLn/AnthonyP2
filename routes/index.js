var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log['asdodo']
  res.render('index', {
     title: 'Informacion Personal',
     FirstName : 'Anthony Enrique',
     LastName : 'Arteaga Daniel',
     Id : '30874360',
     Section : '4'
     });
});

module.exports = router;