const expressEjsLayouts = require("express-ejs-layouts");

const adminLayout = '../views/layouts/admin';

/**
 * GET /
 * Dashboard - Admin Page
 */

module.exports.get_dashboard = (req, res) => {
	res.render('admin/dashboard', { layout: adminLayout });
};

/**
 * GET /
 * Dashboard -  Add Item Page
 */

module.exports.get_item = (req, res) => {
	res.render('admin/add_items',
		{
			layout: adminLayout
		}
	);
};