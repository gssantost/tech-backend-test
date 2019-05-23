const express = require('express');
const { userController } = require('../controllers');
const validate = require('../middleware/validate');

const router = express.Router();

router.get('/', userController.get);
router.post('/', validate, userController.post);

module.exports = router;