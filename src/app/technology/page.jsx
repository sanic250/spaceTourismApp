"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "./page.module.css";
import rocket from "../../../public/assets/technology/image-launch-vehicle-portrait.jpg";
import capsule from "../../../public/assets/technology/image-space-capsule-portrait.jpg";
import spaceport from "../../../public/assets/technology/image-spaceport-portrait.jpg";
const Technology = () => {
  const [value, setValue] = useState(1);

  const setValue1 = () => setValue(1);
  const setValue2 = () => setValue(2);
  const setValue3 = () => setValue(3);

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.mainContainer}>
        <div className={styles.topTitle}>
          <h2 className={styles.titleHead}>
            <span>03</span>
            SPACE LAUNCH 101
          </h2>
        </div>
        <div className={styles.mainSection}>
          <div className={styles.buttons}>
            <button onClick={setValue1} className={styles.button}>
              1
            </button>
            <button onClick={setValue2} className={styles.button}>
              2
            </button>
            <button onClick={setValue3} className={styles.button}>
              3
            </button>
          </div>
          {value === 1 && (
            <div className={styles.mainText}>
              <h3>THE TERMINOLOGY..</h3>
              <h2>LAUNCH VEHICLE</h2>
              <p>
                A launch vehicle or carrier rocket is a rocket-propelled vehicle
                used to carry a payload from Earths surface to space, usually to
                Earth orbit or beyond. Our WEB-X carrier rocket is the most
                powerful in operation. Standing 150 metres tall, its quite an
                awe-inspiring sight on the launch pad!
              </p>
            </div>
          )}
          {value === 2 && (
            <div className={styles.mainText}>
              <h3>THE TERMINOLOGY..</h3>
              <h2>SPACEPORT</h2>
              <p>
                A spaceport or cosmodrome is a site for launching (or receiving)
                spacecraft, by analogy to the seaport for ships or airport for
                aircraft. Based in the famous Cape Canaveral, our spaceport is
                ideally situated to take advantage of the Earth’s rotation for
                launch.
              </p>
            </div>
          )}
          {value === 3 && (
            <div className={styles.mainText}>
              <h3>THE TERMINOLOGY..</h3>
              <h2>SPACE CAPSULE</h2>
              <p>
                A space capsule is an often-crewed spacecraft that uses a
                blunt-body reentry capsule to reenter the Earths atmosphere
                without wings. Our capsule is where youw will spend your time
                during the flight. It includes a space gym, cinema, and plenty
                of other activities to keep you entertained.
              </p>
            </div>
          )}
          <div className={styles.imageSection}>
            {value === 1 && (
              <Image className={styles.image} src={rocket} alt="rocket" />
            )}
            {value === 2 && (
              <Image className={styles.image} src={spaceport} alt="rocket" />
            )}
            {value === 3 && (
              <Image className={styles.image} src={capsule} alt="rocket" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
