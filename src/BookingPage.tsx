import Footer from "./Footer"
import Header from "./Header"
import BookingForm from "./BookingForm"
import { useReducer, useState } from "react"

export type availableTimes =  "17:00" | "18:00" | "19:00" | "20:00" | "21:00" | "22:00";
export type dateAction = { 
  type: string;
  payload: string;
};

const availableTimesOptions:availableTimes[] = ["17:00" , "18:00" , "19:00" , "20:00" , "21:00" , "22:00"];

/* Make the reducer to simulate a dependant select option. Complex state change simulation
    - The user change de date
    - We need to search for disponibility hours in the expecific date
    - The reducer return the available times
    - The return times array goes as props to the form and deeper to the times component
    - if the date already change, the value of selected time must be reset.
  */
  const updateTimes  = (timesOptions:availableTimes[], action:dateAction) => {
    console.log(timesOptions); //Only for eslint timesOptions defined but not used
    switch (action.type) {
      //  case 'add':
      //      return [...state, { id: state.length, name: action.name } 
      //      ];
      default: {
        const now = new Date();

        const day = String(now.getDate()).padStart(2, '0'); // Add 0 if necessary
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Months 0 to 11 so plus 1
        const year = now.getFullYear();

        const today = `${year}-${month}-${day}`;
        /* Fake response for today. Delete first three options */
        if(today === action.payload)
        {
          return availableTimesOptions.filter(time => time >= "20:00");
        }
        
        return availableTimesOptions;
      }
   }

  }

function BookingPage() {

  function initializeTimes(){
    return availableTimesOptions;
  }

  const [dateAvailableOptions, dispatchDate] = useReducer(updateTimes, initializeTimes());
  const [selectedTime, setSelectedTime] = useState<availableTimes | ''>('');

  return (
    <>
      <header>
        <Header/>
      </header>
      <main>

        <div className="px-3 py-8 min-h-[50vh] bg-custom">
          <div className='container mx-auto'>
            <h1 className="text-center">Reserve a table</h1>
            <p className="text-sm text-center mb-4">*All fields are required</p>
            <BookingForm 
            timesOptions={dateAvailableOptions} seekTimesAvailable={dispatchDate}
            selectedTime={selectedTime} setSelectedTime={setSelectedTime}
            />
          </div>
        </div>
        

      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default BookingPage