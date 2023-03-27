import React from "react";
import "./Login.scss";
import { Button } from "@mui/material";

import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";

function Login() {
  const signIn = () => {
    signInWithPopup(auth, provider).catch((err) => {
      alert(err.message);
    });
  };

  return (
    <div className="login">
      <div className="loginLogo">
        <img src="./discordIcon.png" alt="" />
      </div>

      <Button onClick={signIn}>ログイン</Button>
    </div>
  );
}

export default Login;
