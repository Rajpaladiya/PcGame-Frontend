import React, { useEffect, useRef } from 'react';

export default function Ads() {
  const bannerRef = useRef(null); // Specify the type as HTMLDivElement or null

  const atOptions = {
    key: 'fbead4547b48a61514b0b6ae6e67a262',
    format: 'iframe',
    height: 50,
    width: 320,
    params: {},
  };

  useEffect(() => {
    
      if (bannerRef.current && !bannerRef.current.firstChild) {
        const conf = document.createElement('script');
        const script = document.createElement('script');
  
        script.type = 'text/javascript';
        script.src = `//forgetfulpromptlyappointment.com/${atOptions.key}/invoke.js`;
  
        conf.innerHTML = `var atOptions = ${JSON.stringify(atOptions)};`;
  
        if (bannerRef.current) {
          bannerRef.current.appendChild(conf);
          bannerRef.current.appendChild(script);
        }
      }
    
   
  }, [] );
  
  return (
    <>
  
    <div 
      className="mx-2 my-5 border border-gray-200 justify-center items-center text-white text-center"
      ref={bannerRef}
    >
      {/* Content for the 'div' can be added here if needed */}
    </div>
    </>

  );
}
