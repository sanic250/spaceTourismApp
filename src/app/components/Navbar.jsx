"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "../../../public/assets/shared/logo.svg";
import menu from "../../../public/assets/shared/icon-hamburger.svg";
import closeIcon from "../../../public/assets/shared/icon-close.svg";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image className={styles.logo} src={logo} alt="Logo" />
      </div>
      <button
        className={styles.menuButton}
        onClick={toggleMenu}
      >
        <Image
          src={isMenuOpen ? closeIcon : menu}
          alt={isMenuOpen ? "Close menu" : "Open menu"}
          width={24}
          height={21}
        />
      </button>
      <nav className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
        <ul>
          <li>
            <a href="/" onClick={toggleMenu}>
              <span>00</span>HOME
            </a>
          </li>
          <li>
            <a href="/destination" onClick={toggleMenu}>
              <span>01</span>DESTINATION
            </a>
          </li>
          <li>
            <a href="/crew" onClick={toggleMenu}>
              <span>02</span>CREW
            </a>
          </li>
          <li>
            <a href="/technology" onClick={toggleMenu}>
              <span>03</span>TECHNOLOGY
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
