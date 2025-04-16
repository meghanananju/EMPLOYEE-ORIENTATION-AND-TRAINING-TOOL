 /*
*****************************************************************************
* License Information :Alten Global Technology Solutions Pvt. Ltd.                  *

*                      #72 & 73, Krishna Reddy Colony, Domlur layout,            *

*                      Domlur,Bangalore - 560071, INDIA                     *

*                      Licensed software and All rights reserved.           *

*****************************************************************************

* File             : proCard.tsx
*
* Description      : Product Card Component
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
import { useNavigate } from "react-router-dom";

type ProCardProps = {
  title: string;
  image: string;
  content: string;
  buttonText: string;
  buttonLink: string;
};

const ProCard: React.FC<ProCardProps> = ({
  title,
  image,
  content,
  buttonText,
  buttonLink,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(buttonLink);
  };

  return (
    <div className="w-60 rounded-lg bg-gradient-to-br from-white to-gray-50 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-gray-700">
      <div className="relative h-28 overflow-hidden rounded-t-lg group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-400 opacity-90"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:16px_16px] animate-pulse"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="w-12 h-12 object-contain transform transition-transform group-hover:scale-110 duration-300"
          />
        </div>
      </div>
      <div className="p-4 space-y-2">
        <h5 className="text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h5>
        <p className="text-sm text-gray-700 leading-snug">{content}</p>
      </div>
      <div className="px-4 pb-4">
        <button
          onClick={handleClick}
          className="group w-full cursor-pointer flex items-center justify-center gap-1 px-4 py-2 text-sm font-medium text-white rounded-md bg-gradient-to-r from-blue-500 to-blue-500 hover:from-blue-500 hover:to-blue-600 transition-all duration-300"
        >
          {buttonText}
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
          >
            <path
              d="M17 8l4 4m0 0l-4 4m4-4H3"
              strokeWidth={2}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProCard;
