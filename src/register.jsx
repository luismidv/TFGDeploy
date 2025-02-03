import React, { useState } from 'react';
import "./static/css/login.css"
const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="log-in-container">
      <p className="log-in-text">Register</p>
      <section className="form-container">
        <form className="form-class" name="register-form" method="post" onSubmit={handleSubmit}>
          <fieldset className="form-fieldset">
            <label className="label-email" htmlFor="email-input">
              Email
            </label>
            <input
              className="input-email"
              type="email"
              id="email-input"
              name="email"
              placeholder="Your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />

            <label className="label-password" htmlFor="email-password">
              Password
            </label>
            <input
              className="input-password"
              type="password"
              id="email-password"
              name="password"
              placeholder="**********"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />

            <button className="log-in-form" type="submit">
              Continue
            </button>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default RegisterPage;
