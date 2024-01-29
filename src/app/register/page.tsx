'use client'

import useForm from "@/src/hooks/useForm";

type  FormValues = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

const validateForm = (data: FormValues) => {
  const errors: Record<string, string> = {};

  if (!data.email) {
    errors.email = 'Email is required';
  }

  if (!data.username) {
    errors.username = 'Username is required';
  }

  if (!data.password) {
    errors.password = 'Password is required';
  }

  return errors;
}



export default function Register() {
    const { formData, formErrors, handleChange, handleSubmit } = useForm<FormValues>(
      {
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
      },
      validateForm
    );

  return (
    <form className="flex flex-col justify-center items-center gap-10 pt-10" onSubmit={handleSubmit}>
      <input 
        className="appearance-none border rounded py-2 px-3 focus:outline-none" 
        type="email" 
        name="email" 
        value={formData.email}
        onChange={handleChange}
        placeholder="Email" 
      />
      {formErrors.email && <div className="error">{formErrors.email}</div>}
      <input 
        className="appearance-none border rounded py-2 px-3 focus:outline-none" 
        type="text" 
        name="username" 
        value={formData.username}
        onChange={handleChange}
        placeholder="Username" 
      />        
      {formErrors.username && <div className="error">{formErrors.username}</div>}
      <input 
        className="appearance-none border rounded py-2 px-3 focus:outline-none" 
        type="password" 
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password" 
      />
      <input 
        className="appearance-none border rounded py-2 px-3 focus:outline-none" 
        type="password" 
        name="confirmPassword" 
        value={formData.confirmPassword}
        onChange={handleChange}
        placeholder="Confirm Password" 
      />
      <button className="bg-black px-20 py-2 rounded text-white" type="submit">Sign up</button>
    </form>
  );
}
