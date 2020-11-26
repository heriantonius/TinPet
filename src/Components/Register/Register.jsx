import React from 'react'
import dogbg from "../../Asset/dogbg.png";
import styles from "./Register.module.css";
import { NavLink } from "react-router-dom";

function Register() {
    return (
        <div className={styles.MainRegis}>

                <div className={styles.doggo}>
                    <img src={dogbg} alt="login bg"></img>
                </div>

            <div className={styles.boxit}>
                <div className={styles.Regisbox}>
                    <div>
                        <h1>SIGN UP</h1>
                    </div>
                    <div className={styles.etxt}>
                        Email
                    </div>
                    <div>
                        <input type="email" className={styles.blocks} />
                    </div>

                    <div className={styles.username}>
                        Full Name
                </div>
                    <div>
                        <input type="text" className={styles.blocks} />
                    </div>

                    <div className={styles.pwd}>
                        Password
                    </div>
                    <div>
                        <input type="password" className={styles.blocks}></input>
                    </div>

                    <div className={styles.pwd}>
                        Confirm Password
                    </div>
                    <div>
                        <input type="password" className={styles.blocks} />
                    </div>

                    <NavLink to="/login">
                        <button className={styles.regisbtn}>
                            Sign Up
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
        </div>
    );
}

export default Register;