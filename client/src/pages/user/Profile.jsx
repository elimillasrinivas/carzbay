import React, { useState } from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ProfileHeader = styled.h2`
  color: #1e0c60;
`;

const ProfileField = styled.p`
  margin-bottom: 10px;
`;

const EditProfileButton = styled.button`
  background-color: #1e0c60;
  color: #fff;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
`;

const EditProfileForm = styled.div`
  margin-top: 20px;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

const InputField = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
`;

const SaveButton = styled.button`
  background-color: #1e0c60;
  color: #fff;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  margin-right: 10px;
`;

const CancelButton = styled.button`
  background-color: #ccc;
  color: #fff;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
`;

const Profile = ({ userData, fetchUserProfile }) => {
  const [editing, setEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(userData.name);
  const [updatedEmail, setUpdatedEmail] = useState(userData.email);

  const handleUpdateProfile = async () => {
    try {
      // Replace this with your actual API call to update the profile
      const response = await fetch('/api/user/update-profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: updatedName,
          email: updatedEmail,
        }),
      });
      const data = await response.json();

      // Update the user data in the parent component
      fetchUserProfile();
      setEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <ProfileContainer>
      <ProfileHeader>Profile</ProfileHeader>
      {!editing ? (
        <div>
          <ProfileField>
            <strong>Name:</strong> {userData.name}
          </ProfileField>
          <ProfileField>
            <strong>Email:</strong> {userData.email}
          </ProfileField>
          <EditProfileButton onClick={() => setEditing(true)}>
            Update Profile
          </EditProfileButton>
        </div>
      ) : (
        <EditProfileForm>
          <InputLabel>
            Name:
            <InputField
              type="text"
              value={updatedName}
              onChange={(e) => setUpdatedName(e.target.value)}
            />
          </InputLabel>
          <InputLabel>
            Email:
            <InputField
              type="text"
              value={updatedEmail}
              onChange={(e) => setUpdatedEmail(e.target.value)}
            />
          </InputLabel>
          <SaveButton onClick={handleUpdateProfile}>Save</SaveButton>
          <CancelButton onClick={() => setEditing(false)}>Cancel</CancelButton>
        </EditProfileForm>
      )}
    </ProfileContainer>
  );
};

export default Profile;
