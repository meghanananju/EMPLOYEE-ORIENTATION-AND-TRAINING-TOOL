 /*
*****************************************************************************
* License Information :Alten Global Technology Solutions Pvt. Ltd.                  *

*                      #72 & 73, Krishna Reddy Colony, Domlur layout,            *

*                      Domlur,Bangalore - 560071, INDIA                     *

*                      Licensed software and All rights reserved.           *

*****************************************************************************

* File             : Calendar.tsx
*
* Description      : Calnder Component
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
import React, { useRef, useState, useEffect } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons/faCalendar';
import localeData from 'dayjs/plugin/localeData';

dayjs.extend(localeData);

export type ViewMode = 'date' | 'month' | 'year';

interface CalendarPanelProps {
  value: Dayjs;
  onChange: (date: Dayjs) => void;
  minDate?: Dayjs;
  maxDate?: Dayjs;
  disabledDate?: (date: Dayjs) => boolean;
}

const CalendarPanel: React.FC<CalendarPanelProps> = ({
  value,
  onChange,
  minDate,
  maxDate,
  disabledDate,
}) => {
  const [currentDate, setCurrentDate] = useState(value);
  const [view, setView] = useState<ViewMode>('date');

  useEffect(() => {
    setCurrentDate(value);
  }, [value]);

  const isDisabled = (date: Dayjs) => {
    if (minDate && date.isBefore(minDate, 'day')) return true;
    if (maxDate && date.isAfter(maxDate, 'day')) return true;
    if (disabledDate && disabledDate(date)) return true;
    return false;
  };

  const renderHeader = () => {
    const changeAmount = view === 'year' ? 12 : 1;
    const unit: dayjs.ManipulateType = view === 'year' ? 'year' : view === 'month' ? 'year' : 'month';

    return (
      <div className="flex justify-between items-center mb-3">
        <button
          onClick={() => setCurrentDate(currentDate.subtract(changeAmount, unit))}
          className="px-2 py-1 rounded hover:bg-gray-200 transition cursor-pointer"
        >
          ◀
        </button>
        <div className="flex items-center gap-1 text-sm sm:text-base font-semibold">
          {view !== 'year' && (
            <span
              className="cursor-pointer hover:underline"
              onClick={() => setView('year')}
            >
              {currentDate.format('YYYY')}
            </span>
          )}
          {view === 'date' && (
            <span
              className="cursor-pointer hover:underline"
              onClick={() => setView('month')}
            >
              {currentDate.format('MMMM')}
            </span>
          )}
        </div>
        <button
          onClick={() => setCurrentDate(currentDate.add(changeAmount, unit))}
          className="px-2 py-1 rounded hover:bg-gray-200 transition cursor-pointer"
        >
          ▶
        </button>
      </div>
    );
  };

  const renderDateGrid = () => {
    const start = currentDate.startOf('month').startOf('week');
    const end = currentDate.endOf('month').endOf('week');
    const days = [];

    let date = start;

    while (date.isBefore(end, 'day')) {
      const current = date.clone(); // fix
      const isSelected = value.isSame(current, 'day');
      const isCurrentMonth = current.month() === currentDate.month();
      const disabled = isDisabled(current);

      days.push(
        <button
          key={current.toString()}
          onClick={() => !disabled && onChange(current)}
          disabled={disabled}
          className={`text-sm sm:text-sm w-8 h-8 rounded flex items-center justify-center transition-all 
            ${isSelected ? 'bg-blue-500 text-white font-bold cursor-pointer' : ''}
            ${!isSelected && isCurrentMonth ? 'text-gray-800' : 'text-gray-400'}
            ${!disabled ? 'hover:bg-blue-200 cursor-pointer' : 'opacity-40 cursor-not-allowed'}`}
        >
          {current.date()}
        </button>
      );

      date = date.add(1, 'day');
    }

    return (
      <>
        <div className="grid grid-cols-7 text-sm font-bold text-center text-gray-700 mb-1">
          {dayjs.weekdaysShort().map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">{days}</div>
      </>
    );
  };

  const renderMonthGrid = () => {
    const months = dayjs.monthsShort();
    return (
      <div className="grid grid-cols-3 gap-2 text-md">
        {months.map((month, idx) => (
          <button
            key={month}
            onClick={() => {
              setCurrentDate(currentDate.month(idx));
              setView('date');
            }}
            className="w-full py-2 rounded hover:bg-blue-200 transition cursor-pointer"
          >
            {month}
          </button>
        ))}
      </div>
    );
  };

  const renderYearGrid = () => {
    const base = Math.floor(currentDate.year() / 12) * 12;
    return (
      <div className="grid grid-cols-3 gap-2 text-md">
        {Array.from({ length: 12 }, (_, i) => base + i).map((year) => (
          <button
            key={year}
            onClick={() => {
              setCurrentDate(currentDate.year(year));
              setView('month');
            }}
            className="w-full py-2 rounded hover:bg-blue-200 transition cursor-pointer"
          >
            {year}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-lg w-full max-w-sm border border-gray-200">
      {renderHeader()}
      {view === 'date' && renderDateGrid()}
      {view === 'month' && renderMonthGrid()}
      {view === 'year' && renderYearGrid()}
    </div>
  );
};

interface CalendarInputProps {
  value?: Dayjs;
  onChange: (date: Dayjs) => void;
  disableToday?: boolean;
  disablePast?: boolean;
  disabledDates?: Dayjs[];
  minDate?: Dayjs;
  maxDate?: Dayjs;
  label?: string;
  required?: boolean;
  errorMsg?: string;
}

const CalendarInput: React.FC<CalendarInputProps> = ({
  value,
  onChange,
  disableToday = false,
  disablePast = false,
  disabledDates = [],
  minDate,
  maxDate,
  label,
  required,
  errorMsg,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = value || dayjs(); // select today by default

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isDisabled = (date: Dayjs) => {
    if (disableToday && date.isSame(dayjs(), 'day')) return true;
    if (disablePast && date.isBefore(dayjs(), 'day')) return true;
    if (disabledDates.some((d) => d.isSame(date, 'day'))) return true;
    return false;
  };

  return (
    <div className="w-full relative" ref={ref}>
      {label && (
        <label className="block text-sm/6 font-medium text-gray-900 font-serif">
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}

      <div
        onClick={() => setOpen((prev) => !prev)}
        className={`flex items-center justify-between rounded-md px-3 py-2 mt-1 cursor-pointer w-full  outline outline-1
          ${errorMsg ? 'outline-red-500' : 'outline-gray-400'}`}
      >
        <span className="text-sm">{selected.format('DD MMM YYYY')}</span>
        <FontAwesomeIcon icon={faCalendar} className="ml-2 text-gray-500" />
      </div>

      {errorMsg && (
        <p className="text-sm text-red-600 mt-1 font-medium">{errorMsg}</p>
      )}

      {open && (
        <div className="absolute z-50 mt-2 w-full">
          <CalendarPanel
            value={selected}
            onChange={(date) => {
              onChange(date);
              setOpen(false);
            }}
            disabledDate={isDisabled}
            minDate={minDate}
            maxDate={maxDate}
          />
        </div>
      )}
    </div>
  );
};

export default CalendarInput;
