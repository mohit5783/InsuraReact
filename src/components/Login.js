import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { googleLogin, login } from "../actions/authActions";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { Divider } from "antd";

const Login = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      nav("/home");
    }
  });

  const handleLogin = () => {
    dispatch(login(email, password));
  };

  const handleGoogleLoginSuccess = (response) => {
    dispatch(googleLogin(response));
  };

  return (
    <div className="LoginContainer">
      <div className="LoginBox">
        <h1>Zurich welcomes you!</h1>
        <h2>Please Signin</h2>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <button onClick={handleLogin}>Login</button>
        <Divider />
        <div className="GoogleButtonCenter">
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
