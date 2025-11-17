import { type RouteObject } from 'react-router-dom'

import BookingPage from './BookingPage.tsx'
import HomePage from './Homepage.tsx'
import ErrorPage from './ErrorPage.tsx'

export const routes: RouteObject[] = [
  {
    path: "/", 
    element: (<HomePage/> ), 
    errorElement: <ErrorPage />,
    
  }, 
  {
    path: "reservations/",
    element: ( <BookingPage/> ), 
    errorElement: <ErrorPage />
  }, 
  {  
    path: "*",
    element:(<ErrorPage/>)
  }
]
