 /*
*****************************************************************************
* License Information :Alten Global Technology Solutions Pvt. Ltd.                  *

*                      #72 & 73, Krishna Reddy Colony, Domlur layout,            *

*                      Domlur,Bangalore - 560071, INDIA                     *

*                      Licensed software and All rights reserved.           *

*****************************************************************************

* File             : countCard.tsx
*
* Description      : Count Card Component
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
import React from 'react';

type CountCardProps = {
  title: string;
  description?: string;
  number: number;
  otherStyle?: string;
  children?: React.ReactNode;
};

// Count Card Component
const CountCard: React.FC<CountCardProps> = ({
  title,
  description,
  number,
  otherStyle = '',
  children,
}) => {
  return (
    <div
      className={`simple-card w-full bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden ${otherStyle}`}
    >
      {/* Number Circle */}
      <div className="circle-number w-20 h-20 bg-blue-400 rounded-full absolute -right-9 -top-11">
        <p className="number-text absolute bottom-2 left-5 text-white text-md">{number}</p>
      </div>

      {/* Card Content */}
      <h1 className="font-bold text-xl">{title}</h1>

      {children ? (
        <div className="text-sm text-zinc-500 leading-6">{children}</div>
      ) : (
        description && <p className="text-sm text-zinc-500 leading-6">{description}</p>
      )}
    </div>
  );
};

export default CountCard;
