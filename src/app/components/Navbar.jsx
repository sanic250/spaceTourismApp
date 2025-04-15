import React from "react";
import Image from "next/image";
import logo from "../../../public/assets/shared/logo.svg";
import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image className={styles.logo} src={logo} alt="logo" />
      </div>
      <div className={styles.navLinks}>
        <ul>
          <a href="/">
            <span>00</span>HOME
          </a>
          <a href="/destination">
            <span>01</span>DESTINATION
          </a>
          <a href="/crew">
            <span>02</span>CREW
          </a>
          <a href="/technology">
            <span>03</span>TECHNOLOGY
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
