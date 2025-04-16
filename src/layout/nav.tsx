 
 /*
*****************************************************************************
* License Information :Alten Global Technology Solutions Pvt. Ltd.                  *

*                      #72 & 73, Krishna Reddy Colony, Domlur layout,            *

*                      Domlur,Bangalore - 560071, INDIA                     *

*                      Licensed software and All rights reserved.           *

*****************************************************************************

* File             : nav.tsx
*
* Description      : Navigation for Sidebar
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
import {
  faPowerOff,
  faUsers,
  faCreditCard,
  faBan,
  faCalendar,
  faFileInvoice,
  faUser,
  faCircleInfo,
  faShieldHalved,
  faGear,
  faCogs,
  faLock,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { ReactElement } from 'react';

export interface NavItem {
  label: string;
  path: string;
  icon: ReactElement;
  children?: NavItem[];
}

const config: NavItem[] = [
  { label: 'Dashboard', path: '/dashboard', icon: <FontAwesomeIcon icon={faGear} /> },
  { label: 'All Components', path: '/allComponents', icon: <FontAwesomeIcon icon={faCreditCard} /> },
  
  {
    label: 'Teams',
    path: '#Teams',
    icon: <FontAwesomeIcon icon={faUsers} />,
    children: [
      {
        label: 'Management',
        path: '#',
        icon: <FontAwesomeIcon icon={faCogs} />,
        children: [
          {
            label: 'Admins',
            path: '#',
            icon: <FontAwesomeIcon icon={faUser} />,
            children: [
              {
                label: 'Permissions',
                path: '/permissions',
                icon: <FontAwesomeIcon icon={faLock} />,
              },
            ],
          },
           {
                label: 'App',
                path: '/app',
                icon: <FontAwesomeIcon icon={faLock} />,
              },
        ],
      },
      { label: 'Banned Users', path: '/banned-users', icon: <FontAwesomeIcon icon={faBan} /> },
      { label: 'Calendar', path: '/calendar', icon: <FontAwesomeIcon icon={faCalendar} /> },
    ],
  },
  { label: 'Billing', path: '/billing', icon: <FontAwesomeIcon icon={faFileInvoice} /> },
  {
    label: 'Account',
    path: '#Account',
    icon: <FontAwesomeIcon icon={faUser} />,
    children: [
      { label: 'Details', path: '/details', icon: <FontAwesomeIcon icon={faCircleInfo} /> },
      { label: 'Security', path: '/security', icon: <FontAwesomeIcon icon={faShieldHalved} /> },
    ],
  },
  {
    label: 'Logout',
    path: '/logout',
    icon: <FontAwesomeIcon icon={faPowerOff} />,
  },
  
  { label: 'General', path: '/general', icon: <FontAwesomeIcon icon={faCircleInfo} /> },
];

const colorScheme = {
  bg: 'bg-white',
  border: 'border-gray-100',
  text: 'text-gray-500 hover:bg-gray-200 hover:text-gray-700',
  activeBg: 'bg-blue-50 text-blue-600 rounded-md',
};

export { config, colorScheme };

