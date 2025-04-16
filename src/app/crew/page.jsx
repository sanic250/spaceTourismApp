import React from "react";
import styles from "./page.module.css";
import Navbar from "../components/Navbar";
import Image from "next/image";
import photo from "../../../public/assets/crew/image-douglas-hurley.png";
const Crew = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.mainSection}>
        <div className={styles.mainTitle}>
          <span>
            02<h3>MEET YOU CREW</h3>
          </span>
        </div>
        <div className={styles.middle}>
          <div className={styles.leftSide}>
            <h3>COMMANDER</h3>
            <h2>DOUGLAS HURLEY</h2>
            <p>
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
            </p>
          </div>
          <div className={styles.rightSide}>
            <Image src={photo} alt="photo" /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
