import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { getStorage, setStorage, addBooking } from '../src/localStorage';
import { type IFormInput } from '../src/BookingForm';

const BOOKING_STORAGE = "bookingsByDate";
const BOOKING_DELIMITER = '/';

const booking1: IFormInput = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  phoneNumber: '123456789',
  date: '2025-11-23',
  hour: '19:30',
  people: 2,
  occasion: 'Anniversary',
  terms: true
}
const booking2: IFormInput = {
  firstName: 'Jane',
  lastName: 'Gonzalez',
  email: 'janeGonzalez@mixspace.world',
  phoneNumber: '98765443321',
  date: '2025-12-24',
  hour: '18:30',
  people: 4,
  occasion: 'Birthday',
  terms: true
}
const booking3: IFormInput = {
  firstName: 'Alejandro',
  lastName: 'Castillo',
  email: 'acastillo@padresescolapios.es',
  phoneNumber: '1122334455',
  date: '2025-12-23',
  hour: '19:30',
  people: 6,
  occasion: 'Birthday',
  terms: true
}

// Mock localStorage
const createLocalStorageMock = () => {
  let store: Record<string, string> = {};
  return {
    getItem: vi.fn((key: string) => store[key] || null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value;
    }),
    clear: vi.fn(() => {
      store = {};
    }),
    removeItem: vi.fn((key: string) => {
      delete store[key];
    })
  };
};

// Stub the global localStorage
vi.stubGlobal('localStorage', createLocalStorageMock());

describe('Testing localStorage functions', () => {

  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('Test for getStorage function', () => {
    it('should not fail and return an empty object if localStorage is empty', () => {
      expect(getStorage()).toEqual({});
      expect(localStorage.getItem).toHaveBeenCalledWith(BOOKING_STORAGE);
    });

    it('should return the stored information if localStorage has data', () => {
      const testData = { [`${booking1.date}${BOOKING_DELIMITER}${booking1.hour}`]: { booking1 } };
      localStorage.setItem(BOOKING_STORAGE, JSON.stringify(testData));
      
      const result = getStorage();
      
      expect(result).toEqual(testData);
      expect(localStorage.getItem).toHaveBeenCalledWith(BOOKING_STORAGE);
    });
  });

  describe('setStorage', () => {
    it('should correctly stringify and set item in localStorage', () => {
      const testData = [booking1, booking2, booking3] as IFormInput[];
      setStorage(testData);
      expect(localStorage.setItem).toHaveBeenCalledWith(BOOKING_STORAGE, JSON.stringify(testData));
    });
  });

  describe('addBooking', () => {
    
    // Helper to get tomorrow's date in YYYY-MM-DD format
    const getTomorrowDate = () => {
      return '2025-12-23';
    };

    it('should add a new booking', async () => {
      vi.useFakeTimers();
      const tomorrow = getTomorrowDate();

      let tomorrowBooking = booking1;
      tomorrowBooking.date = tomorrow;
      tomorrowBooking.hour = '19:30';

      const addBookingPromise = addBooking(tomorrowBooking);
      vi.runAllTimers();
      await addBookingPromise;

      const storedBookings = getStorage();
      expect(storedBookings).toHaveProperty(`${tomorrow}${BOOKING_DELIMITER}${tomorrowBooking.hour}`);
      expect(storedBookings[`${tomorrow}${BOOKING_DELIMITER}${tomorrowBooking.hour}`]).toEqual(tomorrowBooking);
    });

    it('should add a second booking for tomorrow at 20:00 and localStorage should contain last', async () => {
        vi.useFakeTimers();
        const tomorrow = getTomorrowDate();
        let firstBooking: IFormInput = booking1;
        let secondBooking: IFormInput = booking3;

        firstBooking.date = tomorrow;
        firstBooking.hour = '20:00';
        secondBooking.date = tomorrow;
        secondBooking.hour = '20:00';

        // Add first booking
        let addBookingPromise = addBooking(firstBooking);
        vi.runAllTimers();
        await addBookingPromise;
        
        // Add second booking
        addBookingPromise = addBooking(secondBooking);
        vi.runAllTimers();
        await addBookingPromise;

        const storedBookings = getStorage();
        expect(storedBookings).toHaveProperty(`${tomorrow}${BOOKING_DELIMITER}${firstBooking.hour}`);
        expect(storedBookings[`${tomorrow}${BOOKING_DELIMITER}${firstBooking.hour}`]).toEqual(secondBooking);
    });

  });
});
