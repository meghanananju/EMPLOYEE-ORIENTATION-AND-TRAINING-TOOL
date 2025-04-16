
 /*
*****************************************************************************
* License Information :Alten Global Technology Solutions Pvt. Ltd.                  *

*                      #72 & 73, Krishna Reddy Colony, Domlur layout,            *

*                      Domlur,Bangalore - 560071, INDIA                     *

*                      Licensed software and All rights reserved.           *

*****************************************************************************

* File             : switch.tsx
*
* Description      : Switch Component
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
// Toggle Component 
interface SwitchProps {
  id?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean; // Disable prop
}

const Switch: React.FC<SwitchProps> = ({ id = 'AcceptConditions', checked, onChange, disabled = false }) => {
  const handleChange = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  return (
    <label
      htmlFor={id}
      className={`group relative block h-5 w-10 rounded-full transition-colors [-webkit-tap-highlight-color:_transparent] has-checked:bg-blue-500 ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-300 cursor-pointer'}`}
    >
      <input
        type="checkbox"
        id={id}
        className="peer sr-only"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />

      <span className="absolute inset-y-0 start-0 m-0.5 grid size-4 place-content-center rounded-full bg-white text-gray-700 transition-[inset-inline-start] peer-checked:start-5 peer-checked:*:first:hidden *:last:hidden peer-checked:*:last:block">
        {/* Cross Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-2.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>

        {/* Check Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-2.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
      </span>
    </label>
  );
};

export default Switch;