import { type IFormInput} from "./BookingForm";

const BOOKING_STORAGE = "bookingsByDate";
const BOOKING_DELIMITER = '/';

export function getStorage() {
  const bookings = localStorage.getItem(BOOKING_STORAGE);
  if (!bookings) {
    return {};
  }
  return JSON.parse(bookings);
}

export function setStorage(bookings:IFormInput[]) {
  localStorage.setItem(BOOKING_STORAGE, JSON.stringify(bookings));
}

export function addBooking(bookingData:IFormInput) {
  const activeBookings = getStorage();

  // Create new one or update the date + hour register
  activeBookings[bookingData.date + BOOKING_DELIMITER + bookingData.hour] = bookingData;

  localStorage.setItem(BOOKING_STORAGE, JSON.stringify(activeBookings));

  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve(true);
    }, 1500);
  })
}
