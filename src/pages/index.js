import Image from "next/image";
import Navbar from "@/components/navbar";
// import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() { 
  // const [text] = useTypewriter({
  //     words: [ 'Software Engineer','Web Developer','Web Desginer', 'App Developer','Flutter Developer'],
  //     loop: {},
  //     typeSpeed: 150,
  //   });
  return (
   
    <>
      <section className="px-20 pt-10 flex justify-between items-start">
        <div className=" pr-20">
          <div className="text-6xl font-bold">
            <h1 className="leading-2 text-white">I'm a </h1>
            <h1 className="text-zinc-500">Sofware Engineer</h1>
          </div>
          <div className="pt-10 tracking-widest text-left text-gray-500 leading-2 pr-20 ">
            {" "}
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus blanditiis fugiat praesentium soluta dicta voluptatem
              reprehenderit aut consequuntur labore exercitationem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque commodi tempora voluptatum expedita omnis explicabo praesentium eaque rerum blanditiis quo.
            </p>
          </div>
          <div className="pt-20 flex ">
            <div className="pr-10" >
            <button className="bg-white px-10 py-2 text-black outline outline-offset-4 outline-4 outline-white
            ">Hire me</button></div>
            <div>
            <button className="bg-black px-10 py-2 text-white outline outline-offset-4 outline-4 outline-white
            ">Resume</button></div>
          </div>
        </div>
        <div>
          <div className="w-80 h-80 bg-white">image</div>
        </div>
      </section>
    </>
  );
}
