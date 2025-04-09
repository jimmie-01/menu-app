const router = require('express').Router();
const controllers = require('../../controllers/dashboardControllers');

router.get('/dashboard', controllers.get_dashboard);
router.get('/add-item', controllers.get_item);

module.exports = router;