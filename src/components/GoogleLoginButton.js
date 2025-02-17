import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import './GoogleLoginButton.css';

const GoogleLoginButton = () => {
  
    function handleLoginSuccess(response) {
      console.log('Login Success: ', response.profileObj);
      // handle the successful login here, e.g. by updating your app's state or making an API call
    }
  
    function handleLoginFailure(response) {
      console.error('Login Failed: ', response);
      // handle the failed login here, e.g. by showing an error message to the user
    }

  
  
  return (
    <div>
          <div className="">
            <GoogleOAuthProvider 
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                >
             <GoogleLogin
              render={(renderProps) => (
                <button
                  type="button"
                  className="GoogleLoginButton"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className="" /> Sign in with google
                </button>
              )}
              onSuccess={handleLoginSuccess}
              onFailure={handleLoginFailure}
              cookiePolicy="single_host_origin"
            />
            </GoogleOAuthProvider>
          </div>
    </div>
  )
}

export default GoogleLoginButton

