"use client";

import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import styles from "./page.module.css";
import Image from "next/image";
import moon from "../../../public/assets/destination/image-moon.png";
import mars from "../../../public/assets/destination/image-mars.png";
import europa from "../../../public/assets/destination/image-europa.png";
import titan from "../../../public/assets/destination/image-titan.png";

const Destination = () => {
  const [value, setValue] = useState(1);

  const setValue1 = () => setValue(1);
  const setValue2 = () => setValue(2);
  const setValue3 = () => setValue(3);
  const setValue4 = () => setValue(4);

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.mainContainer}>
        <div className={styles.topTitle}>
          <h2>
            <span>01</span> CHOSE YOUR DESTINATION
          </h2>
        </div>
        <div className={styles.mainSection}>
          <div className={styles.leftSide}>
            {value === 1 && <Image className={styles.image} src={moon} alt="moon" />}
            {value === 2 && <Image className={styles.image} src={mars} alt="mars" />}
            {value === 3 && <Image className={styles.image} src={europa} alt="europa" />}
            {value === 4 && <Image className={styles.image} src={titan} alt="titan" />}
          </div>
          <div className={styles.rightSide}>
            <div className={styles.switch}>
              <button
                onClick={setValue1}
                className={`${styles.buttonSwitch} ${
                  value === 1 ? styles.active : ""
                }`}
              >
                MOON
              </button>
              <button
                onClick={setValue2}
                className={`${styles.buttonSwitch} ${
                  value === 2 ? styles.active : ""
                }`}
              >
                MARS
              </button>
              <button
                onClick={setValue3}
                className={`${styles.buttonSwitch} ${
                  value === 3 ? styles.active : ""
                }`}
              >
                EUROPA
              </button>
              <button
                onClick={setValue4}
                className={`${styles.buttonSwitch} ${
                  value === 4 ? styles.active : ""
                }`}
              >
                TITAN
              </button>
            </div>
            {value === 1 && (
              <div className={styles.mainText}>
                <h2>MOON</h2>
                <p>
                  See our planet as you’ve never seen it before. A perfect
                  relaxing trip away to help regain perspective and come back
                  refreshed. While you’re there, take in some history by
                  visiting the Luna 2 and Apollo 11 landing sites.
                </p>
                <div className={styles.distanceInfo}>
                  <div className={styles.distance}>
                    <p className={styles.travelDesc}>AVG.DISTANCE</p>
                    <h3>384,400 KM</h3>
                  </div>
                  <div className={styles.time}>
                    <p className={styles.travelDesc}>EST. TRAVEL TIME</p>
                    <h3>3 DAYS</h3>
                  </div>
                </div>
              </div>
            )}
            {value === 2 && (
              <div className={styles.mainText}>
                <h2>MARS</h2>
                <p>
                  Don't forget to pack your hiking boots. You'll need them to
                  tackle Olympus Mons, the tallest planetary mountain in our
                  solar system. It's two and a half times the size of Everest!
                </p>
                <div className={styles.distanceInfo}>
                  <div className={styles.distance}>
                    <p className={styles.travelDesc}>AVG.DISTANCE</p>
                    <h3>225 MIL. KM</h3>
                  </div>
                  <div className={styles.time}>
                    <p className={styles.travelDesc}>EST. TRAVEL TIME</p>
                    <h3>9 MONTHS</h3>
                  </div>
                </div>
              </div>
            )}
            {value === 3 && (
              <div className={styles.mainText}>
                <h2>EUROPA</h2>
                <p>
                  The smallest of the four Galilean moons orbiting Jupiter,
                  Europa is a winter lover's dream. With an icy surface, it's
                  perfect for a bit of ice skating, curling, hockey, or simple
                  relaxations in your snug wintery cabin.
                </p>
                <div className={styles.distanceInfo}>
                  <div className={styles.distance}>
                    <p className={styles.travelDesc}>AVG.DISTANCE</p>
                    <h3>628 MIL. KM</h3>
                  </div>
                  <div className={styles.time}>
                    <p className={styles.travelDesc}>EST. TRAVEL TIME</p>
                    <h3>3 YEARS</h3>
                  </div>
                </div>
              </div>
            )}
            {value === 4 && (
              <div className={styles.mainText}>
                <h2>TITAN</h2>
                <p>
                  The only moon known to have a dense atmosphere other than
                  Earth, Titan is a home away from home (just a few hundred
                  degrees colder!). As a bonus, you get striking views of the
                  Rings of Saturn.
                </p>
                <div className={styles.distanceInfo}>
                  <div className={styles.distance}>
                    <p className={styles.travelDesc}>AVG.DISTANCE</p>
                    <h3>1.6 BIL.KM</h3>
                  </div>
                  <div className={styles.time}>
                    <p className={styles.travelDesc}>EST. TRAVEL TIME</p>
                    <h3>7 YEARS</h3>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
