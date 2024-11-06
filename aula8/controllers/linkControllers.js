
const Link = require('../models/Link');

const redirect = async (req, res) => {
    let title = req.params.title;

    try{
        let doc = await Link.findOne({ title })
        console.log(doc);
        res.send(doc.url);
    }catch(error){
        res.send("Houve um error");
    }
}

module.exports = { redirect }