import React from "react";
import { useState } from "react";
import { LoginForm, SignupForm } from "../../components";

const Authentication = () => {
  const [showSignupForm, setShowSignupForm] = useState(false);
  return (
    <div className="auth-component card-shadow">
      <div
        className={
          showSignupForm ? "auth-pages auth-component-rotate" : "auth-pages"
        }
        id="auth-pages"
      >
        <LoginForm setShowSignupForm={setShowSignupForm} />
        <SignupForm setShowSignupForm={setShowSignupForm} />
      </div>
    </div>
  );
};

export default Authentication;
