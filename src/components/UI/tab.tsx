 /*
*****************************************************************************
* License Information :Alten Global Technology Solutions Pvt. Ltd.                  *

*                      #72 & 73, Krishna Reddy Colony, Domlur layout,            *

*                      Domlur,Bangalore - 560071, INDIA                     *

*                      Licensed software and All rights reserved.           *

*****************************************************************************

* File             : tab.tsx
*
* Description      : Tab Component
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
import React, { useState } from 'react'; 
interface TabProps {
  name: string;
  active?: boolean;
  icon?: React.ReactNode;
  content?: string | React.ReactNode;
  component?: React.ReactNode;
}

interface TabsComponentProps {
  tabs: TabProps[];
}

const Tab: React.FC<TabsComponentProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs.find(tab => tab.active)?.name || tabs[0].name);

  return (
    <div className="w-full mx-auto h-full flex flex-col">
      {/* Tab Headers */}
      <div className="flex overflow-x-auto border-b border-gray-300 rounded-md font-bold">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-bold cursor-pointer whitespace-nowrap ${
              activeTab === tab.name
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-blue-600'
            } transition-colors`}
          >
            {tab.icon && <span>{tab.icon}</span>}
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4 bg-white shadow-lg overflow-auto flex-1 ">
        {tabs.map((tab) => (
          tab.name === activeTab && (
            <div key={tab.name} className="min-h-[200px]">
              {tab.component || <p>{tab.content}</p>}
            </div>
          )
        ))}
      </div>
    </div>
  );
};


export default Tab;