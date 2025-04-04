const router = require('express').Router();

router.get('/dashboard', controllers.get_dashboard);

module.exports = router;