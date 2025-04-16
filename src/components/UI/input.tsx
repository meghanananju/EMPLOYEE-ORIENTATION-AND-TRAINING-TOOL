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

type InputProps = {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  className?: string;
  required?: boolean;
  value?: string;
  errorMsg?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
};

const Input: React.FC<InputProps> = ({ id, name, label, placeholder, type = 'text', className, required = false, value = '', errorMsg, onChange, disabled = false }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div>
      <label htmlFor={id} className="block text-sm/6 font-medium text-gray-900 font-serif">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      <div className="mt-1">
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className={`font-serif block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-400 -outline-offset-1 ${errorMsg ? 'outline-red-500 focus:outline-red-500' : 'outline-gray-300 focus:outline-indigo-600'} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 ${className}`}
          disabled={disabled}
        />
        {errorMsg && <p className="mt-1 text-sm text-red-500 font-serif">{errorMsg}</p>}
      </div>
    </div>
  );
};

export default Input;