import React, { useState } from 'react';
import Validation from './Validation';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    const emailValidation = Validation.validateEmail(formData.email);
    if (!emailValidation.valid) {
      validationErrors.email = emailValidation.error;
    }

    const passwordValidation = Validation.validatePassword(formData.password);
    if (!passwordValidation.valid) {
      validationErrors.password = passwordValidation.error;
    }

    const confirmPasswordValidation = Validation.validateMatch(
      formData.password,
      formData.confirmPassword,
      'Passwords'
    );
    if (!confirmPasswordValidation.valid) {
      validationErrors.confirmPassword = confirmPasswordValidation.error;
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {

      console.log('Form submitted successfully!', formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
