const express = require('express');
const dotenv = require('dotenv');
const mainRoutes = require('./server/routes/routes');
const dashBoardRoutes = require('./server/routes/dashboard');

const expressLayout = require('express-ejs-layouts');
const connectDB = require('./server/config/db');

dotenv.config();

const app = express();
const PORT = 5000 || process.env.PORT;

// Connect Database
connectDB();

app.use(express.static('public'));


//Template Engines
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


app.use('', mainRoutes);
app.use('', dashBoardRoutes);


app.listen(PORT, () => {
	console.log(`App Listening For Request On Port ${PORT}`);
});