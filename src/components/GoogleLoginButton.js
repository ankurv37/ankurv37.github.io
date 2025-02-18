import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';  // Fixed import syntax
import './GoogleLoginButton.css';

const GoogleLoginButton = () => {
  const CLIENT_ID = "32191415057-35gi9jqbrp086pkob8oorvh25hgjg8pf.apps.googleusercontent.com";
  const [user, setUser] = useState(null);
  
  function handleLoginSuccess(credentialResponse) {
    const decoded = jwtDecode(credentialResponse.credential);  // Updated function call
    setUser(decoded);
    console.log('Login Success: ', decoded);
  }
  
  function handleLoginFailure(response) {
    console.error('Login Failed: ', response);
    setUser(null);
  }

  return (
    <div>
      {user ? (
        <div className="user-info">
          <img src={user.picture} alt="profile" className="profile-img" />
          <span>{user.name}</span>
        </div>
      ) : (
        <div className="">
          <GoogleOAuthProvider clientId={CLIENT_ID}>
            <GoogleLogin
              onSuccess={handleLoginSuccess}
              onFailure={handleLoginFailure}
              cookiePolicy="single_host_origin"
            />
          </GoogleOAuthProvider>
        </div>
      )}
    </div>
  );
}

export default GoogleLoginButton;

