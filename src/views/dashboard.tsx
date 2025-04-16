 /*
*****************************************************************************
* License Information :Alten Global Technology Solutions Pvt. Ltd.                  *

*                      #72 & 73, Krishna Reddy Colony, Domlur layout,            *

*                      Domlur,Bangalore - 560071, INDIA                     *

*                      Licensed software and All rights reserved.           *

*****************************************************************************

* File             : Dashboard.tsx
*
* Description      : Dashboard
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
import ProCard from "../components/UI/proCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import Tab from "../components/UI/tab";
 const App = () => { 
  
    const tabs = [
       {
        name: 'Web Developement',
          active: true,
        // icon: <SettingsIcon />,
          content:
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6 gap-6">
      <ProCard
        title="TypeScript"
        // image="https://cdn-icons-png.flaticon.com/512/1055/1055646.png"
        image="https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
        content="Learn TypeScript from the ground up and finish the course as an advanced React developer"
        buttonText="Learn More"
        buttonLink="/details"
/>
 <ProCard
        title="JavaScript"
         image="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
        content="Learn JavaScript from the ground up and finish the course as an advanced React developer"
        buttonText="Learn More"
        buttonLink="/details"
/>
<ProCard
        title="React JS"
         image="https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
        content="Learn React js from the ground up and finish the course as an advanced React developer."
        buttonText="Learn More"
        buttonLink="/details"
/>
 <ProCard
        title="HTML"
         image="https://cdn-icons-png.flaticon.com/512/5968/5968267.png"
        content="Learn HTML from the ground up and finish the course as an advanced React developer"
        buttonText="Learn More"
        buttonLink="/details"
/>
<ProCard
        title="CSS"
         image="https://cdn-icons-png.flaticon.com/512/5968/5968242.png"
        content="Learn CSS from the ground up and finish the course as an advanced React developer"
        buttonText="Learn More"
        buttonLink="/details"
/>
<ProCard
        title="Redux"
         image="https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
        content="Learn Redux from the ground up and finish the course as an advanced React developer"
        buttonText="Learn More"
        buttonLink="/details"
/>

      </div>
      },
      {
        name: 'Data Science',
        // icon: <HomeIcon />,
        content: 'Welcome to the Home Tab!'
      },
      {
        name: 'Leadership',
        // icon: <ProfileIcon />,
        content: 'This is your profile information.'
      },
     
      {
        name: 'Communication',
        // icon: <ContactIcon />,
        content: 'Reach us via email or phone.'
      },
      {
        name: 'Bussinsess Analytics',
        // icon: <HelpIcon />,
        content: 'Find FAQs and support options here.'
      },
      {
        name: 'AI',
        // icon: <AboutIcon />,
           content: 'Find FAQs and support options here.'
      }
    ];

  return (
 <>
 <div>
  <h1 className="text-2xl font-semibold font-serif m-3">
    <FontAwesomeIcon icon={faGraduationCap}/> All the skills you need in one place
  </h1>

  </div>
   <Tab tabs={tabs}/> 
 </>   
  );
};

export default App;
