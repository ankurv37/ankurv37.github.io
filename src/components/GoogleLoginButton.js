import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import styled from 'styled-components';

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
`;

const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #00ff95;
`;

const UserName = styled.span`
  font-size: 0.9rem;
  color: white;
`;

const GoogleLoginButton = () => {
  const [user, setUser] = useState(null);

  const handleSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    setUser(decoded);
    console.log('Login Success:', decoded);
  };

  return (
    <div>
      {user ? (
        <UserContainer>
          <ProfileImage 
            src={user.picture} 
            alt={user.name}
            referrerPolicy="no-referrer"  // Add this to fix Google image loading
          />
          <UserName>{user.name}</UserName>
        </UserContainer>
      ) : (
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={() => console.log('Login Failed')}
          theme="filled_black"
          shape="pill"
        />
      )}
    </div>
  );
};

export default GoogleLoginButton;