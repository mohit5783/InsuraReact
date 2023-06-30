import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const nav = useNavigate();
  return (
    <div className="LoginBox">
      <div className="LoginButton">
        <h2>Login with Google</h2>
        <GoogleLogin
          style={{ width: "100%" }}
          auto_select={true}
          useOneTap={true}
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
            nav("/home", { state: credentialResponse });
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </div>
  );
};

export default Login;
