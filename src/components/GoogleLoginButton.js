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
  border: 2px solid rgba(251, 191, 36, 0.4);
`;

const UserName = styled.span`
  font-size: 0.9rem;
  color: white;
`;

const CompactContainer = styled.div`
  transform: scale(0.85);
  transform-origin: center;
`;

const GoogleLoginButton = () => {
  const [user, setUser] = useState(null);

  const handleSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    setUser(decoded);
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
        <CompactContainer>
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={() => {}}
            theme="filled_black"
            shape="pill"
            size="small"
          />
        </CompactContainer>
      )}
    </div>
  );
};

export default GoogleLoginButton;