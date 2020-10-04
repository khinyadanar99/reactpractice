import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  render(){
    return(
      <div className="parent">
        <div className="inner">
          <div className="demo">
            <img class="img_demo" src={require('./insta_demo.png')}></img>
          </div>
          <div className="info">
            <div className="login">
              <div className="login_holder">
                <h1 class="ttl_insta">Instagram</h1>
                <div class="login_holder_info">
                  <input className="input_holder" placeholder="Phone number, username, or email"></input>
                  <input className="input_holder" placeholder="Password"></input>
                  <button className="login_button">
                    Log In
                  </button>
                  <div class="choice">
                    <hr>
                    </hr>
                    <span>OR</span>
                    <hr></hr>
                  </div>
                  <p class="fb_choice">Log in with Facebook</p>
                  <div className="link"> 
                    <a href="https://www.facebook.com">Forgot password?</a>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="signup">
              <p>Don't have an account? <span><a href="https://www.instagram.com/accounts/emailsignup/">Sign up</a></span></p>
            </div>
            <p class="getApp">Get the app</p>
            <div class="store"> 
              <img class="img_demo" src={require('./appstore.png')}></img>
              <img class="img_demo" src={require('./playstore.png')}></img>
            </div>
          </div>
        </div>
      </div>
    ) 
  }
}

export default App;
