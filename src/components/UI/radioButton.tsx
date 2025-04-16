 /*
*****************************************************************************
* License Information :Alten Global Technology Solutions Pvt. Ltd.                  *

*                      #72 & 73, Krishna Reddy Colony, Domlur layout,            *

*                      Domlur,Bangalore - 560071, INDIA                     *

*                      Licensed software and All rights reserved.           *

*****************************************************************************

* File             : radioButton.tsx
*
* Description      : Radio Button Component
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

// Single Radio Button Component
type RadioButtonProps = {
  id: string;
  label: string;
  name: string;
  checked?: boolean;
  onChange: (id: string) => void;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
};

export const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  label,
  name,
  checked = false,
  onChange,
  size = 'md',
  disabled = false,
}) => {
  const sizeClasses: Record<string, string> = {
    sm: 'size-4',
    md: 'size-5',
    lg: 'size-6',
    xl: 'size-7',
  };

  return (
    <label htmlFor={id} className={`inline-flex items-center gap-3 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
      <input
        type="radio"
        id={id}
        name={name}
        checked={checked}
        onChange={() => !disabled && onChange(id)}
        disabled={disabled}
        className={`${sizeClasses[size]} rounded-full border-gray-300 ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
      />
      <span className="font-medium text-gray-700">{label}</span>
    </label>
  );
};

// Radio Button Group Component
type RadioButtonGroupProps = {
  options: { id: string; label: string }[];
  selectedOption: string;
  onChange: (id: string) => void;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  name: string;
  disabled?: boolean;
};

export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  options,
  selectedOption,
  onChange,
  size = 'md',
  name,
  disabled = false,
}) => {
  return (
    <fieldset disabled={disabled} className={disabled ? 'opacity-50 cursor-not-allowed' : ''}>
      <legend className="sr-only">Radio Buttons</legend>
      <div className="flex flex-col items-start gap-3">
        {options.map((option) => (
          <RadioButton
            key={option.id}
            id={option.id}
            label={option.label}
            name={name}
            checked={selectedOption === option.id}
            onChange={onChange}
            size={size}
            disabled={disabled}
          />
        ))}
      </div>
    </fieldset>
  );
};
