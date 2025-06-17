// import Link from "next/link";
// import Image from "next/image";
// import { Poppins } from "next/font/google";
// import { Merriweather } from "next/font/google";

// const merriweather = Merriweather({
//   subsets: ['latin'],
//   weight: ['700'], 
//   display: 'swap',
// });

// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['500'],
//   display: 'swap',
// });

 
// export default function Hero() {
//   return (
//     <section className="relative px-6 py-24 overflow-hidden bg-white">
//         <div className={`max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center${merriweather.className}`}>
//           <h1 className="text-5xl font-bold leading-tight text-gray-900">
//             Scale design & dev
//             <br />
//             operations with
//             <br />
//             <span className="text-black-600">Avocado Enterprise</span>
//           </h1>
          
//           <div className={`max-w-l text-left px-2 pt-7 pb-8 ${poppins.className}`}>
//             <h2 className="text-m text-gray-400">
//               A fully integrated suite of authentication & authoriz products, Stytch's
//               <br />
//               platform removes the headache of.
//             </h2>

//             <div className={`max-w-xl text-left px-2 pt-7 pb-8 ${poppins.className}`}>
//               <button className="bg-white-600 text-black text-sm px-7 py-4 rounded-4xl shadow-md hover:shadow-lg transition-all duration-200">
//                 Download the theme
//               </button>
//             </div>

            
//           </div>
//         </div>
//       </section>
//   )
    
// }



import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative px-6 py-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        
         
        <div className="md:w-1/2 text-left ">
          <h1 className="text-5xl font-bold leading-tight text-gray-900">
            Scale design & dev
            <br />
            operations with
            <br />
            <span className="text-black">Avocode Enterprise</span>
          </h1>

          <p className="text-sm text-gray-500 mt-4 ${poppins.className}" >
            A fully integrated suite of authentication & authoriz products, Stytch’s
            platform removes the headache of.
          </p>

          <button className="mt-6 bg-white text-black text-sm px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200">
            Download The Theme
          </button>
        </div>

         
        <div className="md:w-1/2 flex justify-center relative mb-10 md:mb-0">
          <Image
            src="/banner.png" 
            alt="Hero Chart"
            width={500}
            height={300}
            className="rounded-xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}


