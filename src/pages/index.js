
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() { 

  return (
   
      <section className=" home px-20 pr-10 pt-20 flex flex-col md:flex-col justify-between items-start">
        <div className="max-w-screen-lg mx-auto flex-col flex items-center justify-center h-fu ll md:flex-row pr-4 ">
        <div >
          <div className="text-6xl font-bold">
            <h1 className="leading-2 text-white">I&apos;m a </h1>
            <h1 className="text-zinc-500 md:text-7xl ">Sofware Engineer</h1>
          </div>
          <div className="pt-10 tracking-widest text-left text-gray-500 leading-2 pr-20 ">
            {" "}
            <p>
              {" "}
              My career started in web and app development, focusing on user-friendly solutions that blend aesthetics and functionality. Today, I'm passionate about pushing the boundaries of technology in Artificial Intelligence and Robotics, aiming to create intelligent systems that transform our digital landscape. My journey is a constant pursuit of innovation and excellence, and I'm committed to making a meaningful impact in the world of software engineering.
            </p>
          </div>
          <div className="pt-20 flex flex-col md:flex-row md:pt-20 ">
            <div className="pr-10 pt-5" >
            <button className="bg-white px-10 py-2 text-black outline outline-offset-4 outline-4 outline-gray-500 hover:outline-dotted
            ">Hire me</button></div>
            <div className="pt-5">
            <button className="bg-black px-10 py-2  text-white outline outline-offset-4 outline-4 outline-gray-500 hover:outline-dotted
            ">Resume</button></div>
          </div>
        </div>
        <div className="pt-10 flex-col md:pl-6 ">
         <Image 
         src={"/home.png"}
         width={3000}
         height={3000}
         />
        </div>
        </div>
      </section>
    
  );
}
