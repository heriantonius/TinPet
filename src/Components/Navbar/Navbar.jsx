import React from 'react';
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../Asset/logo.svg";
import tinpet from "../../Asset/tinpet.svg";

function Navbar() {
    return (
      <div className={styles.Container}>
        <div className={styles.Logo}>
        <NavLink to="/">
          <img src={logo} alt="logo"></img>
          <img src={tinpet} alt="tinpet"></img>
        </NavLink>
        </div>
        <div className={styles.Login}>
          <NavLink to="/login">
          <button>Login</button>
          </NavLink>
        </div>
        </div>
    );
  }

export default Navbar;