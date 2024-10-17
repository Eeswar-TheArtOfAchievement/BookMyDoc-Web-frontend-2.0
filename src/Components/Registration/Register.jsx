import React, { useState } from "react";
import "./Register.css";
import logo from "../../Assets/logo.png";
import { useNavigate } from "react-router-dom";

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateName = (fullName) => {
  const nameRegex = /^[A-Za-z]+(\s[A-Za-z]+){0,2}?$/;
  return nameRegex.test(fullName);
};

const validatePassword = (password) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.,@#$]).{8,}$/;
  return passwordRegex.test(password);
};

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("dwy@gmail.com");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [role, setSelectedRole] = useState("user");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const [isOtpVisible, setIsOtpVisible] = useState(false);
const [otp , setOtp]  = useState('')

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }
    // Name validation
    if (!validateName(fullName)) {
      setErrorMessage("Name must be at least 3 letters.");
      return;
    }

    // Email validation
    if (!validateEmail(email)) {
      setErrorMessage("Invalid email format.");
      return;
    }

    // Password validation
    if (!validatePassword(password)) {
      setErrorMessage(
        "Password minimum 8 characters long and include both capital, small letters, numbers, and 1 symbol like (.#$@)"
      );
      return;
    }
    setIsOtpVisible(true)
    // Success
    setErrorMessage("");
    // try {
    //   const response = await fetch("http://192.168.1.14:5000/api/auth/register", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ fullName, email, password, role }),
    //   });

    //   const data = await response.text();
    //   if (response.ok) {
    //      setIsOtpVisible(true)
    //   } else {
    //     alert("Error", data);
    //   }
    // } catch (error) {
    //   console.error(error);
    //   alert("Error", "Something went wrong");
    // }
  };

  const handleVerifyOtp = async () => {
    if (!otp) {
        alert('Error', 'Please enter the OTP');
        return;
    }
    // Call your API to verify the OTP
    // try {
    //     const response = await fetch('http://192.168.1.14:5000/api/v1/auth/verify-otp', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ email,password, fullName , role , otp }),
    //     });
    //     const data = await response.json();
    //     if (response.ok) {
    //         alert('Success', 'OTP verified successfully!');
    //         navigate('Login');
    //     } else {
    //         alert( 'OTP verification failed', data);
    //     }

    // } catch (error) {
    //     console.error(error);
    //     alert('Error', 'Something1 went wrong');
    // }

  };
  const handlePop = async ()=>{
    alert('otp resend successful');
  }
  return (
    <div id="register">
      <div id="container">
        <div id="formContainer">
          <div className="blueHead"></div>
          <div className="container1">&nbsp;</div>
          <div className="logo">
            <img className="imglogo" src={logo} alt="Logo" />&nbsp;&nbsp;
            <h1>BookMyDoc</h1>
          </div>
          {!isOtpVisible ? (
            <>
              <div className="heading">Let's Get Started</div>
              <form id="form" onSubmit={(e) => { e.preventDefault(); handleSignUp(); }}>
                {/* Registration Form Fields */}
                <label htmlFor="name">Full Name</label>
                <input type="text" onChange={(e) => setFullName(e.target.value)} placeholder="Full Name" required  className="inputs"/>
                
                <label htmlFor="email">Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required className="inputs"/>
                
                <label htmlFor="password">Password</label>
                <div className="password-container">
                  <input
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    className="inputs"
                  />
                  <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? "👁️" : "👁️‍🗨️"}
                  </span>
                </div>
  
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="password-container">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    required
                    className="inputs"
                  />
                  <span className="eye-icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    {showConfirmPassword ? "👁️" : "👁️‍🗨️ "}
                  </span>
                </div>
                <div className="flex">
                  <p>Select Role:</p> 
                  <div className="align">
                    <input type="radio" name="role" />&nbsp;
                    <label htmlFor="user" className="up">user</label>
                  </div>
                  <div className="align">
                    <input type="radio" name="role" />&nbsp;
                  <label htmlFor="doctor" className="up">doctor</label></div>
                </div>
                {errorMessage && <p style={{ color: "red", marginBottom: 10 }}>{errorMessage} <br /> <a href="">forgotPassword?</a></p>}
  
                <div className="buttonContainer">
                  <button onClick={() => navigate('/')} className="signup-button">Go Back</button>
                  <button type="submit" className="signup-button">Get Otp</button>
                </div>
                <div className="buttonContainer">
                  <p>Already have an account? <span className="pointer" onClick={() => navigate('/login')}>Login</span></p>
                </div>
              </form>
            </>
          ) : (
            // OTP Form
            <div className="otpForm">
              <div>&nbsp;</div>

              <h2 className="heading ">Check your Email</h2>
              <div>&nbsp;</div>

              <p id="center">Enter the verification code that was sent to:</p>
              <p id="center">{email}</p>
              <div>&nbsp;</div>
              <form onSubmit={handleVerifyOtp}>
                <label htmlFor="otp">OTP :</label>
                <input onInput={(e)=> setOtp(e.target.value)} maxLength={5} type="text"  id="otp" placeholder="Enter your OTP" required  className="inputs"/>
              <div>&nbsp;</div>
                <p id="center">The otp will be active for 10 minutes</p>
              <div>&nbsp;</div>
              <div id="center">
                <button className="signup-button" onClick={() => setIsOtpVisible(false)}> &larr;Back</button>
                <button type="submit" className="signup-button" >Submit</button>
              </div>
              </form>
              <div>&nbsp;</div>

                <span id="center" className="pointer" onClick={handlePop}>Resend Otp</span>

            </div>
          )}
        </div>
      </div>
      <div className="container1">&nbsp;</div>
      <div id="footers">
        <ul id="footerlist">
          <li>Privacy Policy</li>
          <li><a href="">FAQs</a></li>
          <li><a href="">Terms & Conditions</a></li>
          <li><a href="">Non-discrimination</a></li>
        </ul>
      </div>
    </div>
  );
  
};

export default Register;
