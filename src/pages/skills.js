import React from "react";
import cardd from "@/components/cardd";
// import styles from "@/styles/skills.module.css"
import styles from "@/styles/skill.module.css";


import Car from "@/components/car";
import flut from "../../public/flut.svg";
import nextjs from "../../public/nextjs.svg";
// import react from "../../public/reactjs.svg";
import mongo from "../../public/mongodb.svg";
import mysql from "../../public/mysql.svg";
import react from "../../public/reactjs.svg";
import adobeI from "../../public/adobeI.svg";
import adobeP from "../../public/adobeP.svg";
import figma from "../../public/figma.svg";
import tailwind from "../../public/tailwind.svg";
import Image from "next/image";

const skills = () => {
  const techs = [
    {
      id: 1,
      src: flut,
      title: "Flutter",
    },
    {
      id: 2,
      src: nextjs,
      title: "NextJS",
    },
    {
      id: 3,
      src: tailwind,
      title: "TailwindCSS",
    },
    {
      id: 4,
      src: mongo,
      title: "MongoDB",
    },
    {
      id: 5,
      src: mysql,
      title: "MySQL",
    },
    {
      id: 6,
      src: react,
      title: "ReactJS",
    },
    {
      id: 7,
      src: adobeI,
      title: "AdobeI",
    },
    {
      id: 8,
      src: adobeP,
      title: "AdobeP",
    },

    {
      id: 9,
      src: figma,
      title: "Figma",
    },
  ];
  return (
    <section className="pt-10 px-10">
      <div className="grid grid-cols-2 pr-10  items-center sm:grid-cols-2 md:grid-cols-5 gap-2">
        {techs.map(({ id, src, title }) => (
          <div
            key={id}
           
          >
        <div className="p-10">
    <div className={styles.card}>
      <div className={styles.firstcontent}>
     <Image width={200} height={200} src={src} alt={title}/>
      </div>
      <div className={styles.secondcontent}>
        <span>{title}</span>
      </div>
    </div>
    </div>

            {/* <img className="h-28 w-38 mx-auto" src={src} alt="" />
            <p className="text-xl mt-4 text-center">{title}</p> */}
          </div>
        ))}
      </div>
      {/* <div className="text-white px-20">
        {/* <Car text={title} imageSrc={src} /> 
      </div> */}
    </section>
  );
};

export default skills;
