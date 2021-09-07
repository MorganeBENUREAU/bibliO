const express = require('express');

const bookRouter = require('./book');
const authorRouter = require('./author');
const genreRouter = require('./genre');
const publisherRouter = require('./publisher');

const { errorController, userController } = require('../controllers');


const router = express.Router();

router.use(bookRouter);

router.use(authorRouter);

router.use(genreRouter);

router.use(publisherRouter);


router.use((request, response, next) => {
    // On charge dans les locals le contenu de la session pour le rendre accessible aux vues.
    response.locals.user = request.session.user;
    // Voir pour utiliser jwt?

    next();
});

router.route('/login')
    .get(userController.login)
    .post(userController.checkLogin);

router.route('/signup')
    .get(userController.register)
    .post(userController.registerSave);

router.get('/logout', userController.logout);

    
router.use(errorController.notFoundResource);



module.exports = router;