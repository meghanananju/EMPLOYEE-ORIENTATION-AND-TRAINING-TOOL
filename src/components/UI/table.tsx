 /*
*****************************************************************************
* License Information :Alten Global Technology Solutions Pvt. Ltd.                  *

*                      #72 & 73, Krishna Reddy Colony, Domlur layout,            *

*                      Domlur,Bangalore - 560071, INDIA                     *

*                      Licensed software and All rights reserved.           *

*****************************************************************************

* File             : table.tsx
*
* Description      : Table Component
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

const Table: React.FC<{
  children: React.ReactNode;
  className?: string;
  border?: string;
  height?: string; // New prop to control height
}> = ({
  children,
  className = '',
  border = 'border',
  height = 'h-[calc(100vh-12rem)]', // default height if not passed
}) => {
  return (
    <div className={`overflow-x-auto shadow-md   ${className}`}>
      <div className={`relative ${height} overflow-y-auto`}>
        <table className={`min-w-full bg-white text-sm text-gray-700 ${border}`}>
          {children}
        </table>
      </div>
    </div>
  );
};

const Thead: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  return (
    <thead className={`sticky top-0 bg-blue-500 text-white z-10 ${className}`}>
      <Tr>{children}</Tr>
    </thead>
  );
};

const Tbody: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  return <tbody className={className}>{children}</tbody>;
};

const Tr: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  return (
    <tr
      className={`border-b transition-colors cursor-pointer duration-200 ${className}`}
    >
      {children}
    </tr>
  );
};

const Th: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  return (
    <th
      className={`px-4 py-2 text-left font-semibold text-xs tracking-wider text-white ${className}`}
    >
      {children}
    </th>
  );
};

const Td: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  return (
    <td
      className={`px-4 py-2 text-left text-xs font-medium text-gray-800 ${className}`}
    >
      {children}
    </td>
  );
};

export { Table, Thead, Tbody, Tr, Th, Td };

