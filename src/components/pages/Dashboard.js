import React from 'react';
import AddProfilePage from './AddProfilePage';
import MyMatchesPage from './MyMatchesPage';

const Dashboard = () => {
  return (
    <div>
      <header>
        <h1>Dashboard</h1>
        <img src="path/to/profile-pic.jpg" alt="Profile" />
      </header>
      <main>
        <AddProfilePage />
        <MyMatchesPage />
      </main>
    </div>
  );
};

export default Dashboard;
