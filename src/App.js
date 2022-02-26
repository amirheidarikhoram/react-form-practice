import { useEffect } from "react";
import useForm from "./hooks/useForm";
import "./App.css";

const INITIAL_STATE = {
	firstName: "",
	lastName: "",
	phoneNumber: "",
};

function App() {
	function validate(values) {
		let error = {};
		if (!values.firstName) error.firstName = "First name can't be empty";
		if (!values.lastName) error.lastName = "Last name can't be empty";
		if (!values.phoneNumber)
			error.phoneNumber = "Phone number can't be empty";

		return error;
	}

	function submit(values) {
		console.log(values);
	}

	const { errors, handleSubmit, onChange } = useForm({
		initialState: INITIAL_STATE,
		onSubmit: submit,
		onValidation: validate,
	});

	useEffect(() => {
		console.log(errors);
	}, [errors]);

	return (
		<div>
			<form onSubmit={handleSubmit} className="form">
				<div className="form-item">
					<input
						id="firstName"
						name="firstName"
						onChange={onChange}
					/>
					<label htmlFor="firstName">{errors.firstName}</label>
				</div>
				<div className="form-item">
					<input id="lastName" name="lastName" onChange={onChange} />
					<label htmlFor="lastName">{errors.lastName}</label>
				</div>
				<div className="form-item">
					<input
						id="phoneNumber"
						name="phoneNumber"
						onChange={onChange}
					/>
					<label htmlFor="phoneNumber">{errors.phoneNumber}</label>
				</div>

				<button type="submit">submit</button>
			</form>
		</div>
	);
}

export default App;
