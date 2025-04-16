 /*
*****************************************************************************
* License Information :Alten Global Technology Solutions Pvt. Ltd.                  *

*                      #72 & 73, Krishna Reddy Colony, Domlur layout,            *

*                      Domlur,Bangalore - 560071, INDIA                     *

*                      Licensed software and All rights reserved.           *

*****************************************************************************

* File             : AppContent.tsx
*
* Description      : App Content
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
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

// routes config
import routes from '../routes'

interface RouteConfig {
  path: string
  exact?: boolean
  name?: string
  component: React.ComponentType<unknown>
}

const AppContent: React.FC = () => {
  return (
    <Routes>
      {(routes as RouteConfig[]).map((route, idx) => (
        <Route
          key={idx}
          path={route.path}
          element={React.createElement(route.component)}
        />
      ))}
      <Route path="/" element={<Navigate to="dashboard" replace />} />
    </Routes>
  )
}

export default AppContent
