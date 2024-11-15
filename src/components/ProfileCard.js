// src/components/ProfileCard.js
import React from 'react';
import './ProfileCard.css';

function ProfileCard({ profile, onSummaryClick }) {
  return (
    <div className="profile-card">
      <img src={profile.photo} alt={profile.name} />
      <h3>{profile.name}</h3>
      <p>{profile.description}</p>
      <button onClick={() => onSummaryClick(profile)}>Summary</button>
    </div>
  );
}

export default ProfileCard;