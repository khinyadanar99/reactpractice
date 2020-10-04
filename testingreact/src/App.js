import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  render(){
    return(
      <div className="parent">
        <div className="inner">
          <div className="info">
            <h1>facebook</h1>
            <p>Facebook helps you connect and share with the people in your life.</p>
          </div>
          <div className="login">
            <div className="login_holder">
              <input className="input_holder" placeholder="Email address or phone number"></input>
              <input className="input_holder" placeholder="Password"></input>
              <button className="login_button">
                Log In
              </button>
              <div className="link"> 
                <a href="https://www.facebook.com">Forgotten password?</a>
                <hr></hr>
              </div>
              
              <button className="create_button">
                Create New Account
              </button>
            </div>
            <p class="last">
              <b><a href="https://www.facebook.com">Create a Page</a></b> for a celebrity, band or business. 
            </p>
          </div>
        </div>
      </div>
    ) 
  }
}

export default App;
