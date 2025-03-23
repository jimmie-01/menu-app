
/**
 * GET /
 * Home - Home Page
 */

module.exports.get_home_page = (req, res) => {
	res.render('home');
}