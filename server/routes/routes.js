const router = require('express').Router();
const controllers = require('../../controllers/mainControllers');

router.get('/', controllers.get_home_page);
router.get('/about', controllers.get_about);
router.get('/menu', controllers.get_menu);

module.exports = router;