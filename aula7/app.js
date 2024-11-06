
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/newlinks');



const linkSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: String,
    url: String,
    click: {type: Number, required: true}
})

const Link = mongoose.model('Link', linkSchema)

let db = mongoose.connection;

// link.save().then((doc) => {
//     console.log(doc);
// }).catch((error) => {
//     console.log(error);
// })



db.on("error", () => {
    console.log('houve um erro');
});

db.once("open", () => {
    console.log('Banco carregado');

        // app.get('/:title', (req, res) => {
        //     let title = req.params.title;
        // Link.find({title: title}).then(doc => {
        // Link.find({title}).then(doc => {
        //     // console.log(doc)
        //     // res.send(doc);
        // })

    app.get('/:title', async (req, res) => {
    
        let title = req.params.title;

        try{
            let doc = await Link.findOne({ title })
            // let doc = await Link.findOne({ title: 0 })
            // let doc = await Link.findOne({ click: 'teste' })
            res.send(doc.url);
        }catch(error){
            // res.send(error);
            res.send("Houve um error");
        }
    })
});








app.listen(port, () => {
    console.log('Server running on port:', port);
})



