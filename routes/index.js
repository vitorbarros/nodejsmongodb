var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    var arr = [];
    for(var i =0; i < 20; i++){
        arr.push({
            id: i,
            name: 'Vitor ' + i
        });
    }
    res.render('index', {
        title: 'Express',
        data: arr
    });
});

module.exports = router;
