const router = require('express').Router();
const controllers = require('../../controllers/mainController');


router.get('/', controllers.get_home_page);

module.exports = router;