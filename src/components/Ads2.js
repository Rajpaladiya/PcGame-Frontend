import React from 'react'

const Ads2 = () => {
  return (
    <>
    <div className='mobileHide'>
    <iframe src="//forgetfulpromptlyappointment.com/watchnew?key=4ed6975e9d2b9c060220bb1b2ca01e91" width={728} height={90} frameBorder={0} scrolling="no"></iframe>

    </div>

    <div className="mobileShow" style={{textAlign:"center"}}>

    <iframe src="//forgetfulpromptlyappointment.com/watchnew?key=fbead4547b48a61514b0b6ae6e67a262" width="320" height="50" frameBorder="0" scrolling="no"></iframe>


      
    </div>
    </>
  )
}

export default Ads2
































































// import React, { useEffect, useRef } from 'react';

// export default function Ads2() {
//   const bannerRef = useRef(null); // Specify the type as HTMLDivElement or null

//   const  atOptions = {
//     key: '4ed6975e9d2b9c060220bb1b2ca01e91',
//     format: 'iframe',
//     height: 90,
//     width: 728,
//     params: {},
//   };
  


//   useEffect(() => {
    
//       if (bannerRef.current && !bannerRef.current.firstChild) {
//         const conf = document.createElement('script');
//         const script = document.createElement('script');
  
//         script.type = 'text/javascript';
//         script.src = `//forgetfulpromptlyappointment.com/${atOptions.key}/invoke.js`;
  
//         conf.innerHTML = `var atOptions = ${JSON.stringify(atOptions)};`;
  
//         if (bannerRef.current) {
//           bannerRef.current.appendChild(conf);
//           bannerRef.current.appendChild(script);
//         }
//       }
    
   
//   }, [] );

//   return (
   
    


   
//     <div
//       className="mx-2 my-5 border border-gray-200 justify-center items-center text-white text-center"
//       ref={bannerRef}
//     >
      
//     </div>
   
//   );
// }
