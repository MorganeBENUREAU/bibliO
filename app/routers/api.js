const express = require('express');

const apiController = require('../controllers/api');
const userController = require('../controllers/user');
const bookController = require('../controllers/book');
const authorController = require('../controllers/author');
const genreController = require('../controllers/genre');
const publisherController = require('../controllers/publisher');


const router = express.Router();

router.route('/login')
    .get(userController.login)
    .post(userController.checkLogin);

router.route('/signup')
    .get(userController.register)
    .post(userController.registerSave);

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


router.route('/publishers')
    .get(publisherController.allPublisherList)
    .post(publisherController.add);
 
router.route('/publishers/:id(\\d+)')
    .get(publisherController.getOnePublisher)
    .put(publisherController.update)
    .delete(publisherController.delete);

    
router.use(apiController.notFoundResource);



module.exports = router;