
const express = require('express');
const router = express.Router()

const linkController = require('../controllers/linkControllers')

// se colocar em ordem dif title e all, ele tenta
// ver se all é um titulo e vai retornar vazio
// o problema dessa abordagem é se criarmos
// uma rota com o all, mudar mesmo a ordem

// depois de deletar todos, pode ver pelo
// insomnia ou pelo navegador

// outra maneira de apagar

// passar o id pelo insomnia
// camp id e passar o id

router.get('/all', linkController.all)

router.get('/:title', linkController.redirect)

router.get('/', (req, res) => res.render('index', { error: false, body: {} }));

router.post('/', express.urlencoded( extended: true ), linkController.addLink);

router.delete('/:id', linkController.deleteLink);

router.delete('/', express.urlencoded( extended: true ), linkController.deleteLink)

module.exports = router

