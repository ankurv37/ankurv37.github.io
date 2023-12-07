// GoogleLoginButton.js
import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleLoginButton = () => {
  const responseGoogle = (response) => {
    console.log(response); // Handle the Google response here
  };

  return (
    <div>
      <GoogleLogin
        clientId="32191415057-35gi9jqbrp086pkob8oorvh25hgjg8pf.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default GoogleLoginButton;



