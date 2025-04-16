 /*
*****************************************************************************
* License Information :Alten Global Technology Solutions Pvt. Ltd.                  *

*                      #72 & 73, Krishna Reddy Colony, Domlur layout,            *

*                      Domlur,Bangalore - 560071, INDIA                     *

*                      Licensed software and All rights reserved.           *

*****************************************************************************

* File             : Layout.tsx
*
* Description      : Layout
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
import React, { useRef, useState, Suspense } from 'react';
import Header from './layoutHeader';
import Sidebar from './sidebar';
import Footer from './layoutFooter';
 import Loader from '../components/UI/loader';
import AppContent from './appContent';

const Layout: React.FC = () => {
  const contentWrapperRef = useRef<HTMLDivElement>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(() =>
    JSON.parse(localStorage.getItem('sidebarPinned') || 'false')
  );

  const handleSidebarStateChange = (open: boolean) => {
    setIsSidebarOpen(open);
  };

  const loadingHeader = () => (
    <div className="h-16 w-full flex items-center justify-center border-b bg-white shadow-sm text-gray-600 text-sm">
      Loading Header...
    </div>
  );

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full transition-all duration-300 ${
          isSidebarOpen ? 'w-56' : 'w-16'
        }`}
      >
        <Sidebar onSidebarStateChange={handleSidebarStateChange} />
      </div>

      {/* Header */}
      <div className="fixed top-0 left-0 right-0 h-16 z-10">
        <Suspense fallback={loadingHeader()}>
          <Header />
        </Suspense>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-10">
        <Footer />
      </div>

      {/* Content Area */}
      <div
        className={`absolute top-14 bottom-12 right-0 transition-all duration-300 ${
          isSidebarOpen ? 'left-56' : 'left-16'
        }`}
      >
        <div
          ref={contentWrapperRef}
          className="h-full w-full overflow-y-auto px-4 py-4"
        >
          <main role="main" className=" h-full">
            <Suspense fallback={<Loader />}>
              <AppContent />
            </Suspense>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;

 
 


 
 
 
