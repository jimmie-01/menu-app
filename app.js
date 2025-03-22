const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = 5000 || process.env.PORT;


app.get('/', (req, res) => {
	res.send('You are On ');
});


app.listen(PORT, () => {
	console.log(`App Listening For Request On Port ${PORT}`);
});