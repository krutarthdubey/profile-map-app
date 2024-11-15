// src/pages/Home.js
import React, { useState } from 'react';
import ProfileCard from '../components/ProfileCard';
import MapComponent from '../components/MapComponent';

function Home() {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const profiles = [
    // Mock data
    { id: 1, name: 'John Doe', description: 'Developer', photo: 'url', address: { lat: 40.7128, lng: -74.0060 } },
  ];

  return (
    <div>
      {profiles.map((profile) => (
        <ProfileCard
          key={profile.id}
          profile={profile}
          onSummaryClick={(profile) => setSelectedProfile(profile)}
        />
      ))}
      {selectedProfile && <MapComponent addressCoordinates={selectedProfile.address} />}
    </div>
  );
}

export default Home;
