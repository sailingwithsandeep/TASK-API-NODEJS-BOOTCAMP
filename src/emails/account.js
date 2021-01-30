const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: "sparmar586@rku.ac.in",
		subject: "Welcome to the app",
		text: `Hey, ${name} Let me know how you get along with the app`,
	});
};

const sendCancellationEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: "sparmar586@rku.ac.in",
		subject: "Sorry to see you go!",
		text: `Goodbye ${name}. See you soon `,
	});
};

module.exports = {
	sendWelcomeEmail,
	sendCancellationEmail,
};
