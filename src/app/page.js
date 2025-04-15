import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
   <div className={styles.mainContainer}>
    <Navbar/>
    <div className={styles.mainSection}>
      <div className={styles.sectionLeft}>
      <div className={styles.title}>
        <h3>SO, YOU WANT TO TRAVEL TO</h3>
        <h1 className={styles.titleMain}>SPACE</h1>
      </div>
        <div className={styles.description}>
          <p>Let;s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back and relax because we'will give you a truly out of this world experience!</p>
        </div>
      </div>
      <div className={styles.sectionRight}>
      <div className={styles.circle}>
        <h1>EXPLORE</h1>

      </div>
      </div>
    </div>
   </div>
  )
}
