var express = require('express');
var router = express.Router();
var db = require('../public/javascripts/db');
router.get('/', function(req, res, next){
    res.render('login', {
        title: 'login'
    });


});



module.exports = router;
