 /*
*****************************************************************************
* License Information :Alten Global Technology Solutions Pvt. Ltd.                  *

*                      #72 & 73, Krishna Reddy Colony, Domlur layout,            *

*                      Domlur,Bangalore - 560071, INDIA                     *

*                      Licensed software and All rights reserved.           *

*****************************************************************************

* File             : modal.tsx
*
* Description      : Modal Component
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
import React,{useEffect} from "react";
// Modal Component 
type ModalProps = {
  size?: "sm" | "md" | "lg" | "xl";
  title?: string;
  content?: string;
  onCancel: () => void;
  onViewDetails?: () => void;
  cancelText?: string;
  viewDetailsText?: string;
  children?: React.ReactNode;
};

const sizeClasses = {
  sm: "max-w-[470px]",
  md: "max-w-[570px]",
  lg: "max-w-[770px]",
  xl: "max-w-[970px]",
};

const Modal: React.FC<ModalProps> = ({
  size = "md",
  title,
  content,
  onCancel,
  onViewDetails,
  cancelText = "Cancel",
  viewDetailsText = "View Details",
  children,
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (    
    <div className="fixed inset-0 z-50 flex justify-center items-center w-full h-full">
  {/* Overlay */}
  <div className="fixed inset-0 w-full h-full bg-black opacity-50"></div>

  {/* Modal Container - Now Fully Rounded */}
  <div
    className={`w-full ${sizeClasses[size]} bg-white rounded-lg shadow-lg relative z-50 flex flex-col max-h-[90vh] overflow-hidden`}
  >
    {/* Header (Fixed) */}
    <div className="p-4 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white z-10">
      {title && <h3 className="text-gray-900 text-lg sm:text-xl font-bold">{title}</h3>}
      <button
        className="text-gray-500 hover:text-gray-900 text-2xl font-bold cursor-pointer"
        onClick={onCancel}
      >
        &times;
      </button>
    </div>

    {/* Content Area (Scrollable) */}
    <div className="p-4 overflow-y-auto flex-grow" style={{ maxHeight: "50vh" }}>
      {children ? children : <p className="text-gray-600 text-sm leading-relaxed">{content}</p>}
    </div>

    {/* Footer (Fixed) */}
    <div className="p-4 border-t border-gray-200 flex justify-end items-center sticky bottom-0 bg-white z-10">
      <button
        className="text-gray-900 rounded-md border border-gray-300 px-4 py-2 text-sm font-medium transition hover:border-blue-600 hover:bg-blue-600 hover:text-white cursor-pointer"
        onClick={onCancel}
      >
        {cancelText}
      </button>

      {onViewDetails && (
        <button
          className="bg-blue-500 text-white rounded-md px-4 py-2 text-sm font-medium transition hover:bg-opacity-90 ml-3 cursor-pointer"
          onClick={onViewDetails}
        >
          {viewDetailsText}
        </button>
      )}
    </div>
  </div>
</div>

  );
}; 

export default Modal;