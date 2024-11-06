
const express = require('express');
const router = express.Router();

const methodOverride = require('method-override');
router.use(methodOverride('_method'));

const linkController = require('../controllers/linkControllers');



router.get('/all', linkController.all)

router.get('/:title', linkController.redirect)

router.get('/add', (req, res) => res.render('index', { error: false, body: {} }));

router.post('/', express.urlencoded( extended: true ), linkController.addLink);

router.delete('/:id', express.urlencoded({ extended: true }),linkController.deleteLink);

// router.delete('/', express.urlencoded( extended: true ), linkController.deleteLink)
router.delete('/', express.json(), linkController.deleteLink)

module.exports = router

