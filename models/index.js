var mongoose = require('mongoose');

//inciando a conexao com o mongodb
db = mongoose.connect('mongodb://localhost/nodejsmongodb').connection;

db.on('open', function(){
    console.log('connected');
});
db.on('error', function(){
    console.log('error');
});

return db;
