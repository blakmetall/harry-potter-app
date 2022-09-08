import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';

const AppRoutes = () => {
    return (
        <Routes>
            {/* home page */}
            <Route exact path="/" element={<HomePage />} />

            {/* not found page redirect to home page */}
            <Route path="*" element={<HomePage />} />
        </Routes>
    );
};

export default AppRoutes;
