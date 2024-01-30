import useForm from "@/src/hooks/useForm";
import { FormValues, FormErrors } from "@/src/types/formTypes";


const validate = (data: FormValues) : FormErrors => {
  const errors: FormErrors = {};

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

const initialState = {
  email: '',
  password: '',
}

const endpoint = "api/user/sign-up";

const config = {
  initialState,
  validate,
  endpoint,
}

export default function SignIn() {
  const { formData, formErrors, handleChange, handleSubmit, serverErrorMessage, sucess } = useForm<FormValues>(config);

  return (
    <form className="flex flex-col justify-center items-center gap-10 pt-10">
      <input 
        className="appearance-none border rounded py-2 px-3 focus:outline-none" 
        type="email" 
        name="email" 
        value={formData.email}
        placeholder="Email" 
        required 
      />
      <input 
        className="appearance-none border rounded py-2 px-3 focus:outline-none" 
        type="password" 
        name="password" 
        placeholder="Password" 
        required 
      />
      <button className="bg-black px-20 py-2 rounded text-white" type="submit">Sign in</button>
    </form>
  );
}
