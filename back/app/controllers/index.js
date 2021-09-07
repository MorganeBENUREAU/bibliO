const userController = require('./user');
const errorController = require('./404');
const authorController = require('./author');
const bookController = require('./book');
const genreController = require('./genre');
const publisherController = require('./publisher');

module.exports = {
    userController,
    errorController,
    authorController,
    bookController,
    genreController,
    publisherController
};