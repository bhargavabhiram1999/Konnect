import React, { useEffect, useState } from 'react';
import userService from '../services/userService';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true); // State to handle loading

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const userList = await userService.getUsers();
                setUsers(userList); // Set the users from the API
            } catch (error) {
                console.error('Error fetching users:', error);
            } finally {
                setLoading(false); // Stop loading regardless of success or failure
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Show loading state while fetching data
    }

    return (
        <div>
            <h2>User List</h2>
            {users.length === 0 ? (
                <p>No users found.</p> // Handle case where no users exist
            ) : (
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            {user.username} - {user.email}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserList;