 /*
*****************************************************************************
* License Information :Alten Global Technology Solutions Pvt. Ltd.                  *

*                      #72 & 73, Krishna Reddy Colony, Domlur layout,            *

*                      Domlur,Bangalore - 560071, INDIA                     *

*                      Licensed software and All rights reserved.           *

*****************************************************************************

* File             : alertModal.tsx
*
* Description      : Alert Component
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

 import React, { useEffect} from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';  
import { 
   faCheckCircle, 
  faExclamationTriangle, 
  faInfoCircle, 
   faTimesCircle
} from '@fortawesome/free-solid-svg-icons';
// Alert Component  
interface AlertModalProps {
  type: 'success' | 'warning' | 'error' | 'info';
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  onConfirmText?: string;
  onCancelText?: string;
}

  const Alert: React.FC<AlertModalProps> = ({
  type,
  title,
  message,
  onConfirm,
  onCancel,
  onConfirmText = 'Confirm',
  onCancelText = 'Cancel',
}) => {
  // Style classes based on the alert type
  const typeClasses: Record<string, { bg: string; text: string; icon: IconDefinition; buttonBg: string }> = {
  success: { bg: 'bg-green-100 text-green-600', text: 'text-green-600', icon: faCheckCircle, buttonBg: 'bg-green-600' },
  warning: { bg: 'bg-yellow-100 text-yellow-600', text: 'text-yellow-600', icon: faExclamationTriangle, buttonBg: 'bg-yellow-600' },
  error: { bg: 'bg-red-100 text-red-600', text: 'text-red-600', icon: faTimesCircle, buttonBg: 'bg-red-600' },
  info: { bg: 'bg-blue-100 text-blue-600', text: 'text-blue-600', icon: faInfoCircle, buttonBg: 'bg-blue-600' },
};


  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div>
      {/* Transparent Background Overlay */}
      <div className="fixed inset-0 w-full h-full bg-black opacity-50 z-[9998] modal-overlay"></div>

      {/* Modal Component */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center">
        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              {/* Icon */}
              <div className={`mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${typeClasses[type].bg} sm:mx-0 sm:h-10 sm:w-10`}>
                <FontAwesomeIcon icon={typeClasses[type].icon} className={`w-6 h-6 ${typeClasses[type].text}`} />
              </div>
              
              {/* Alert Content */}
              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <h3 className="text-base font-semibold leading-6 text-gray-900">{title}</h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{message}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              className={`inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold cursor-pointer text-white shadow-sm hover:opacity-80 sm:ml-3 sm:w-auto ${typeClasses[type].buttonBg}`}
              onClick={onConfirm}
            >
              {onConfirmText}
            </button>
            <button
              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold cursor-pointer text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              onClick={onCancel}
            >
              {onCancelText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;