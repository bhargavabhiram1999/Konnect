import React from 'react';
import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
        </div>
    );
};

export default App;
