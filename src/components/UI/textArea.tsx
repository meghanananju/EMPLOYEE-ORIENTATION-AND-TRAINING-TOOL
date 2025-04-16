 /*
*****************************************************************************
* License Information :Alten Global Technology Solutions Pvt. Ltd.                  *

*                      #72 & 73, Krishna Reddy Colony, Domlur layout,            *

*                      Domlur,Bangalore - 560071, INDIA                     *

*                      Licensed software and All rights reserved.           *

*****************************************************************************

* File             : input.tsx
*
* Description      : Input Component
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

// Textarea Component
interface TextareaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  rows?: number;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  errorMsg?: string;
}
const Textarea: React.FC<TextareaProps> = ({
  label,
  name,
  value,
  onChange,
  className = '',
  rows = 4,
  required = false,
  placeholder = '',
  disabled = false,
  errorMsg
}) => {
  return (
    <label htmlFor={name} className="block">
      <span className="text-sm font-medium text-gray-700 font-serif">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </span>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`font-serif mt-1 w-full resize-none rounded outline-gray-400 border-gray-300 outline-1 pl-2 pr-2 pt-2 sm:text-sm ${className} ${errorMsg ? 'outline-red-500' : ''} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        rows={rows}
        required={required}
        placeholder={placeholder}
        disabled={disabled}
      ></textarea>
      {errorMsg && <p className="text-red-500 text-sm mt-1 font-serif">{errorMsg}</p>}
    </label>
  );
};

export default Textarea;