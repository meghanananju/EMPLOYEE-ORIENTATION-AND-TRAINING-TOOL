 /*
*****************************************************************************
* License Information :Alten Global Technology Solutions Pvt. Ltd.                  *

*                      #72 & 73, Krishna Reddy Colony, Domlur layout,            *

*                      Domlur,Bangalore - 560071, INDIA                     *

*                      Licensed software and All rights reserved.           *

*****************************************************************************

* File             : squareSwitch.tsx
*
* Description      : Square Switch Component
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

 
 


// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  faSquareCheck, faSquareXmark } from '@fortawesome/free-solid-svg-icons';

// interface SquareSwitchProps {
//   isOn: boolean;
//   onChange: (value: boolean) => void;
//   disabled?: boolean;
//   className?: string;
// }

// const SquareSwitch: React.FC<SquareSwitchProps> = ({
//   isOn,
//   onChange,
//   disabled = false,
//   className = '',
// }) => {
//   return (
//     <label
//       className={`relative inline-flex items-center ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} ${className}`}
//     >
//       <input
//         type="checkbox"
//         className="sr-only peer"
//         checked={isOn}
//         onChange={() => onChange(!isOn)}
//         disabled={disabled}
//       />
//       <div
//         className={`
//           peer relative w-10 h-5 bg-blue-500 
//           peer-focus:outline-none peer-focus:ring-2 ring-2 ring-blue-400 peer-focus:ring-blue-400
//           duration-300
//         `}
//       >
//         {/* Toggle Knob */}
//         <div
//           className={`
//             absolute  h-5 w-5 bg-white   
//             flex items-center justify-center text-blue-600 font-bold text-sm
//             transition-all duration-300 ease-in-out
//             ${isOn ? 'translate-x-5' : 'translate-x-0'}   
//           `}
//         >
//           {isOn ? <FontAwesomeIcon icon={faSquareCheck} color='green' /> : <FontAwesomeIcon icon={faSquareXmark}  color='red'/>}
//         </div>
//       </div>
//     </label>
//   );
// };

// export default SquareSwitch;



import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck, faSquareXmark } from '@fortawesome/free-solid-svg-icons';

interface SquareSwitchProps {
  isOn: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
  className?: string;
}

const SquareSwitch: React.FC<SquareSwitchProps> = ({
  isOn,
  onChange,
  disabled = false,
  className = '',
}) => {
  return (
    <label
      className={`relative inline-flex items-center ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} ${className}`}
    >
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isOn}
        onChange={() => onChange(!isOn)}
        disabled={disabled}
      />
      <div
        className={`
          peer relative w-10 h-5 
          ${isOn ? 'bg-blue-500' : 'bg-white'}
          peer-focus:outline-none peer-focus:ring-2 ring-2 ring-blue-400 peer-focus:ring-blue-400
          duration-300
        `}
      >
        {/* Toggle Knob */}
        <div
          className={`
            absolute  h-5 w-5 bg-white   
            flex items-center justify-center text-blue-600 font-bold text-md
            transition-all duration-300 ease-in-out
            ${isOn ? 'translate-x-5' : 'translate-x-0'}   
          `}
        >
          {isOn ? <FontAwesomeIcon icon={faSquareCheck}   /> : <FontAwesomeIcon icon={faSquareXmark}   />}
        </div>
      </div>
    </label>
  );
};

export default SquareSwitch;








