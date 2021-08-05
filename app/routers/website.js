const express = require('express');

const websiteController = require('../controllers/website');


const router = express.Router();

router.use((request, response, next) => {
    // On charge dans les locals le contenu de la session pour le rendre accessible aux vues.
    response.locals.user = request.session.user;
    console.log(response.locals.user, request.session.user);
    next();
});

router.get('/', websiteController.homePage);


router.use(websiteController.notFoundPage);

module.exports = router;