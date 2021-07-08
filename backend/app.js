const express = require('express');
const { PORT = 3001 } = process.env;
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
const sendEmail = require('./routes/sendEmail');

app.use('/', sendEmail);

app.listen(PORT, () => {
	// Если всё работает, консоль покажет, какой порт приложение слушает
	console.log(`App listening on port ${PORT}`);
});
