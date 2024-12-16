import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/HomePage';
import SigninSignupPage from './components/pages/SigninSignupPage';
import ProfileCreationPage from './components/pages/ProfileCreationPage';
import Dashboard from './components/pages/Dashboard';
import AddProfilePage from './components/pages/AddProfilePage';
import MyMatchesPage from './components/pages/MyMatchesPage';
import Testimonials from './components/Testimonials';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Welcome to Matrimony Application</h1>
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SigninSignupPage />} />
          <Route path="/signup" element={<SigninSignupPage />} />
          <Route path="/profile-creation" element={<ProfileCreationPage />} />
          <Route path="/testimonials" element={<Testimonials />} />

          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="add-profile" element={<AddProfilePage />} />
            <Route path="my-matches" element={<MyMatchesPage />} />
          </Route>
        </Routes>


      </div>
    </Router>
  );
};

export default App;
