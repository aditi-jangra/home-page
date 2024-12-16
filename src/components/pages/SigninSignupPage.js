import React, { useState } from 'react';

const SigninSignupPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const handleToggle = () => setIsSignup(!isSignup);

  return (
    <div className="auth-container">
      <h2>{isSignup ? 'Sign Up' : 'Sign In'}</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        {isSignup && <input type="text" placeholder="Full Name" />}
        <button type="submit">{isSignup ? 'Sign Up' : 'Sign In'}</button>
      </form>
      <button onClick={handleToggle}>
        {isSignup ? 'Already have an account? Sign In' : 'New here? Sign Up'}
      </button>
    </div>
  );
};

export default SigninSignupPage;
