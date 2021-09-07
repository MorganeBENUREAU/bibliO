const express = require('express');

const { bookController } = require('../controllers');

const router = express.Router();


router.route('/book')
    .get(bookController.allBookList)
    .post(bookController.add);

router.route('/book/:id(\\d+)')
    .get(bookController.getOneBook)
    // .patch(bookController.update)
    .put(bookController.update)
    .delete(bookController.delete);


module.exports = router;