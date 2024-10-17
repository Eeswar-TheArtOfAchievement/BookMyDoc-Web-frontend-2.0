import React, { useState } from "react";
import "./Register.css";
import logo from "../../Assets/logo.png";
import { useNavigate } from "react-router-dom";

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!validateEmail(email)) {
      setErrorMessage("Invalid email format.");
      return;
    }
    // if (email && password) {
    //     try {
    //         const response = await fetch('http://192.168.1.14:5000/api/v1/auth/login', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ email, password }),
    //         });
    //         const data = await response.json();
    //         if (response.ok) {
    //           const {token ,role} = data;
    //           // Store only the token clg
    //           await localStorage.setItem('token',token);
    //           await localStorage.setItem('role',role);
    //           if (role === 'doctor') {
    //             navigate('DoctorDrawerNav'); // Navigate to Doctor Drawer
    //         } else if (role === 'admin') {
    //             navigate('AdminDrawerNav'); // Navigate to Admin Drawer
    //         } else {
    //             navigate('TabNavigator'); // Navigate to User Tab (default case)
    //         }
    //       } else {
    //           alert('Error', data.message || 'Login failed');
    //       }
    //     } catch (error) {
    //         console.error('Login error:', error);
    //         alert('Error', 'Something went wrong in login route');
    //     }
    // } else {
    //     alert('Error', 'Please enter both email and password.');
    // }
  };

  return (
    <div id="Login">
      <div id="container">
        <div id="formContainer">
          <div className="blueHead"></div>
          <div className="container1">&nbsp;</div>
          <div className="logo">
            <img className="imglogo" src={logo} alt="Logo" />
            &nbsp;&nbsp;
            <h1>BookMyDoc</h1>
          </div>

          <div className="heading">Welcome Back</div>
          <form
            id="form"
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <label htmlFor="email">Email</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="inputs"
            />

            <label htmlFor="password">Password</label>
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="inputs"
              />
              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </span>
            </div>
            <div className="forgot">

            <a href="">forgotPassword?</a>
            </div>

            <div className="flex">
              <p>Select Role:</p>
              <div className="align">
                <input type="radio" name="role" checked />
                &nbsp;
                <label htmlFor="user" className="up">
                  user
                </label>
              </div>
              <div className="align">
                <input type="radio" name="role" />
                &nbsp;
                <label htmlFor="doctor" className="up">
                  doctor
                </label>
              </div>
            </div>
            {errorMessage && (
              <p style={{ color: "red", marginBottom: 10 }}>
                {errorMessage} <br /> <a href="">forgotPassword?</a>
              </p>
            )}

            <div className="buttonContainer">
              <button onClick={() => navigate("/")} className="signup-button">
                Go Back
              </button>
              <button type="submit" className="signup-button">
                Login
              </button>
            </div>
            <div>
              <p id="center">Don't have an account? </p>
              &nbsp;
              <span
                id="center"
                className="pointer"
                onClick={() => navigate("/signup")}
              >
                Signup
              </span>
            </div>
          </form>
        </div>
      </div>
      <div className="container1">&nbsp;</div>
      <div id="footers">
        <ul id="footerlist">
          <li>Privacy Policy</li>
          <li>
            <a href="">FAQs</a>
          </li>
          <li>
            <a href="">Terms & Conditions</a>
          </li>
          <li>
            <a href="">Non-discrimination</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Login;
