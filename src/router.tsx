import { type RouteObject } from 'react-router-dom'

import BookingPage from './BookingPage'
import HomePage from './HomePage.tsx'
import ErrorPage from './ErrorPage.tsx'
import ConfirmedBookingPage from './ConfirmedBookingPage'

export const routes: RouteObject[] = [
  {
    path: "/", 
    element: (<HomePage/> ), 
    errorElement: <ErrorPage />,
    
  }, 
  {
    path: "/reservations",
    element: ( <BookingPage/> ), 
  }, 
  {
    path: "/confirmed-booking",
    element: ( <ConfirmedBookingPage/> ), 
  }, 
  {  
    path: "*",
    element:(<ErrorPage/>)
  }
]
