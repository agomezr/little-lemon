import './form.css'
import { useForm, type SubmitHandler } from "react-hook-form";


type BookingTime =  "13:00" | "13:30" | "14:00" | "14:30" | "15:00" | "19:30" | "20:00" | "20:30" | "21:00" | "21:30" | "22:00";

interface IFormInput {
  'firstName': string;
  'lastName': string;
  'email': string;
  'phoneNumber': string; 
  'date': Date; 
  'hour': BookingTime;
  'people': number;
  'terms': boolean;
}


function ReservationForm() {
  const { register, handleSubmit, formState: { errors }, reset, watch} = useForm<IFormInput>();

  const termsAccepted = watch("terms");

  const onSubmit: SubmitHandler<IFormInput> = data => {console.log(data); reset()}
  
  return (
    <div className="container mx-auto">
    <form onSubmit={handleSubmit(onSubmit)}>

<div className='flex flex-col md:flex-row justify-between gap-6' >
  <div className='md:w-1/2'>

    <div className='flex flex-col md:flex-row justify-between gap-2'>
    <div className='md:w-1/2'>
      <label htmlFor="firstName">First Name</label>
      <input type="text" placeholder="First name" id="firstName"
        {...register("firstName", { required: true, maxLength: 100 })} 
        aria-invalid={errors.firstName ? "true" : "false"}
      />
      {errors.firstName?.type === "required" && (
        <p role="alert">First name is required</p>
      )}
      {errors.firstName?.type === "maxLength" && (
        <p role="alert">First name must be up to 100 characters</p>
      )}
    </div>
    <div className='md:w-1/2'>
      <label htmlFor="lastName">Last Name</label>
      <input  type="text"  placeholder="Last name" id="lastName"
        {...register("lastName", { required: true, maxLength: 100 })} 
      />
      {errors['lastName'] && <p>Last name is required and less than 100 characters.</p>}

    </div>
    </div>

      <label htmlFor="email">Email</label>
      <input  type="text" placeholder="Email" id="email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })} 
      />
      {errors.email && <p>Email is required and must be a valid email address.</p>}


      <label htmlFor="phoneNumber">Phone number</label>
      <input type="tel"  placeholder="Mobile number"  id="phoneNumber"
        {...register("phoneNumber", { required: true, minLength: 6, maxLength: 12 })} 
      />
      {errors['phoneNumber'] && <p>Phone number is required and must be between 6 and 12 characters.</p>}


  </div>
  <div className='md:w-1/2'>

  <div className='flex flex-row justify-between gap-2'>
    <div className='w-1/2'>
      <label htmlFor="date">Date</label>
      <input  type="date"  placeholder="Date"  id="date"
        {...register("date", { required: true})} 
      />
      {errors['date'] && <p>Date is required.</p>}
    </div>
    <div className='w-1/2'>
      <label htmlFor="hour">Hour</label>
      <input type="time" id="hour" step="1800" min="13:00" max="22:00"
        {...register("hour", { required: true})} 
      />
      {errors['hour'] && <p>Hour is required.</p>}
      
    </div>
  </div>

  <div className='w-1/2'>
    <label htmlFor="people">People</label>
    <input type="number" placeholder="People" id="people"
      {...register("people", { required: true})} 
    />
    {errors['people'] && <p>People is required.</p>}
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


export default ReservationForm