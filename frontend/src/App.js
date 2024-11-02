import React from 'react';
import UserList from './components/UserList';
import LoginForm from './components/LoginForm';

const App = () => {
    return (
        <div>
            <h1>User List</h1>
            <UserList />
            <LoginForm />
        </div>
    );
};

export default App;
