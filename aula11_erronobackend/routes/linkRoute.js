
const express = require('express');
const router = express.Router()

const linkController = require('../controllers/linkController')

router.get('/:title', linkController.redirect)

router.get('/', (req, res) => res.render('index', { error: false, body: {} }));

router.post('/', express.urlencoded( extended: true ), linkController.addLink);

// criar um form, nome e valor
// title insta
// url https do insta
// description Link para o insta
// basta usar o get para pegar o
// insta

module.exports = router

