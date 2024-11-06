
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');


// mongoose.connect('mongodb://localhost/teste', (error, db) => {
//     console.log(error);
//     console.log(db);
// })
// não funciona por array function



// mongoose.connect('mongodb://localhost/links').then(db => {
//     console.log(db);
// }).catch(error => {
//     console.log(error);
// })


// mongoose.connect('mongodb://localhost/links', { useNewUrlParser: true, useUnifiedTopology: true})

mongoose.connect('mongodb://localhost/links');

let db = mongoose.connection;

// console.log(db)

db.on("error", () => {
    console.log('houve um erro');
});

db.once("open", () => {
    console.log('Banco carregado');
});



// app.get('/', (req, res) => res.send('Hello World'))

app.get('/', (req, res) => res.send('Hello World'))

app.listen(port, () => {
    console.log('Server running on port:', port);
})



