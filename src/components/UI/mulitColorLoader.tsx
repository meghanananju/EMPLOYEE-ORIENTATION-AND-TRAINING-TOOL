 /*
*****************************************************************************
* License Information :Alten Global Technology Solutions Pvt. Ltd.                  *

*                      #72 & 73, Krishna Reddy Colony, Domlur layout,            *

*                      Domlur,Bangalore - 560071, INDIA                     *

*                      Licensed software and All rights reserved.           *

*****************************************************************************

* File             : multiColorLoader.tsx
*
* Description      : Mulit Color loader Component
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
// components/MultiColorLoader.tsx 
const MultiColorLoader: React.FC = () => {
  return (
    <div className="w-full h-1.5 rounded overflow-hidden relative bg-gray-200">
      <div className="loader-bar">
        <div className="bar red" />
        <div className="bar yellow" />
        <div className="bar green" />
        <div className="bar blue" />
        <div className="bar purple" />
      </div>
    </div>
  );
};

export default MultiColorLoader;