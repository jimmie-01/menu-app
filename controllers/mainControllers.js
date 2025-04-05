
/**
 * GET /
 * Home - Home Page
 */

module.exports.get_home_page = (req, res) => {
	res.render('home');
}


/**
 * GET /
 * Main - About Page
 */

module.exports.get_about = (req, res) => {
	res.render('about');
}

/**
 * GET /
 * Main - Menu Page
 */

module.exports.get_menu = (req, res) => {
	res.render('menu');
}
