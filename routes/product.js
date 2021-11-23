var express = require('express');
var router = express.Router();
var db = require('../public/javascripts/db')



router.get('/', function(req, res, next){
    
    
    db.query('SELECT * FROM products', function (error, results, fields) {
        if (error) throw error;


        

        console.log(results)


        res.render('product',{
            title:'Products',
            products: results
            
    
        });
    });

});

module.exports = router;    