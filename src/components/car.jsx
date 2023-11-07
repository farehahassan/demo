import Image from "next/image";
import React from "react";
import styles from "@/styles/skill.module.css";
// import { flutter } from "/public/flutter.svg";
// import flut from "../../public/flut.svg"

const car = ({ text, imageSrc }) => {
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
    <div className="p-10">
    <div className={styles.card}>
      <div className={styles.firstcontent}>
     <Image width={200} height={200} src={imageSrc} alt={text}/>
      </div>
      <div className={styles.secondcontent}>
        <span>{text}</span>
      </div>
    </div>
    </div>
  );
};

export default car;
