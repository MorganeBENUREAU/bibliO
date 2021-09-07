const express = require('express');

const { authorController } = require('../controllers');

const router = express.Router();


router.route('/author')
    .get(authorController.allAuthorList)
    .post(authorController.add);
 
router.route('/author/:id(\\d+)')
    .get(authorController.getOneAuthor)
    .put(authorController.update)
    .delete(authorController.delete);
    

module.exports = router;