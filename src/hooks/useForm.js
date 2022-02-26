import { useState } from "react";

const useForm = ({ initialState, onSubmit, onValidation }) => {
	const [formState, setFormState] = useState(initialState);
	const [errorState, setErrorState] = useState({});

	return {
		handleSubmit: (e) => {
			e.preventDefault();
			let errors = onValidation(formState);
			if (Object.keys(errors).length > 0) {
				setErrorState((prev) => ({ ...errors }));
				return;
			} else {
				setErrorState((prev) => ({}));
				onSubmit(formState);
			}
		},
		onChange: (e) => {
			setFormState((prev) => ({
				...prev,
				[e.target.name]: e.target.value,
			}));
		},
		preventedOnChange: (e) => {
			e.preventDefault();
			setFormState((prev) => ({
				...prev,
				[e.target.name]: e.target.value,
			}));
		},
		errors: errorState,
		values: formState,
	};
};

export default useForm;
