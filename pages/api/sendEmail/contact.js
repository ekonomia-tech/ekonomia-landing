import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
	const { method } = req;

	if (method === "POST") {
		try {
			await sendContact(req.body);

			res.status(200).json(true);
		} catch (e) {
			console.log(e.message);
			res.status(500).json({ err: e.message });
		}
	}
}

const sendContact = async ({ fullName, email, content, position }) => {
	try {
		const message = {
			from: "nmimran99@gmail.com",
			to: "ops@ekonomia.tech",
			templateId: "d-eac0d01ec8db4dd5b4a9797823ccdea3",
			dynamicTemplateData: {
				subject: position
					? `${fullName} - ${position}`
					: `${fullName} - Contact request`,
				lead_create_date: `${new Date().toLocaleString()}`,
				lead_fullname: fullName,
				lead_email: email,
				lead_content: position ? `${position} - ${content}` : content,
			},
		};

		await sgMail.send(message);
	} catch (e) {
		console.log(e.message);
	}
};
