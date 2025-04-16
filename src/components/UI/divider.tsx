 /*
*****************************************************************************
* License Information :Alten Global Technology Solutions Pvt. Ltd.                  *

*                      #72 & 73, Krishna Reddy Colony, Domlur layout,            *

*                      Domlur,Bangalore - 560071, INDIA                     *

*                      Licensed software and All rights reserved.           *

*****************************************************************************

* File             : divider.tsx
*
* Description      : Divider Component
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

interface DividerProps {
  title: string;
  className?: string;
  lineColor?: string;
  textColor?: string;
}

const Divider: React.FC<DividerProps> = ({
  title,
  className = "",
  lineColor = "bg-gray-300",
  textColor = "text-gray-900",
}) => {
  return (
    <span className={`flex items-center ${className}`}>
      <span className={`h-px flex-1 ${lineColor}`}></span>

      <span className={`shrink-0 px-4 ${textColor}`}>{title}</span>

      <span className={`h-px flex-1 ${lineColor}`}></span>
    </span>
  );
};

export default Divider;
