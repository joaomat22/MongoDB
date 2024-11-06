
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

// const linkSchema = new mongoose.Schema({
//     title: String,
//     description: String,
//     url: String,
//     click: Number
// })

// // const LinkModel =
// const Link = mongoose.model('Link', linkSchema)

// let link = new Link({
//     title: "progbr",
//     description: "Link para o twitter",
//     url: "localhost:3000/public/",
//     click: 0
// })

// link.save().then((doc) => {
//     console.log(doc);
// }).catch((error) => {
//     console.log(error);
// })



// const personSchema = new mongoose.Schema({
//     title: String,
//     description: String,
//     url: String,
//     click: Number
// })


// const Link = mongoose.model('Link', linkSchema)

// let link = new Link({
//     title: "progbr",
//     description: "Link para o twitter",
//     url: "localhost:3000/public/",
//     click: 0
// })

// link.save().then((doc) => {
//     console.log(doc);
// }).catch((error) => {
//     console.log(error);
// })



const linkSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: String,
    url: String,
    click: {type: Number, required: true}
})

// const LinkModel =
const Link = mongoose.model('Link', linkSchema)

let link = new Link({
    title: "progbr",
    description: "Link para o twitter",
    url: "localhost:3000/public/",
    click: 0
})

link.save().then((doc) => {
    console.log(doc);
}).catch((error) => {
    console.log(error);
})


mongoose.connect('mongodb://localhost/newlinks');

let db = mongoose.connection;


db.on("error", () => {
    console.log('houve um erro');
});

db.once("open", () => {
    console.log('Banco carregado');
});




app.get('/', (req, res) => res.send('Hello World'))

app.listen(port, () => {
    console.log('Server running on port:', port);
})



