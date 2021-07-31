const express = require('express');

const bookController = require('../controllers/book');
const apiController = require('../controllers/api');
const authorController = require('../controllers/author');


const router = express.Router();

router.route('/books')
    .get(bookController.allBookList)
    .post(bookController.add);


router.route('/books/:id(\\d+)')
    .get(bookController.getOneBook)
    // .patch(bookController.update)
    .put(bookController.update)
    .delete(bookController.delete);

router.route('/authors')
    .get(authorController.allAuthorList)
    .post(authorController.add);
 
router.route('/authors/:id(\\d+)')
    .get(authorController.getOneAuthor)
    .put(authorController.update)
    .delete(authorController.delete);



router.use(apiController.notFoundResource);



module.exports = router;