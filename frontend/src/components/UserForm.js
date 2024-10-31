import React, { useState } from 'react';
import userService from '../services/userService';

const UserForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [profilePicture, setProfilePicture] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = { username, email, profilePicture };
        await userService.createUser(userData);
        // Optionally, you can reset the form or fetch users again
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="text" value={profilePicture} onChange={(e) => setProfilePicture(e.target.value)} placeholder="Profile Picture URL" />
            <button type="submit">Create User</button>
        </form>
    );
};

export default UserForm;