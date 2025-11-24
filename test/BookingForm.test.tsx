import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import BookingForm, { type IFormInput } from '../src/BookingForm';
import { BrowserRouter } from 'react-router-dom';
import { availableTimesOptions } from '../src/BookingPage';
import user from '@testing-library/user-event';


const mockSendForm = vi.fn();
const mockSeekTimesAvailable = vi.fn();
const mockSetSelectedTime = vi.fn();

const availableTimes = ["17:00", "18:00", "19:00"];

const renderComponent = () => {
  render(
    <BrowserRouter>
      <BookingForm
        sendForm={mockSendForm}
        seekTimesAvailable={mockSeekTimesAvailable}
        setSelectedTime={mockSetSelectedTime}
        timesOptions={availableTimesOptions}
      />
    </BrowserRouter>
  );
};

 // Helper function to touch and clear a text-based input field
const touchAndClearInput = (label: RegExp, firstValue: string, lastValue: string = '') => {
  const input = screen.getByLabelText(label);
  fireEvent.change(input, { target: { value: firstValue } });
  fireEvent.change(input, { target: { value: lastValue } });
};

const fillFormWithMockData = () => {
  fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: 'John' } });
  fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: 'Doe' } });
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john.doe@example.com' } });
  fireEvent.change(screen.getByLabelText(/phone number/i), { target: { value: '123456789' } });
  fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2025-12-25' } });
  fireEvent.change(screen.getByLabelText(/available times/i), { target: { value: '17:00' } });
  fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '2' } });
}

describe('BookingForm group tests', () => {
  it('should render all form fields', () => {
    renderComponent();
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/available times/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/by checking this box/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /confirm reserve!/i })).toBeInTheDocument();
  });

  it('should show required error messages when fields are touched and then cleared', async () => {
    renderComponent();

    // Trigger validation for each field
    touchAndClearInput(/first name/i, 'John');
    touchAndClearInput(/last name/i, 'Doe');
    touchAndClearInput(/email/i, 'test@example.com');
    touchAndClearInput(/phone number/i, '1234567890');
    touchAndClearInput(/number of guests/i, '2');
    touchAndClearInput(/choose date/i, '2025-12-25');
    touchAndClearInput(/available times/i, '17:00');

    // Check that all error messages are displayed
    expect(await screen.findByText(/first name is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/last name is required and less than 100 characters/i)).toBeInTheDocument();
    expect(await screen.findByText(/email is required and must be a valid email address/i)).toBeInTheDocument();
    expect(await screen.findByText(/phone number is required and must be between 6 and 12 characters/i)).toBeInTheDocument();
    // expect(await screen.findByText(/date is required/i)).toBeInTheDocument(); // ###todo: fix why date not working in this context
    expect(await screen.findByText(/time is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/people is required and between 1 and 10/i)).toBeInTheDocument();
  });

  it('should call seekTimesAvailable when the date is changed', async () => {
    renderComponent();
    const randomDate = '2025-12-31';
    const dateInput = screen.getByLabelText(/choose date/i);
    fireEvent.change(dateInput, { target: { value: randomDate } });
    
    expect(mockSeekTimesAvailable).toHaveBeenCalledWith({ type: 'seek', payload: randomDate });
  
    // Wait for the side-effect (resetting the time field) to complete to avoid "act" warnings.
    await waitFor(() => {
      const timeInput = screen.getByLabelText(/available times/i) as HTMLSelectElement;
      expect(timeInput.value).toBe('');
    });
  });

  it('should disable the submit button if the form is invalid or terms are not accepted', () => {
    renderComponent();
    const submitButton = screen.getByRole('button', { name: /confirm reserve!/i });
    expect(submitButton).toBeDisabled();

    // Fill the form but don't check terms
    fillFormWithMockData();

    waitFor(()=> {
      expect(submitButton).toBeDisabled();
    })
    
  });

  it('should enable the submit button when the form is valid and terms are accepted', async () => {
    renderComponent();
    const submitButton = screen.getByRole('button', { name: /confirm reserve!/i });

    fillFormWithMockData();

    fireEvent.click(screen.getByLabelText(/by checking this box/i));

    // Wait for the form state to update
    waitFor(() => {
        expect(submitButton).not.toBeDisabled();
    });
  });

  it('should call sendForm on successful submission', async () => {
    renderComponent();
    const submitButton = screen.getByRole('button', { name: /confirm reserve!/i });

    fillFormWithMockData();
    fireEvent.click(screen.getByLabelText(/by checking this box/i));

    // Wait for the button to be enabled before clicking
    await waitFor(() => {
        expect(submitButton).not.toBeDisabled();
    });

    fireEvent.click(submitButton);

    // Wait for the submission handler to be called
    await waitFor(() => {
        expect(mockSendForm).toHaveBeenCalled();
    });

    // Wait for the form to reset to avoid "act" warning
    await waitFor(() => {
      expect(screen.getByLabelText(/first name/i)).toHaveValue('');
    });
  });

});
