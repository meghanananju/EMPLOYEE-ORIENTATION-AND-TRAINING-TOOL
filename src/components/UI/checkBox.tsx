 /*
*****************************************************************************
* License Information :Alten Global Technology Solutions Pvt. Ltd.                  *

*                      #72 & 73, Krishna Reddy Colony, Domlur layout,            *

*                      Domlur,Bangalore - 560071, INDIA                     *

*                      Licensed software and All rights reserved.           *

*****************************************************************************

* File             : checkbox.tsx
*
* Description      : CheckBox Component
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

// Checkbox Component
type CheckboxProps = {
  id: string;
  label: string;
  checked?: boolean;
  onChange: (checked: boolean) => void;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
};

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
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
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => !disabled && onChange(e.target.checked)}
        disabled={disabled}
        className={`${sizeClasses[size]} rounded border-gray-300 shadow-sm ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
      />
      <span className="font-medium text-gray-700">{label}</span>
    </label>
  );
};

// Checkbox Group Component
type CheckboxGroupProps = {
  options: { id: string; label: string }[];
  selectedOptions: string[];
  onChange: (selected: string[]) => void;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
};

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  options,
  selectedOptions,
  onChange,
  size = 'md',
  disabled = false,
}) => {
  const handleChange = (id: string, checked: boolean) => {
    const newSelected = checked
      ? [...selectedOptions, id]
      : selectedOptions.filter((option) => option !== id);
    onChange(newSelected);
  };

  return (
    <fieldset disabled={disabled} className={disabled ? 'opacity-50 cursor-not-allowed' : ''}>
      <legend className="sr-only">Checkboxes</legend>
      <div className="flex flex-col items-start gap-3">
        {options.map((option) => (
          <Checkbox
            key={option.id}
            id={option.id}
            label={option.label}
            checked={selectedOptions.includes(option.id)}
            onChange={(checked) => handleChange(option.id, checked)}
            size={size}
            disabled={disabled}
          />
        ))}
      </div>
    </fieldset>
  );
};
