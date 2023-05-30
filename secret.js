API_KEY = 'ef5d448bd2c3b06c0a4a1a496e690ff6';
SECRET_KEY = '7a3f1e2bfee12c5307c44edfbf0e5e0c';

window.onload = function () {
	sendEmail('hello', 'teach23tech@gmail.com', 'hello', 'this is a try');
};

async function sendEmail(name, email, subject, message) {
	const data = JSON.stringify({
		Messages: [
			{
				From: { Email: email, Name: name },
				To: [{ Email: email, Name: name }],
				Subject: subject,
				TextPart: message,
			},
		],
	});

	const config = {
		method: 'post',
		url: 'https://api.mailjet.com/v3.1/send',
		data: data,
		headers: { 'Content-Type': 'application/json' },
		auth: { username: API_KEY, password: SECRET_KEY },
	};

	const headers = {
		'Content-Type': 'application/json',
		Authorization: `Basic ${btoa(`${API_KEY}:${SECRET_KEY}`)}`,
	};
	console.log(headers);

	await fetch('https://api.mailjet.com/v3.1/send', {
		method: 'post',
		mode: 'no-cors',
		headers: headers,
		body: data,
	});
}
