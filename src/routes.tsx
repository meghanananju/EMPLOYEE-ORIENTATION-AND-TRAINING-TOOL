 /*
*****************************************************************************
* License Information :Alten Global Technology Solutions Pvt. Ltd.                  *

*                      #72 & 73, Krishna Reddy Colony, Domlur layout,            *

*                      Domlur,Bangalore - 560071, INDIA                     *

*                      Licensed software and All rights reserved.           *

*****************************************************************************

* File             : routes.tsx
*
* Description      : Application Routes
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
import Dashboard from './views/dashboard';
// import AllComponents from './views/allComponents';
//  const Home = React.lazy(()=>import('./views/dashboard'));
 const Login = React.lazy(()=>import('./views/login'));
 const AllComponents = React.lazy(()=>import('./views/allComponents'));
 const Profile = React.lazy(()=>import('./views/user/profile'));
 const AddUser = React.lazy(()=>import('./views/user/addUser'));
 const VideoPage = React.lazy(()=>import('./views/courses'));

const routes = [
  { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard,  },
  { path: '/login', exact: true, name: 'Login', component: Login },
  { path: '/allComponents', exact: true, name: 'AllComponents', component: AllComponents },
  { path: '/profile', exact: true, name: 'Profile', component: Profile },
  {path: '/addUser', exact: true, name: 'AddUser', component: AddUser},
  {path: '/courses', exact: true, name: 'VideoPage', component: VideoPage},
];

export default routes;