 /*
*****************************************************************************
* License Information :Alten Global Technology Solutions Pvt. Ltd.                  *

*                      #72 & 73, Krishna Reddy Colony, Domlur layout,            *

*                      Domlur,Bangalore - 560071, INDIA                     *

*                      Licensed software and All rights reserved.           *

*****************************************************************************

* File             : select.tsx
*
* Description      : Select Component
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

import React from "react";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
type Option = {
  label: string;
  value: string;
};

type CustomSelectProps = {
  label: string;
  name: string;
  id?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
  disabled?: boolean;
};

const Select: React.FC<CustomSelectProps> = ({
//   label,
  name,
  id,
  value,
  onChange,
  options,
  disabled = false,
}) => {
  return (
    <div className="w-full"> 
      <div className="relative">
        <select
          id={id || name}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`w-full appearance-none rounded-md border   border-gray-300 bg-white px-3 py-2 mt-0.5 pr-10 shadow-sm sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            disabled ? "bg-gray-100 cursor-not-allowed text-gray-500" : " cursor-pointer"
          }`}
        >
          {/* Optional default */}
          {/* <option value="">Please select</option> */}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="cursor-pointer">
              {opt.label}
            </option>
          ))}
        </select>

        {/* Dropdown Icon */}
        <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-400">
          {/* <FaChevronDown className="h-4 w-4" /> */}
          <FontAwesomeIcon icon={faChevronDown} className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
};

export default Select;

