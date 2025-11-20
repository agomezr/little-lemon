import { useRef, type ChangeEvent, type Dispatch, type FormEvent } from 'react';
import './form.css'

import { type availableTimes, type dateAction } from './BookingPage';

type ReservationFormProps = {
  timesOptions?: availableTimes[];
  seekTimesAvailable: Dispatch<dateAction>;
  selectedTime: availableTimes | "";
  setSelectedTime: (value:availableTimes | "") => void;

}

function ReservationForm(
  { timesOptions=[], seekTimesAvailable, selectedTime, setSelectedTime}
  :ReservationFormProps
) {

  const dateInput = useRef<HTMLInputElement>(null);

  function handleSubmit(e:FormEvent<HTMLFormElement>){
    e.preventDefault();
    const form = e.currentTarget;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  }

  function handleDateChange(){
     if (dateInput.current) {
        seekTimesAvailable({ type: 'seek', payload: dateInput.current.value });
        setSelectedTime(""); 
     }
  }
  
  return (
    <div className="container mx-auto">
    <form onSubmit={handleSubmit}>

      <div className='flex flex-row justify-between gap-2'>
        <div className='w-1/2'>
          <div className='mb-4'>
            <label htmlFor="date">Choose date</label>
            <input type="date" id="date" name="date" ref={dateInput} required
              onChange={handleDateChange}
            />
          </div>
        </div>
        <div className='w-1/2'>
          <div className='mb-4'>
            <TimeSelect options={timesOptions} selectedTime={selectedTime} setSelectedTime={setSelectedTime}/>
          </div>
        </div>
      </div>

      <input type="submit" value="Confirm reserve!" className='button !w-auto mx-auto' />

    </form>
    </div>
  );
}

type TimeSelectProps = {
  options: availableTimes[] | [];
  selectedTime: availableTimes | '';
  setSelectedTime: (value:availableTimes | "") => void;
}

function TimeSelect({options=[], selectedTime, setSelectedTime}:TimeSelectProps) {
  
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedTime(event.target.value as availableTimes);
  };

  return (
    <div>
      <label htmlFor="time-select">Available Times <sup>({options.length})</sup></label>
      <select id="time-select" value={selectedTime} name="time-select" onChange={handleChange} >
        <option value="" disabled> </option>
        {options && options.map((hour:availableTimes) => (
          <option key={hour} value={hour}>
            {hour}
          </option>
        ))}
      </select>
      <p>Selected Occasion: **{selectedTime || 'No selected time'}**</p>
    </div>
  );
}

export default ReservationForm