import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

//API KEY:AIzaSyDuBjMYCG9sHA2y-remIxORMaoQTL7dl-8
//Client ID:79892182367-fq4noubm8266id8oo8im13bduj8hc76d.apps.googleusercontent.com
//Client secret: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

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
