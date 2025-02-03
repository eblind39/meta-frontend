import React, { useState } from "react";
import { validateEmail } from "../../services/utils";
import PasswordData from "../../types/password";
import "../../css/sign_up.css";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function SignUpForm() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<PasswordData>({
                                    value: "",
                                    isTouched: false,
                                });
  const [role, setRole] = useState<string>("role");

  const getIsFormValid = () => {
    if (firstName.trim() == "") {
      // alert("Please type a First name");
      return false;
    }
    if (lastName.trim() == "") {
      // alert("Please type a Last name");
      return false;
    }
    if (email.trim() == "") {
      // alert("Please type an email");
      return false;
    }
    if (!validateEmail(email.trim())) {
      // alert("Please type a valid email");
      return false;
    }
    if (password.value.trim() == "" || !password.isTouched) {
      // alert("Please type a Password");
      return false;
    }
    if (role.trim() == "" ) {
      // alert("Please select a role");
      return false;
    }
    if (role.trim() == "role" ) {
      // alert("Please select a valid role");
      return false;
    }
    return true;
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({
      value: "",
      isTouched: false,
    });
    setRole("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!getIsFormValid()) {
      return;
    }

    alert("Account created!");

    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input type="text" placeholder="First name" value={firstName} onChange={e => setFirstName(e.target.value)} />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input type="text" placeholder="Last name" value={lastName} onChange={e => setLastName(e.target.value)} />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input type="email" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input type="password" placeholder="Password" value={password.value}
              onChange={ e => setPassword({ ...password,  value: e.target.value}) }
              onBlur={ () => setPassword({ ...password,  isTouched: true}) } />
            {
              (password.value.trim().length < 8 && password.isTouched) &&
              <PasswordErrorMessage />
            }
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select value={role} onChange={e => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default SignUpForm;
