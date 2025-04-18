 /*
*****************************************************************************
* License Information :Alten Global Technology Solutions Pvt. Ltd.                  *

*                      #72 & 73, Krishna Reddy Colony, Domlur layout,            *

*                      Domlur,Bangalore - 560071, INDIA                     *

*                      Licensed software and All rights reserved.           *

*****************************************************************************

* File             : Card.tsx
*
* Description      : Card Component
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
type CardProps = {
  title?: React.ReactNode; // change from string to React.ReactNode
  footer?: React.ReactNode;
  otherStyle?: string;
  children?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({
  title,
  footer,
  otherStyle = '',
  children,
}) => {
  return (
    <div
      className={`flex flex-col flex-wrap gap-2 dark:text-white max-h-md w-full bg-white dark:bg-neutral-900 p-5 rounded-md shadow-xl ${otherStyle}`}
    >
      {/* Card Header */}
      <h3 className="text-xl font-bold flex items-center gap-2">{title}</h3>

      {/* Card Body */}
      <div className="text-sm font-serif">
        {children}
      </div>

      {/* Card Footer */}
      {footer && <div className="mt-4">{footer}</div>}
    </div>
  );
};

export default Card; 
