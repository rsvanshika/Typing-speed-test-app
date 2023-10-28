import React, { useState } from 'react';

function SignUpLogin() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
   
  });
  
  //decide whether the form is in sign-up mode (initially true) or login mode.
  const [isSignup, setIsSignup] = useState(true);


//   uses object destructuring to extract the name and value
  const handleInputChange = (e) => {
    // uses object destructuring to extract the name and value(same as above)
    const { name, value } = e.target; 
    // const name=e.target.name
    // const value =e.target.value
    
    setFormData({ ...formData, [name]: value });
   
  };

//  called when the user submits the form 
//distinguishes between sign-up and login based on the isSignup state
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      // Handle sign-up form submission
        console.log('Sign-up data:', formData);
        alert("signup successfully")
        setFormData({username:"",email:"",password:""})
      
    }
      
     
     else {
      // Handle login form submission
      console.log('Login data:', formData);
    }
  };

//   to switch between sign-up and login modes by changing the isSignup state

  const toggleAuthMode = () => {
    setIsSignup((prev) => !prev);
  };

//   render function includes the HTML structure for the form. 
// It displays different form elements and labels depending on whether isSignup is true or `false.


  return (
    <div className='auth-form'>
      <h2>{isSignup ? 'Sign Up' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        {isSignup && (
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>
        )}

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
       

        <button type="submit">{isSignup ? 'Sign Up' : 'Login'}</button>
      </form>

      <p>
        {isSignup ? 'Already have an account?' : 'Don\'t have an account?'}
        <button onClick={toggleAuthMode}>
          {isSignup ? 'Login' : 'Sign Up'}
        </button>
      </p>
    </div>
  );
}

export default SignUpLogin;
