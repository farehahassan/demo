
import { Raleway } from "next/font/google";

const inter = Raleway({ subsets: ["latin"] });

export default function Home() { 

  return (
   
      <section className=" home px-20 pt-40 flex justify-between items-start">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-fu ll md:flex-row pr-4 ">
        <div >
          <div className="text-6xl font-bold">
            <h1 className="leading-2 text-white">I&apos;m a </h1>
            <h1 className="text-zinc-500 md:text-7xl ">Sofware Engineer</h1>
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
            <button className="bg-white px-10 py-2 text-black outline outline-offset-4 outline-4 outline-gray-500
            ">Hire me</button></div>
            <div>
            <button className="bg-black px-10 py-2 text-white outline outline-offset-4 outline-4 outline-gray-500
            ">Resume</button></div>
          </div>
        </div>
        <div className="pt-10">
          <div className="w-80 h-80 bg-white">image</div>
        </div>
        </div>
      </section>
    
  );
}
