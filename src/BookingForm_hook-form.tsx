import { useState, type ChangeEvent } from 'react';
import './form.css'
import { useForm } from "react-hook-form";


type availableTimes =  "17:00" | "18:00" | "19:00" | "20:00" | "21:00" | "22:00";
type Occasion = "Birthday" | "Anniversary";

const occasions:Occasion[] = ["Birthday", "Anniversary"];
const bookingTimes:availableTimes[] = ["17:00" , "18:00" , "19:00" , "20:00" , "21:00" , "22:00"];


interface IFormInput {
  'firstName': string;
  'lastName': string;
  'email': string;
  'phoneNumber': string; 
  'date': Date; 
  'hour': availableTimes;
  'people': number;
  'occasion': Occasion;
  'terms': boolean;
}

function ReservationForm() {

  const [selectedOccasion, setSelectedOccasion] = useState<Occasion | ''>('');
  const [selectedTime, setSelectedTime] = useState<availableTimes | ''>('');
  
  const { register, handleSubmit, formState: { errors }, reset, watch} = useForm<IFormInput>();

  const termsAccepted = watch("terms");
 
  function onSubmit(data:IFormInput){
    console.log(data); 
    reset();
  }
  // const onSubmit: SubmitHandler<IFormInput> = data => {console.log(data); reset()}
  
  return (
    <div className="container mx-auto">
    <form onSubmit={handleSubmit(onSubmit)}>

<div className='flex flex-col md:flex-row justify-between gap-6' >
  <div className='md:w-1/2'>

    <div className='flex flex-col md:flex-row justify-between gap-2'>
      <div className='md:w-1/2'>
        <div className='mb-4'>
          <label htmlFor="firstName">First Name</label>
          <input type="text" placeholder="First name" id="firstName"
            {...register("firstName", { required: true, maxLength: 100 })} 
            aria-invalid={errors.firstName ? "true" : "false"}
          />
          {errors.firstName?.type === "required" && (
            <p role="alert" className='text-red-600'>First name is required</p>
          )}
          {errors.firstName?.type === "maxLength" && (
            <p role="alert" className='text-red-600'>First name must be up to 100 characters</p>
          )}
        </div>
      </div>
      <div className='md:w-1/2'>
        <div className='mb-4'>
          <label htmlFor="lastName">Last Name</label>
          <input  type="text"  placeholder="Last name" id="lastName"
            {...register("lastName", { required: true, maxLength: 100 })} 
          />
          {errors['lastName'] && <p role="alert" className='text-red-600'>Last name is required and less than 100 characters.</p>}
        </div>
      </div>
    </div>

    <div className='mb-4'>
      <label htmlFor="email">Email</label>
      <input  type="text" placeholder="Email" id="email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })} 
      />
      {errors.email && <p role="alert" className='text-red-600'>Email is required and must be a valid email address.</p>}
    </div>

    <div className='mb-4'>
      <label htmlFor="phoneNumber">Phone number</label>
      <input type="tel"  placeholder="Mobile number"  id="phoneNumber"
        {...register("phoneNumber", { required: true, minLength: 6, maxLength: 12 })} 
      />
      {errors['phoneNumber'] && <p role="alert" className='text-red-600'>Phone number is required and must be between 6 and 12 characters.</p>}
    </div>

  </div>
  <div className='md:w-1/2'>

  <div className='flex flex-row justify-between gap-2'>
    <div className='w-1/2'>
      <div className='mb-4'>
        <label htmlFor="date">Choose date</label>
        <input  type="date"  placeholder="Date"  id="date"
          {...register("date", { required: true})} 
        />
        {errors['date'] && <p role="alert" className="text-red-600">Date is required.</p>}
      </div>
    </div>
    <div className='w-1/2'>
      <div className='mb-4'>
        {/* <label htmlFor="hour">Choose time</label>
        <input type="time" id="hour" step="3600" min="15:00" max="22:00"
          {...register("hour", { required: true})} 
        />
        {errors['hour'] && <p>Hour is required.</p>} */}
        <TimeSelect selectedTime={selectedTime} setSelectedTime={setSelectedTime}/>
      </div>
    </div>
  </div>

  <div className='w-1/2'>
    <div className='mb-4'>
      <label htmlFor="people">Number of guests</label>
      <input type="number" placeholder="People" id="people"
        {...register("people", { required: true, min:1, max:10})} 
      />
      {errors['people'] && <p role="alert" className="text-red-600">People is required.</p>}
    </div>
  </div>

  <div className='mb-4'>
    <OccasionSelect selectedOccasion={selectedOccasion} setSelectedOccasion={setSelectedOccasion}/>
  </div>

  </div>
</div>


      <div className='flex flex-row items-center flex-nowrap mb-4'>
        <input type="checkbox" id="terms"
          {...register("terms", { required: true})} 
        /> 
        <label htmlFor="terms" >By checking this box, you agree to our [Terms and Conditions].</label>
      </div>


      <input disabled={!termsAccepted} type="submit" className='button max-w-[150px] mx-auto' />

    </form>
    </div>
  );
}

type OccasionSelectProps = {
  selectedOccasion: Occasion | '';
  setSelectedOccasion: (value:Occasion) => void;
}

function OccasionSelect({selectedOccasion, setSelectedOccasion}:OccasionSelectProps) {
  
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOccasion(event.target.value as Occasion);
  };

  return (
    <div>
      <label htmlFor="occasion-select">Occasion</label>
      <select id="occasion-select" value={selectedOccasion} onChange={handleChange} >
        <option value="" disabled> </option>
        {occasions.map((occasion) => (
          <option key={occasion} value={occasion}>
            {occasion}
          </option>
        ))}
      </select>
      <p>Selected Occasion: **{selectedOccasion || 'None'}**</p>
    </div>
  );
}
type TimeSelectProps = {
  selectedTime: availableTimes | '';
  setSelectedTime: (value:availableTimes) => void;
}

function TimeSelect({selectedTime, setSelectedTime}:TimeSelectProps) {
  
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedTime(event.target.value as availableTimes);
  };

  return (
    <div>
      <label htmlFor="time-select">Available Times</label>
      <select id="time-select" value={selectedTime} onChange={handleChange} >
        <option value="" disabled> </option>
        {bookingTimes.map((hour) => (
          <option key={hour} value={hour}>
            {hour}
          </option>
        ))}
      </select>
      <p>Selected Occasion: **{selectedTime || 'None'}**</p>
    </div>
  );
}

export default ReservationForm