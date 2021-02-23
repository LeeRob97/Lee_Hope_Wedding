import React from 'react';

function encode(data) {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&")
}

function formSubmission(e) {
	e.preventDefault()
	let myForm = document.getElementById('rsvpForm');
	let formData = new FormData(myForm);

	fetch('/', {
		method: 'POST',
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body: new URLSearchParams(formData).toString()
	})
		.then(() => console.log("success"))
		.catch(error => alert(error))
}

const RSVPForm = _ => {
	return (
		<form
			id="rsvpForm"
			method="post"
			data-netlify="true"
			netlify-honeypot="bot-field"
			onSubmit={formSubmission}
		>
			<input type="hidden" name="form-name" value="WeddingRSVP" />
			<div className="inputField">
				<label>First Name</label>
				<input name="First Name" type="text"/>
			</div>
			<div className="inputField">
				<label>Last Name</label>
				<input name="Last Name" type="text"/>
			</div>
			<div className="inputField">
				<label>Number of Guests</label>
				<input name="Number of Guests" type="number"/>
			</div>
			<div className="inputField">
				<label>Phone Number</label>
				<input name="phone" type="phone"/>
			</div>
			<div className="inputField">
				<label>Email (To be reached at for any changes)</label>
				<input name="email" type="email"/>
			</div>
			<div className="inputField">
				<input type="submit" value="RSVP"/>
			</div>
		</form>
	)
};

export default RSVPForm;