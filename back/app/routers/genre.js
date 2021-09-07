const express = require('express');

const { genreController } = require('../controllers');

const router = express.Router();


router.route('/genre')
    .get(genreController.allGenreList)
    .post(genreController.add);
 
router.route('/genre/:id(\\d+)')
    .get(genreController.getOneGenre)
    .put(genreController.update)
    .delete(genreController.delete);
    

module.exports = router;