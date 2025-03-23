const express = require('express');
const dotenv = require('dotenv');
const mainRoutes = require('./server/routes/routes');

const expressLayout = require('express-ejs-layouts');

dotenv.config();

const app = express();
const PORT = 5000 || process.env.PORT;


//Template Engines
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


app.use('', mainRoutes);


app.listen(PORT, () => {
	console.log(`App Listening For Request On Port ${PORT}`);
});