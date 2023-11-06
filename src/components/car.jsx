import Image from "next/image";
import React from "react";
import styles from "@/styles/skill.module.css";
import { flutter } from "/public/flutter.svg";

const car = () => {
  return (
    //     <div classNameName={styles.myCard}>
    //     <div classNameName={styles.innerCard}>
    //         <div classNameName={styles.frontSide}>
    //             <p classNameName={styles.title}>FRONT SIDE</p>
    //             <p>Hover Me</p>
    //         </div>
    //         <div classNameName={styles.backSide}>
    //             <p classNameName={styles.title}>BACK SIDE</p>
    //             <p>Leave Me</p>
    //         </div>
    //     </div>
    // </div>
    // <div  classNameName={styles.card}></div>
    <div className={styles.card}>
      <div className={styles.firstcontent}>
      <svg
          width="100"
          height="100"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          viewBox="0 0 24 24"
        >
          {/* Add your SVG path or content here */}
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-15h2v10h-2z" />
        </svg>
      </div>
      <div className={styles.secondcontent}>
        <span>Flutter</span>
      </div>
    </div>
  );
};

export default car;
