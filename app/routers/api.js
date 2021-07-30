const express = require('express');

const bookController = require('../controllers/book');
const apiController = require('../controllers/api');


const router = express.Router();

router.route('/books')
    .get(bookController.allBookList)
    .post(bookController.add);


router.route('/books/:id(\\d+)')
    .get(bookController.getOneBook)
    .patch(bookController.update)
    .put(bookController.update)
    .delete(bookController.delete);


    
router.use(apiController.notFoundResource);



module.exports = router;