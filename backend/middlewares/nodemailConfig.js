const nodemailer = require('nodemailer');

module.exports.nodemailConfig = (req, res, next) => {
	
	const { name, phone, email, title } = req.body;

    console.log(name, phone, email, title)

	const content = `Спасибо за заказ ${name} \n ${phone} \n ${email} \n Ваш заказ: ${title} `;
	
	const transporter = nodemailer.createTransport({
		host: 'smtp.mailtrap.io', // https://mailtrap.io/ fake smtp server for test
		port: 2525,
		secure: false,
		auth: {
			user: 'f1530c1e8f7c95',
			pass: 'a34225305257e6',
		},
	});

	const mailOptions = {
		from: email,
		to: email,
		subject: 'test email message',
		text: content,
	};

	transporter
		.sendMail(mailOptions)
		.then(() => res.send({ message: 'Ok' }))
		.catch((err) => {
			console.log(err.message);
		})
};
