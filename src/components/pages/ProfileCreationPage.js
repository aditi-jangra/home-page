import React, { useState } from 'react';

const ProfileCreationPage = () => {
  const [profile, setProfile] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    location: '',
    preferences: '',
    profilePicture: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setProfile((prev) => ({ ...prev, profilePicture: e.target.files[0] }));
  };

  return (
    <div>
      <h2>Create Your Profile</h2>
      <form>
        <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} />
        <input type="date" name="dateOfBirth" onChange={handleChange} />
        <select name="gender" onChange={handleChange}>
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input type="text" name="location" placeholder="Location" onChange={handleChange} />
        <textarea name="preferences" placeholder="Preferences" onChange={handleChange} />
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default ProfileCreationPage;
