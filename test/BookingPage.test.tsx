import { describe, test, expect, vi, it, afterEach } from 'vitest';
import { render, screen, fireEvent, within, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BookingPage, {initializeTimes, updateTimes, availableTimesOptions } from '../src/BookingPage';

// 1. External components to avoid unexpected external collateral failures
vi.mock('../src/Header', () => ({
  default: () => <div data-testid="header-mock">Header</div>
}));

vi.mock('../src/Footer', () => ({
  default: () => <div data-testid="footer-mock">Footer</div>
}));

const getTomorrowDateString = () => {
  const now = new Date();
  now.setDate(now.getDate() + 1);
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  return `${year}-${month}-${day}`;
};

describe('Booking Page & Form Integration', () => {

  const renderBookingPage = () => {
    return render(
      <MemoryRouter>
        <BookingPage />
      </MemoryRouter>
    );
  };

  afterEach(() => {
    cleanup();
  });


  test('Render main component BookingPage with the text "*All fields are required"', () => {
    renderBookingPage();

    const textElement = screen.getByText(/\*All fields are required/i);
    expect(textElement).toBeInTheDocument();
    
    // Optional: Verify Header mock in the document
    expect(screen.getByTestId('header-mock')).toBeInTheDocument();
  });

  it(('By default, times options should be all options for customer info'), ()=>{
    const options = initializeTimes();
    expect(options.length).toBeGreaterThan(1);
  })

  test('Input type submit in the form should have the correct attributes', () => {
    renderBookingPage();

    /* Select by role and text */
    const submitButton = screen.getByRole('button', { name: /Confirm reserve!/i });

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute('type', 'submit');
  });

  test('Simulate change date, available times are 1 placeholder + some other times.', () => {
    renderBookingPage();

    // 'Choose date' label must match to input (htmlFor -> input#id)
    const dateInput = screen.getByLabelText(/Choose date/i);
    
    const tomorrow = getTomorrowDateString();
    
    fireEvent.change(dateInput, { target: { value: tomorrow } });

    // Verify all available options (1 empty placeholder + more options)
    const timeSelect = screen.getByLabelText(/Available Times/i);
    const optionsAll = within(timeSelect).getAllByRole('option');
    expect(optionsAll.length).toBeGreaterThan(1); 

  });

});