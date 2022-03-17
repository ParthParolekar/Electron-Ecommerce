import React from "react";

const LoginForm = ({ setShowSignupForm }) => {
  return (
    <div className="auth-page login-page">
      <h2>Login</h2>

      <form>
        <div className="input">
          <label>Email</label>
          <input type="email" />
        </div>
        <div className="input">
          <label>Password</label>
          <input type="password" />
        </div>
      </form>

      <button className="btn btn-link">
        <a href="#" className="link">
          Forgot Password?
        </a>
      </button>

      <button className="btn btn-primary">Login</button>

      <button className="btn btn-link" id="btn-to-signup">
        <p onClick={() => setShowSignupForm(true)} href="#" className="link">
          Don't have an account? Sign Up
        </p>
      </button>
    </div>
  );
};

export default LoginForm;
