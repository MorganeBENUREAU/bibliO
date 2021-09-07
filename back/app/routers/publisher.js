const express = require('express');

const { publisherController } = require('../controllers');

const router = express.Router();


router.route('/publisher')
    .get(publisherController.allPublisherList)
    .post(publisherController.add);
 
router.route('/publisher/:id(\\d+)')
    .get(publisherController.getOnePublisher)
    .put(publisherController.update)
    .delete(publisherController.delete);
    

module.exports = router;