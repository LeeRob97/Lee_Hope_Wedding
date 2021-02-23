import React from 'react';

function encode(data) {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&")
}

function setMissingFields() {
	const requiredFields = [
		"First Name",
		"Last Name",
		"Number of Guests",
		"email"
	];
	let missingFields = [];

	requiredFields.forEach(fieldName => {
		const inputElem = document.querySelector(`input[name="${fieldName}"]`);

		inputElem.classList.remove("required");

		if(inputElem.value.trim().length === 0) {
			missingFields.push(fieldName);
			inputElem.classList.add("required");
		}
	})

	return missingFields;
}

function formSubmission(e) {
	e.preventDefault();
	const missingMessage = document.getElementById("missingFields");
	let myForm = document.getElementById('rsvpForm');
	let formData = new FormData(myForm);

	missingMessage.classList.remove("visible");

	if(setMissingFields().length > 0) {
		missingMessage.classList.add("visible");
		return;
	}

	// fetch('/', {
	// 	method: 'POST',
	// 	headers: { "Content-Type": "application/x-www-form-urlencoded" },
	// 	body: new URLSearchParams(formData).toString()
	// })
	// 	.then(() => console.log("success"))
	// 	.catch(error => alert(error))
}

const RSVPForm = _ => {
	return (
		<>
			<div id="missingFields">
				Please fill all required (*) fields.
			</div>
			<form
				id="rsvpForm"
				method="post"
				data-netlify="true"
				netlify-honeypot="bot-field"
				onSubmit={formSubmission}
			>
				<input type="hidden" name="form-name" value="WeddingRSVP" />
				<div className="inputField">
					<label>First Name<sup>*</sup></label>
					<input name="First Name" type="text"/>
				</div>
				<div className="inputField">
					<label>Last Name<sup>*</sup></label>
					<input name="Last Name" type="text"/>
				</div>
				<div className="inputField">
					<label>Number of Guests<sup>*</sup></label>
					<input name="Number of Guests" inputMode="numeric" type="number"/>
				</div>
				<div className="inputField">
					<label>Phone Number</label>
					<input name="phone" type="phone"/>
				</div>
				<div className="inputField">
					<label>Email (To be reached at for any changes)<sup>*</sup></label>
					<input name="email" type="email"/>
				</div>
				<div className="inputField">
					<input type="submit" value="RSVP"/>
				</div>
			</form>
		</>
	)
};

export default RSVPForm;