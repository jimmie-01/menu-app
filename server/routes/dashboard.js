const router = require('express').Router();
const controllers = require('../../controllers/dashboardControllers');

router.get('/dashboard', controllers.get_dashboard);

module.exports = router;