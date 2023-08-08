import { useState } from "react";
import styles from "./JoinForm.module.css";

const JoinForm = () => {
	const [email, setEmail] = useState("");

	const handleInputChange = (e) => {
		const { value } = e.target;

		setEmail(value);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		alert(`email : ${email}`);

		setEmail("");
	};

	return (
		<div className={styles.join}>
			<h2>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h2>
			<p>Type your email down below and be young wild generation</p>

			<form className={styles.form} onSubmit={handleFormSubmit}>
				<input
					type=""
					className={styles.input}
					value={email}
					onChange={handleInputChange}
					placeholder="Add your email here"
				/>

				<button type="submit" className={styles.button}>
					SEND
				</button>
			</form>
		</div>
	);
};

export default JoinForm;
