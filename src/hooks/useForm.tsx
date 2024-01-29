import { useState, ChangeEvent, FormEvent } from 'react';

type FormValues = {
  [key: string]: string;
};

type FormErrors = {
  [key: string]: string;
};

type FormProps<T> = {
  formData: T;
  formErrors: FormErrors;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const useForm = <T extends FormValues>(initialState: T, validate: (data: T) => FormErrors) => {
  const [formData, setFormData] = useState<T>(initialState);
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear the error for the field when the user starts typing
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form data
    const errors = validate(formData);
    setFormErrors(errors);

    // If there are errors, stop form submission
    if (Object.keys(errors).length > 0) {
      return;
    }

    // Proceed with form submission logic
    console.log('Form submitted:', formData);
  };

  return {
    formData,
    formErrors,
    handleChange,
    handleSubmit,
  } as FormProps<T>;
};

export default useForm;
