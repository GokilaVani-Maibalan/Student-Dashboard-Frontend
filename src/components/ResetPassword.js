// components/ResetPassword.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GlobalStyle } from "../Styles/globalStyles";
import axios from "axios";
import { url } from "../App";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  let navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();

    // Extract token from the URL (you can use React Router to get the token from the URL)
    const token = window.location.pathname.split("/").pop();
    if (password !== confirmPassword) {
      setMessage("Error: Passwords do not match.");
      return;
    }

    axios
      .post(`${url}/users/reset-password`, { token, password })
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        setMessage("Error: Unable to reset password.");
        console.error("Error resetting password:", error);
      });
    navigate("/login");
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <div className="container">
          <div className="modal">
            <div className="modal-container">
              <div className="modal-left">
                <h1 className="modal-title">
                  {" "}
                  <h1 style={{ textAlign: "center" }}>Level Up</h1>
                  <br></br>Reset Password
                </h1>
                <br />
                <form onSubmit={handleResetPassword}>
                  <div className="input-block">
                    <label htmlFor="password" className="input-label">
                      New Password
                    </label>
                    <input
                      required
                      type="password"
                      name="password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>
                  <div className="input-block">
                    <label htmlFor="password" className="input-label">
                      Confirm New Password
                    </label>
                    <input
                      required
                      type="password"
                      name="password"
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
                    />
                  </div>
                  <div className="modal-buttons">
                    <button className="input-button" type="submit">
                      SUBMIT
                    </button>
                  </div>
                </form>
                <br />
                {message && <p className="message">{message}</p>}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.section`
  .container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #8c7569;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    width: 100%;
    /* height: 60px; */
    background-color: #8c7569;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
  }

  .message {
    color: #55311c;
    font-size: 1.2rem;
    border: 1px solid green;
    border-radius: 5px;
    padding: 5px;
    background-color: lightgreen;
    width: 200px;
    justify-content: center;
  }

  .modal-container {
    display: flex;
    max-width: 40vw;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    position: absolute;

    transition-duration: 0.3s;
    background: #fff;
  }
  .modal-title {
    margin: 0;
    font-weight: 400;
    color: #55311c;
  }
  .form-error {
    font-size: 1.4rem;
    color: #b22b27;
  }
  .modal-desc {
    margin: 6px 0 30px 0;
  }
  .modal-left {
    padding: 60px 30px 20px;
    background: #fff;
    flex: 1.5;
    transition-duration: 0.5s;
    opacity: 1;
  }

  .modal-right {
    flex: 2;
    font-size: 0;
    transition: 0.3s;
    overflow: hidden;
  }
  .modal-right img {
    width: 100%;
    height: 100%;
    transform: scale(1);
    -o-object-fit: cover;
    object-fit: cover;
    transition-duration: 1.2s;
  }

  .modal.is-open .modal-left {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 0.1s;
  }
  .modal-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .modal-buttons a {
    color: rgba(51, 51, 51, 0.6);
    font-size: 14px;
  }

  .sign-up {
    margin: 60px 0 0;
    font-size: 14px;
    text-align: center;
  }
  .sign-up a {
    color: #8c7569;
  }

  .input-button {
    padding: 1.2rem 3.2rem;
    outline: none;
    text-transform: uppercase;
    border: 0;
    color: #fff;
    border-radius: 4px;
    background: #8c7569;
    transition: 0.3s;
    cursor: pointer;
    font-family: "Nunito", sans-serif;
  }
  .input-button:hover {
    background: #55311c;
  }

  .input-label {
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.7px;
    color: #8c7569;
    transition: 0.3s;
  }

  .input-block {
    display: flex;
    flex-direction: column;
    padding: 10px 10px 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 20px;
    transition: 0.3s;
  }
  .input-block input {
    outline: 0;
    border: 0;
    padding: 4px 0 0;
    font-size: 14px;
  }

  .input-block input::-moz-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input:-ms-input-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input::placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block:focus-within {
    border-color: #8c7569;
  }
  .input-block:focus-within .input-label {
    color: rgba(140, 117, 105, 0.8);
  }

  @media (max-width: 750px) {
    .modal-container {
      max-width: 90vw;
    }

    .modal-right {
      display: none;
    }
  }
`;

export default ResetPassword;
