import { Button, TextField } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { LoginContainer } from "../components/LoginContainer";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  subtitle: {
    fontSize: "13px",
    fontWeight: "normal",
    lineHeight: "1.62",
    color: "#3e3e3c",
  },
  inputSpacer: {
    height: "27px",
  },
  orText: {
    textAlign: "center",
  },
  buttonContainer: {
    margin: "16px 0px",
  },
  btnForgotContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "16px",
  },
  btnForgot: {
    color: "#1e88e5",
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "1.5",
    letterSpacing: "0.09px",
    backgroundColor: "transparent",
    border: "none",
    textDecoration: "underline",
    cursor: "pointer",
  },
}));

function Login() {
  const classes = useStyles();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const handleLoginEmail = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (email !== 'example@example.com' || password !== 'password') {
      setShowError(true) 
      return
    };
    localStorage.setItem('authorized', '1');
    history.push('/dashboard');
  };

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const isValidLogin = () => {
    return email?.length && password?.length;
  };

  return (<LoginContainer
    title="Log in"
    header={showError ? <div>
      Error in login
    </div> : null}
  >
    <form onSubmit={handleLoginEmail}>
      <div>
        <TextField
          label="Email"
          placeholder="e.g.: john@gmail.com"
          type="email"
          name="email"
          required
          value={email}
          onChange={handleEmailChange}
          fullWidth
          variant="outlined"
        ></TextField>
        <div className={classes.inputSpacer}></div>
        <TextField
          label="Password"
          placeholder="password"
          type={"password"}
          name="password"
          required
          value={password}
          onChange={handlePasswordChange}
          fullWidth
          variant="outlined"
        ></TextField>
      </div>

      <div>
        <div className={classes.buttonContainer}>
          <Button
            type="submit"
            disabled={!isValidLogin()}
            fullWidth
            variant="contained"
            color="primary"
          >
            Log in
          </Button>
        </div>
      </div>
    </form>
  </LoginContainer>);
}

export default Login;
