import Footer from "./Footer"
import Header from "./Header"
import BookingForm from "./BookingForm"
import { useEffect, useReducer, useState } from "react"
import { getTodayDateString } from "./helper";
import { fetchAPI } from "./helper";
import { useNavigate } from 'react-router-dom';


export type availableTimes =  "17:00" | "18:00" | "19:00" | "20:00" | "21:00" | "22:00";
export type dateAction = { 
  type: string;
  payload: string;
};

export const availableTimesOptions:availableTimes[] = ["17:00" , "18:00" , "19:00" , "20:00" , "21:00" , "22:00"];

/* Make the reducer to simulate a dependant select option. Complex state change simulation
    - The user change de date
    - We need to search for disponibility hours in the expecific date
    - The reducer return the available times
    - The return times array goes as props to the form and deeper to the times component
      ### todo: avoid prop drilling with useContext or global states(Redux, Zustand) 
    - if the date already change, the value of selected time must be reset.
  */
export function updateTimes(_state:availableTimes[], action:dateAction) {
  switch (action.type) {
    default: {
      const today = getTodayDateString();

      if (today > action.payload){
        return []
      }
      
      return fetchAPI(new Date(action.payload)) as availableTimes[];
    }
  }
}

export function initializeTimes(){
  return fetchAPI(new Date()) as availableTimes[];
}


function BookingPage() {

  const [dateAvailableOptions, dispatchDate] = useReducer(updateTimes, initializeTimes());
  const [_state, setSelectedTime] = useState<availableTimes | ''>('');

  const navigate = useNavigate();

  function sendForm(fromData:FormData) {
    const data = Object.fromEntries(fromData);
    console.log(data);
    navigate("/confirmed-booking");
  }

  useEffect(()=>{
    document.title = "Little Lemon - Booking a table";
  },[]);

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
              setSelectedTime={setSelectedTime}
              sendForm={sendForm}
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
