/* eslint-disable default-case */
import React, { useEffect, useState } from "react";
import styles from "./AuthForm.module.css";
import { Link } from 'react-router-dom';

const Auth = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loginDirty, setLoginDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (loginError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [loginError, passwordError]);

  const loginHandler = (e) => {
    setLogin(e.target.value);
    if (e.target.value.length < 3) {
      setLoginError("Uncorrect login");
    } else {
      setLoginError("");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordError(
        "Password should be at least 3 and at maximum 8 characters"
      );
      if (!e.target.value) {
        setPasswordError("Password can not be empty");
      }
    } else {
      setPasswordError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "login":
        setLoginDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  return (
    <div className={styles.auth}>
      <form>
        <h1>Autorization</h1>
        {loginDirty && loginError && (
          <div className={styles.login_error}>{loginError}</div>
        )}
        <div className={styles.auth_data}>
          <span>login</span>
          <input
            className={styles.auth_input}
            onChange={(e) => loginHandler(e)}
            value={login}
            onBlur={(e) => blurHandler(e)}
            name="login"
            type="text"
          />
        </div>
        {passwordDirty && passwordError && (
          <div className={styles.login_error}>{passwordError}</div>
        )}
        <div className={styles.auth_data}>
          <span>password</span>
          <input
            className={styles.auth_input}
            value={password}
            onChange={(e) => passwordHandler(e)}
            name="password"
            onBlur={(e) => blurHandler(e)}
            type="password"
          />
        </div>
        
        <button className={styles.submit} disabled={!formValid} type="submit">
          <Link to="/content">Submit</Link>
        </button>
      </form>
    </div>
    
  );
};

export default Auth;
