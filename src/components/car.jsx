import Image from 'next/image';
import React from 'react';


const car = () => {
    return (
//         <div>
//             <div classNameName="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
//   <div classNameName="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
//   </div>
//   <div classNameName="p-6">
//     <h5 classNameName="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
//      Tailwind card
//     </h5>
//     <p classNameName="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula. 
//     </p>
//   </div>
//   <div classNameName="p-6 pt-0">
//     <button data-ripple-light="true" type="button" classNameName="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
//       Read More
//     </button>
//   </div>
// </div>
//         </div> );
<div className="w-80 p-4 bg-gray-500 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <Image className="w-full h-40 object-cover rounded-t-lg" alt="Card Image" src="/home.png" width={1000} height={1000}/>
        <div className="p-4">
            <h2 className="text-xl  font-semibold">Beautiful Card</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis ante sit amet tellus ornare tincidunt.</p>
            <div className="flex justify-between items-center mt-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">Learn More</button>
            </div>
        </div>
    </div>
   );
};

export default car;