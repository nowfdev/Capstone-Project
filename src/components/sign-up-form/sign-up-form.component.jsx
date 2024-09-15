import { useState, useContext } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.compenent";
import "./sign-up-form.styles.scss";
import Button from "../button/button.component";
import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
// Update
const Update = () => {
  console.log("update");
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Your password is not match!");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("User creation encoutered an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Signup with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        ></FormInput>

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        ></FormInput>

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        ></FormInput>

        <FormInput
          label="Confirm password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        ></FormInput>
        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
