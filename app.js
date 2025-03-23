const express = require('express');
const dotenv = require('dotenv');
const mainRoutes = require('./server/routes/routes');

dotenv.config();

const app = express();
const PORT = 5000 || process.env.PORT;


app.use('', mainRoutes);


app.listen(PORT, () => {
	console.log(`App Listening For Request On Port ${PORT}`);
});