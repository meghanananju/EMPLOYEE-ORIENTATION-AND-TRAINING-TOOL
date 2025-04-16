 /*
*****************************************************************************
* License Information :Alten Global Technology Solutions Pvt. Ltd.                  *

*                      #72 & 73, Krishna Reddy Colony, Domlur layout,            *

*                      Domlur,Bangalore - 560071, INDIA                     *

*                      Licensed software and All rights reserved.           *

*****************************************************************************

* File             : Loader.tsx
*
* Description      : Loader Component
*
* Author(s)        : Chetan Biradar
*
* Version History:
* <Version Number>                 <Author>                <date>        <defect Number>      <Modification
*                                                                                           made and the
*                                                                                           reason for
*                                                                                           modification >
*  1.0                            Chetan Biradar          14-04-2025         --              initial version
*
* References        :
*                     
* Assumption(s)     : None.
*                     
* Constraint(s)     : None.
*                     
 ****************************************************************************
*/
import React ,{useState,useEffect} from "react";
//  Loader Component
const Loader = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ['border-t-blue-600', 'border-t-pink-600', 'border-t-red-600', 'border-t-yellow-600', 'border-t-green-600'];

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 500); // Change color every 500ms
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="fixed inset-0 flex items-center justify-center  opacity-100 z-50">
      <div className={`w-15 h-15 border-8 text-4xl animate-spin border-gray-300 flex items-center justify-center rounded-full ${colors[colorIndex]}`}>
      </div>
    </div>
  );
};

export default Loader;