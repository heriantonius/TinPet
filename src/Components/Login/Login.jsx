import React from 'react'
import dogbg from "../../Asset/dogbg.png";
import styles from "./Login.module.css";
import { NavLink } from "react-router-dom";

function Login() {
    return (
        <div className={styles.Main}>

            <div className={styles.doggo}>
                <div className={styles.tinlog}>
                    <img src="https://ik.imagekit.io/prequel/assets/TinPet_Logo_JksXcgg-ql9N.png" />
                </div>
                    <img className={styles.tinpetlogo} src="https://ik.imagekit.io/prequel/assets/TinPet-white_noRAcRA2FAdY.png"/>
                <p className={styles.tagline}>Find your pet's soulmate</p>
                <img src={dogbg} alt="login bg"></img>
            </div>

            <div className={styles.Loginbox}>
                <div>
                    <h1>LOG IN</h1>
                </div>
                <div className={styles.etxt}>
                    Email
                    </div>
                <div>
                    <input type="email" className={styles.blocks}>
                    </input>
                </div>
                <div className={styles.pwd}>
                    Password
                    </div>
                <div>
                    <input type="password" className={styles.blocks}></input>
                </div>
                <div>
                    <a className={styles.signup} href="/register"> Sign Up?</a>
                </div>

                <NavLink to="/">
                    <button className={styles.btn}>
                        Login
                    </button>
                </NavLink>

                <div className={styles.footertxt}>
                    Get the App.
            </div>
                <button className={styles.footbtn}>
                    Play Store
            </button>
            </div>
        </div>
    );
}

export default Login;