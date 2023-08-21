import React, { useState } from 'react';
import Modal from 'react-modal';
import FacebookLogin from 'react-facebook-login';
import  GoogleLogin  from 'react-google-login';
import '../Styles/Header.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function Header() {

  const handleGoogleLoginSuccess = (response) => {
    console.log('Google Login Success:', response);
  };

  const handleGoogleLoginFailure = (error) => {
    console.error('Google Login Failure:', error);
  };


  const [isLoginModalOpen, setLoginModal] = useState(false);
  const [iscreateaccountopen,setcreateaccount]=useState(false);

  const responseFacebook = (response) => {
  console.log(response);
}

const [createAccountData, setCreateAccountData] = useState({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
});

const handleCreateAccount = () => {
  // Handle creating the account here using the createAccountData state
  console.log('Creating account:', createAccountData);
  setcreateaccount(false);
};


  return (
    <div className="header">
      <div className="s-logo">
        <span>e!</span>
      </div>
      <div className="btn-group login-block">
        <span className="login" onClick={() => setLoginModal(true)}>
          LogIn
        </span>
        <span className="signUp" onClick={() => setcreateaccount(true)}> Create an account</span>

      </div>
      <Modal isOpen={isLoginModalOpen} style={customStyles}>
        <h2>
          LogIn Modal
          <button
            onClick={() => {
              setLoginModal(false);
            }}
            className="btn btn-danger float-end"
          >
            X
          </button>
        </h2>
           <form>
            <input placeholder="Enter your emailId" type="text" /><br />
            <input placeholder="Enter your password" type="text" /><br />
            <button>Login</button>

           </form>
           <br />
        <FacebookLogin
          appId="1088597931155576"
          fields="name,email,picture"
          cssClass="facebook-login-button"
          callback={()=>responseFacebook}
        />
        <GoogleLogin
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="LOGIN WITH GOOGLE"
          className="google-login-button"
          onSuccess={handleGoogleLoginSuccess}
        onFailure={handleGoogleLoginFailure}
        />
      </Modal>

      <Modal isOpen={iscreateaccountopen} style={customStyles}>
      <h2>
          Create an account
          <button
            onClick={() => {
              setcreateaccount(false);
            }}
            className="btn btn-danger float-end"
          >
            X
          </button>
        </h2>

        <form>
          <input
            placeholder="Enter your Username"
            type="text"
            value={createAccountData.username}
            onChange={(e) =>
              setCreateAccountData({
                ...createAccountData,
                username: e.target.value,
              })
            }
          />
          <br />
          <input
            placeholder="Enter your emailid"
            type="text"
            value={createAccountData.email}
            onChange={(e) =>
              setCreateAccountData({
                ...createAccountData,
                email: e.target.value,
              })
            }
          />
          <br />
          <input
            placeholder="Enter your password"
            type="password"
            value={createAccountData.password}
            onChange={(e) =>
              setCreateAccountData({
                ...createAccountData,
                password: e.target.value,
              })
            }
          />
          <br />
          <input
            placeholder="Confirm your password"
            type="password"
            value={createAccountData.confirmPassword}
            onChange={(e) =>
              setCreateAccountData({
                ...createAccountData,
                confirmPassword: e.target.value,
              })
            }
          />
          <br />
          <button onClick={handleCreateAccount}>Create Account</button>
        </form>
        <br />

      </Modal>

      
      


    </div>
  );
}

