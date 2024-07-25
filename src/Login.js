import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    mobile: '',
    password: ''
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., authenticate user, store tokens, etc.)
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Handle logout logic here (e.g., clear tokens, reset state, etc.)
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <div className='logpage'>
        <h3>Welcome, {formData.username}!</h3>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Login Form</h2>
       
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </div>
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Mobile:</label>
          <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
