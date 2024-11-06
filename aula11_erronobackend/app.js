
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const path = require('path');
const linkRoute = require('./routes/linkRoute')


// Tirar o require do template


mongoose.connect('mongodb://localhost/newlinks');

let db = mongoose.connection;

db.on("error", () => { console.log('houve um erro') });
db.once("open", () => { console.log('Banco carregado') });

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'templates'))

// Agora basta colocar um link pra
// página de vendas do curso dele

app.use('/', linkRoute)

app.listen(port, () => {
    console.log('Server running on port:', port);
})



