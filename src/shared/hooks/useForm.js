import { useState } from 'react';

const useForm = (initialValues, onSubmit) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setValues({ ...values, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = onSubmit(values); // Call validation function
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, perform action (e.g., API call)
    }
  };

  return { values, errors, handleChange, handleSubmit };
};

export default useForm;