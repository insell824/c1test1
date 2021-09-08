var express = require('express');
var router = express.Router();

const APP_TYPE = process.env.APP_TYPE || 'NO_APP_TYPE'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: APP_TYPE });
});

module.exports = router;
