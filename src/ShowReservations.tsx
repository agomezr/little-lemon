import {getStorage} from "./localStorage"
import type { IFormInput } from "./BookingForm";

interface IBooking extends IFormInput {
  idKey: string;
}

const convertObjectToArray = (data: Record<string, Omit<IBooking, 'idKey'>>): IBooking[] => {
  return Object.entries(data).map(([key, value]) => ({
    ...value, // Copy all properties (date, people, etc.)
    idKey: key, // Agrega la clave única como idKey
  })) as IBooking[];
};

function ShowReservations() {
  const bookings = getStorage();
  console.log(bookings);
  
  if(!bookings) {
    <p>No bookings found</p>
  }
  const bookingsArray = convertObjectToArray(bookings);

  console.log(bookingsArray);

  return (
    <section className="my-3">
      <h2>Last bookings</h2>
      <div className="reservation-wrapper flex gap-1">
        {
          bookingsArray.map((booking: IBooking) => (
            <div key={booking.idKey} className="reservation-card p-3 rounded border border-custom">
                <h3>{booking.firstName} {booking.lastName}</h3>
                <p>
                    🗓️ {booking.date}
                </p>
                <p>
                  🕑 {booking.hour}
                </p>
                <p>
                  👨‍👩‍👧‍👦 {booking.people}
                </p>
                <div className="details">
                    <small>📧 {booking.email}</small><br/>
                    <small>📞 {booking.phoneNumber}</small>
                </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default ShowReservations