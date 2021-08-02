const express = require('express');

const apiController = require('../controllers/api');
const bookController = require('../controllers/book');
const authorController = require('../controllers/author');
const genreController = require('../controllers/genre');


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


router.route('/genres')
    .get(genreController.allGenreList)
    .post(genreController.add);
 
router.route('/genres/:id(\\d+)')
    .get(genreController.getOneGenre)
    .put(genreController.update)
    .delete(genreController.delete);



router.use(apiController.notFoundResource);



module.exports = router;