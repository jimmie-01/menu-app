const router = require('express').Router();
const controllers = require('../../controllers/mainController');

router.get('/', controllers.get_home_page);
router.get('/about', controllers.get_about);

module.exports = router;