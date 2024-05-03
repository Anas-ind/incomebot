import React from 'react';
import './SignIn.css';
const SignInButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="sign-in-button primary-btn">
      Sign In
    </button>
    
  );
};

export default SignInButton;