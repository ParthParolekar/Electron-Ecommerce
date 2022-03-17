import React from "react";

const SignupForm = ({ setShowSignupForm }) => {
  return (
    <div className="auth-page signup-page">
      <h2>Sign Up</h2>

      <form>
        <div className="input">
          <label>Username</label>
          <input type="text" />
        </div>
        <div className="input">
          <label>Email</label>
          <input type="email" />
        </div>
        <div className="input">
          <label>New Password</label>
          <input type="password" />
        </div>
      </form>

      <button className="btn btn-primary">Sign-Up</button>

      <button className="btn btn-link" id="btn-to-login">
        <p onClick={() => setShowSignupForm(false)} href="#" className="link">
          Already have an account? Log In
        </p>
      </button>
    </div>
  );
};

export default SignupForm;
