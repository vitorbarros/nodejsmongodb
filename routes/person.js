var express = require('express');
var router = express.Router();
var Person = require('./../models/Person');

//findall
router.get('/', function(req,res){
    Person.find({}, function(err, people){
        if(err){
            return;
        }
        res.send(people);
    });
});
//findById
router.get('/:id', function(req,res){
    Person.findById(req.params.id, function(err, person){
        if(err){
            return;
        }
        res.send(person);
    });
});
//create
router.post('/', function(req, res){
    var person = new Person({
        name: {
            firstName: "Loco",
            lastName: "Abreu"
        },
        age: 24
    });
    person.save(function(err, person){
        if(err){
            return;
        }
        res.send(person);
    })
});

//update
router.put('/:id', function(req, res){
    Person.findOneAndUpdate({
        _id: req.params.id,
    },{
        name: {
            firstName: 'Vitor',
            lastName: 'Barros'
        }
    }, function(err, person){
        if(err){
            return;
        }
        res.send(person);
    })
});

//delete
router.delete('/:id', function(req, res){
    Person.findOneAndRemove({
        _id: req.params.id
    }, function(err){
        if(err){
            return;
        }
        res.send(req.params);
    })
});

module.exports = router;
