import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginForm.css'; // Import the CSS file

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signUpEmail, setSignUpEmail] = useState('');
    const [signPassword, setSignPassword] = useState('');
    const [signRePassword, setSignRePassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('');
    const [signUpErrorMessage, setSignUpErrorMessage] = useState('');
    const { login } = useAuth(); // Get login function from context
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setErrorMessage(''); // Reset the error message before a new request
        try {
            const response = await axios.post('https://konnect-1.onrender.com/api/auth/login', {
                email,
                password,
            });
            console.log(response.data);
            login();
            navigate('/welcome');
            // Handle successful login (e.g., save token, redirect)
            // For example, you might want to redirect the user or save a token to local storage
            // localStorage.setItem('token', response.data.token); // Uncomment if using a token
            // window.location.href = '/dashboard'; // Redirect to a protected route
        } catch (err) {
            // Check if the error response is available
            if (err.response && err.response.data) {
                setErrorMessage(err.response.data); // Set the error message from the backend
            } else {
                setErrorMessage('An unexpected error occurred.'); // Generic error message
            }
        }
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        setSignUpErrorMessage('');
        
        if(signRePassword === signPassword) {
            try {
                const response = await axios.post('https://konnect-1.onrender.com/api/users', {
                    email: signUpEmail,
                    password: signPassword,
                    username: "signUpUsername", // Assuming you have a field for the username
                    profilePicture: "signUpProfilePicture" // Assuming you have a field for the profile picture URL
                });
                console.log("Created user" + response);
                alert("Created User");
                window.location.reload();
                
            } catch (err) {
                if (err.response && err.response.data) {
                    setSignUpErrorMessage(err.response.data); // Set the error message from the backend
                } else {
                    setSignUpErrorMessage('An unexpected error occurred.'); // Generic error message
                }            
            }
        } else {
            setSignUpErrorMessage('Passwords doesn\'t match');
        }
        
    };

    return (
        <div>
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin} className="login-form">
                <div className="input-container">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="input"
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="input"
                    />
                </div>
                {errorMessage && <p className="error">{errorMessage}</p>}
                <button type="submit" className="button">Login</button>
            </form>
        </div>

        <div className="login-container">
            <h2>Sign Up!</h2>
            <form onSubmit={handleSignUp} className="sign-up-form">
                <div className="input-container">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="sign-up-email"
                        value={signUpEmail}
                        onChange={(e) => setSignUpEmail(e.target.value)}
                        required
                        className="input"
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="sign-password"
                        value={signPassword}
                        onChange={(e) => setSignPassword(e.target.value)}
                        required
                        className="input"
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="password">Re-enter Password:</label>
                    <input
                        type="password"
                        id="sign-re-password"
                        value={signRePassword}
                        onChange={(e) => setSignRePassword(e.target.value)}
                        required
                        className="input"
                    />
                </div>
                {signUpErrorMessage && <p className="error">{signUpErrorMessage}</p>}
                <button type="submit" className="button">Sign Up!</button>
            </form>
        </div>

        </div>
    );
};

export default LoginForm;
