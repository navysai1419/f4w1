import React, { useState } from 'react';
import './LoginPage.css'; 

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === '') {
      setEmailError('Email is required');
      return false;
    }
    if (!re.test(email)) {
      setEmailError('Invalid email format');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validatePassword = (password) => {
    if (password.trim() === '') {
      setPasswordError('Password is required');
      return false;
    }
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    validateEmail(value);
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
    validatePassword(value);
  };

  const handleConfirmPasswordChange = (event) => {
    const { value } = event.target;
    setConfirmPassword(value);
    if (value !== password) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateEmail(email) && validatePassword(password) && confirmPassword === password) {
      alert('Form submitted successfully');
    } else {
      alert('Cannot submit the form. Please check the inputs.');
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          className={emailError ? 'invalid' : ''}
          required
        />
        {emailError && <div className="error">{emailError}</div>}

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          className={passwordError ? 'invalid' : ''}
          required
        />
        {passwordError && <div className="error">{passwordError}</div>}

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          className={confirmPasswordError ? 'invalid' : ''}
          required
        />
        {confirmPasswordError && <div className="error">{confirmPasswordError}</div>}

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default LoginPage;
