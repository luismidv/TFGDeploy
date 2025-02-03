import React, { useState } from 'react';
import "./static/css/login.css"
import { Link } from 'react-router-dom';
import { AppExpo } from './App';
import { useNavigate } from 'react-router-dom';
function Home(){
    const navigate = useNavigate();
}
const LoginPage = () => {
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
      <p className="log-in-text">Log-in</p>
      
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
            <input className="input-password" type="password" id="email-password" name="password" 
            placeholder="**********" required value={password} onChange={(e) => setPassword(e.target.value)} />
            

            <button className="log-in-form" type="submit">
             
              Continue
            </button>
          </fieldset>
        </form>
        <Link className="register-button" to ="/register">
          <p className="link-text-login"> Are you not registered yet?</p>
        </Link>
     
    </div>
  );
};

export default LoginPage;