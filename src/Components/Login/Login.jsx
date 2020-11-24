import React from 'react'
import { Link } from 'react-router-dom';
import loginbg from "../../Asset/loginbg.svg";
import styles from "./Login.module.css";

function Login () {
    return (
        <div className={styles.Main}> 
            <div className={styles.doggo}>
            <img src={loginbg} alt="login bg"></img>
            </div>
            <div className={styles.Loginbox}>
                <div>
                    <h1>SIGN IN</h1>
                </div>
                <div className={styles.etxt}>
                    Email
                    </div>
                    <div>
                        <input className={styles.blocks}>
                        </input>
                    </div>
                    <div className={styles.pwd}>
                    Password
                    </div>
                    <div>
                        <input className={styles.blocks}></input>
                    </div>
                    <div className={styles.signup}>
                       <a href="/register"> Sign Up?</a>
                    </div>
                    <button className={styles.btn}>
                        Login
                    </button>
                </div>
                <div>
                </div>
            </div>
    );
}

export default Login;