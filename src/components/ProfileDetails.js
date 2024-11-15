// src/components/ProfileDetails.js
import React from 'react';

function ProfileDetails({ profile }) {
  return (
    <div>
      <h2>{profile.name}</h2>
      <img src={profile.photo} alt={profile.name} />
      <p>{profile.description}</p>
      <p>Contact: {profile.contact}</p>
      <p>Interests: {profile.interests}</p>
    </div>
  );
}

export default ProfileDetails;