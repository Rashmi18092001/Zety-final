import React from 'react';
import './login.css';
import Zety from '../../images/cv-format/zety-logo.svg'
import { FaApple, FaGoogle, FaFacebookF } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';


const Login = () => {
  return <>
    <div className="login-main">
        <div className="login-content">
            <div className="login-top">
                <div className="login-logo">
                    <div className="login-logo-img">
                        <img src={Zety} alt="" />
                    </div>
                    <p>Sign-in to Your Account</p>
                </div>

                <div className="login-form">
                    <form action="">
                        <input type="text" placeholder='Email address'/>
                        <input type="text" placeholder='Password(Must be between 6 to 16 characters)'/>
                        <button className='login-btn'>SIGN IN</button>
                        <p className='login-term'>By clicking on Sign In you also agree to our <a href="" className="blue">Terms of Use</a> and <br /><a href="" className="blue">Privacy Policy</a></p>
                    </form>
                </div>

                <div className="login-through">
                    <div className="through">
                    <p className='through-p'>Sign in with</p>
                    <button className='login-apple'><FaApple size={20} />Sign in with Apple</button>
                    </div>
                    <div className="through">
                        <button className='login-fb'><FaFacebookF size={20} />Facebook</button>
                        <button className='login-g'> <FaGoogle size={20} />Google</button>
                    </div>
                </div>
            </div>
           <div className="login-bottom">
                <div className="gray-login">
                    <a className="blue">Forgot your password?</a>
                    <p>Don't have an account? <NavLink to="/signup" className="blue">Sign Up</NavLink></p>
                </div>
           </div>
        </div>
    </div>
  </>
}

export default Login