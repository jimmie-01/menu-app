const adminLayout = '../views/layouts/admin';

/**
 * GET /
 * Dashboard - Admin Page
 */

module.exports.get_dashboard = (req, res) => {
	res.render('admin/dashboard', { layout: adminLayout });
};
