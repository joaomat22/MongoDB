
const express = require('express');
const router = express.Router()

const linkController = require('../controllers/linkController')

// se colocar em ordem dif title e all, ele tenta
// ver se all é um titulo e vai retornar vazio
// o problema dessa abordagem é se criarmos
// uma rota com o all, mudar mesmo a ordem

router.get('/all', linkController.all)

router.get('/:title', linkController.redirect)




router.get('/', (req, res) => res.render('index', { error: false, body: {} }));

router.post('/', express.urlencoded( extended: true ), linkController.addLink);

module.exports = router

