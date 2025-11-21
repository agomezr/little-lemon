
import { type ChangeEvent, type Ref } from 'react';
import type { availableTimes } from './BookingPage';

type TimeSelectProps = {
  options: availableTimes[] | [];
  selectedTime: availableTimes | '';
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void; 
  ref: Ref<HTMLSelectElement> | undefined
}

export function TimeSelect({options = [], selectedTime, onChange, ref}:TimeSelectProps)  {
  
  return (
    <div>
      <label htmlFor="time-select">Available Times <sup>({options.length})</sup></label>
      <select 
        id="time-select" 
        ref={ref}
        value={selectedTime} 
        onChange={onChange}
      >
        <option value=""> Select time </option>
        {options.map((hour) => (
          <option key={hour} value={hour}>
            {hour}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TimeSelect;