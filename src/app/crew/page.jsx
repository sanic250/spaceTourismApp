"use client";

import React from "react";
import { useState } from "react";
import styles from "./page.module.css";
import Navbar from "../components/Navbar";
import Image from "next/image";
import douglas from "../../../public/assets/crew/image-douglas-hurley.png";
import mark from "../../../public/assets/crew/image-mark-shuttleworth.png";
import victor from "../../../public/assets/crew/image-victor-glover.png";
import anousheh from "../../../public/assets/crew/image-anousheh-ansari.png";
const Crew = () => {
  const [value, setValue] = useState(1);

  const changeValue1 = () => setValue(1);
  const changeValue2 = () => setValue(2);
  const changeValue3 = () => setValue(3);
  const changeValue4 = () => setValue(4);

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.mainTitle}>
        <h3>
          <span>02</span>MEET YOU CREW
        </h3>
      </div>
      <div className={styles.mainSection}>
        <div className={styles.middle}>
          <div className={styles.leftSide}>
            {value === 1 && (
              <div className={styles.mainText}>
                <h3>COMMANDER</h3>
                <h2>DOUGLAS HURLEY</h2>
                <p>
                  Douglas Gerald Hurley is an American engineer, former Marine
                  Corps pilot and former NASA astronaut. He launched into space
                  for the third time as commander of Crew Dragon Demo-2.
                </p>
              </div>
            )}
            {value === 2 && (
              <div className={styles.mainText}>
                <h3>MISSION SPECIALIST</h3>
                <h2>
                  MARK<br></br>
                  SHUTTLEWORTH
                </h2>
                <p>
                  Mark Richard Shuttleworth is the founder and CEO of Canonical,
                  the company behind the Linux-based Ubuntu operating system.
                  Shuttleworth became the first South African to travel to space
                  as a space tourist.
                </p>
              </div>
            )}
            {value === 3 && (
              <div className={styles.mainText}>
                <h3>PILOT</h3>
                <h2>VICTOR GLOVER</h2>
                <p>
                  Pilot on the first operational flight of the SpaceX Crew
                  Dragon to the International Space Station. Glover is a
                  commander in the U.S. Navy where he pilots an F/A-18.He was a
                  crew member of Expedition 64, and served as a station systems
                  flight engineer.
                </p>
              </div>
            )}
            {value === 4 && (
              <div className={styles.mainText}>
                <h3>FLIGHT ENGINEER</h3>
                <h2>ANOUSHEH ANSARI</h2>
                <p>
                  Anousheh Ansari is an Iranian American engineer and co-founder
                  of Prodea Systems. Ansari was the fourth self-funded space
                  tourist, the first self-funded woman to fly to the ISS, and
                  the first Iranian in space.
                </p>
              </div>
            )}
            <div className={styles.switch}>
              <button
                onClick={changeValue1}
                className={styles.buttonSwitch}
              ></button>
              <button
                onClick={changeValue2}
                className={styles.buttonSwitch}
              ></button>
              <button
                onClick={changeValue3}
                className={styles.buttonSwitch}
              ></button>
              <button
                onClick={changeValue4}
                className={styles.buttonSwitch}
              ></button>
            </div>
          </div>
          <div className={styles.rightSide}>
            {value === 1 && (
              <Image className={styles.image} src={douglas} alt="photo" />
            )}
            {value === 2 && (
              <Image className={styles.image} src={mark} alt="photo" />
            )}
            {value === 3 && (
              <Image className={styles.image} src={victor} alt="photo" />
            )}
            {value === 4 && (
              <Image className={styles.image} src={anousheh} alt="photo" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
