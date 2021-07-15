import "../App.css";
import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { Redirect } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Recaptcha from "react-recaptcha";
function Form() {
	const [isVerified, setIsVerified] = useState(false);
	const [redirect, setRedirect] = useState(false);
	const [form, setForm] = useState({});
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [age, setAge] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [location, setLocation] = useState("");
	const [message, setMessage] = useState("");
	const [value, setValue] = useState();

	const handleFirstNameChange = (event) => {
		setFirstName(event.target.value);
	};
	const handleLastNameChange = (event) => {
		setLastName(event.target.value);
	};
	const handleAgeChange = (event) => {
		setAge(event.target.value);
	};
	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};
	const handlePhoneNumberChange = (event) => {
		setPhoneNumber(event.target.value);
	};
	const handleLocationChange = (event) => {
		setLocation(event.target.value);
	};
	const handleMessageChange = (event) => {
		setMessage(event.target.value);
	};

	useEffect(() => {
		setForm({
			firstName: firstName,
			lastName: lastName,
			age: age,
			email: email,
			phoneNumber: phoneNumber,
			location: location,
			message: message || "no message",
		});
	}, [firstName, lastName, age, email, phoneNumber, location, message]);

	function recaptchaLoaded() {
		console.log("captcha loaded");
	}
	function verifyCallback(response) {
		if (response) {
			setIsVerified(true);
		}
	}
	const handleSubmit = (event) => {
		event.preventDefault();
		if (!isVerified) {
			alert(
				"Пожалуйста, подтвердите, что Вы не робот / Please verify that you are not a robot"
			);
		}
		if (isVerified) {
			console.log(form);
			emailjs
				.sendForm(
					"service_ubicy0b",
					"template_ksxp4a9",
					event.target,
					"user_Y5pAmbH6UI6b1qlWxceyj",
					this
				)
				.then(
					(result) => {
						console.log(result.text);
					},
					(error) => {
						console.log(error.text);
					}
				);
			window.alert(
				"Здравствуйте," +
					" " +
					firstName +
					"! Ваша заявка принята. Мы свяжемся с Вами в ближайшее время. Спасибо за участие. / Hello," +
					" " +
					firstName +
					"! Your application has been sent successfully. We'll be in touch with you soon. Thank you for your interest."
			);
			event.target.reset();
			setRedirect(true);
		}
	};
	return (
		<div className="form-wrapper form-wrapper-mobile">
			<div className="form-background">
				{redirect && <Redirect to="/" />}
				<form
					enctype="multipart/form-data"
					method="post"
					onSubmit={handleSubmit}
				>
					<h1>
						Принять участие <br />
						Become a participant
					</h1>
					<div className="form">
						<input
							required
							className="input"
							type="text"
							name="firstName"
							placeholder="Имя / First Name"
							onInput={handleFirstNameChange}
						/>
						<input
							required
							className="input"
							type="text"
							name="lastName"
							placeholder="Фамилия / Last Name"
							onInput={handleLastNameChange}
						/>
						<input
							required
							className="input"
							type="number"
							name="age"
							placeholder="Возраст / Age"
							onInput={handleAgeChange}
						/>
						<input
							required
							className="input"
							type="email"
							name="email"
							placeholder="Адрес электронной почты / Email address"
							onInput={handleEmailChange}
						/>
						<PhoneInput
							defaultCountry="IL"
							value={value}
							onChange={setValue}
							required
							className="input"
							type="text"
							name="phoneNumber"
							placeholder="Номер телефона / Phone number"
							onInput={handlePhoneNumberChange}
						/>
						<label for="locations" className="main-text">
							Моя скамейка находится в: <br /> My bench is located in:
						</label>
						<select
							className="input"
							name="location"
							id="location"
							onChange={handleLocationChange}
							value={location}
						>
							<option value="Тель-Авив">Тель-Авив / Tel Aviv</option>
							<option value="Нетания">Нетания / Netanya</option>
							<option value="Хайфа">Хайфа / Haifa</option>
						</select>
					</div>
					<p className="main-text">
						Дополнительная информация <br /> Additional information
					</p>
					<div>
						<textarea
							className="textarea"
							rows="10"
							name="message"
							onInput={handleMessageChange}
						></textarea>
					</div>
					<div>
						<label className="main-text">
							Прикрепить файл с дизайном (допустимы форматы png, jpeg, heic)
							<br /> Attach design file (permitted formats png, jpeg, heic)
							<br />
						</label>
						<input
							type="file"
							name="my_file"
							accept="image/png, image/jpeg, image/heic"
						/>
					</div>
					<button className="button" type="submit">
						Отправить заявку
						<br /> Submit
					</button>
					<Recaptcha
						sitekey="6LdHboIbAAAAAGIoj6lN_SWUoAQvIkY-S9rY4RaY"
						render="explicit"
						verifyCallback={verifyCallback}
						onloadCallback={recaptchaLoaded}
					/>
				</form>
			</div>
		</div>
	);
}

export default Form;
