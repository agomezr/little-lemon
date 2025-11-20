import { describe, test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BookingPage from '../src/BookingPage';

// 1. Mocks para componentes externos que no afectan la lógica de esta prueba
// Esto evita que el test falle si Header o Footer usan contextos o librerías complejas (como react-router)
vi.mock('../src/Header', () => ({
  default: () => <div data-testid="header-mock">Header</div>
}));

vi.mock('../src/Footer', () => ({
  default: () => <div data-testid="footer-mock">Footer</div>
}));

describe('Booking Page & Form Integration', () => {

  // Función auxiliar para obtener la fecha de hoy en formato YYYY-MM-DD
  const getTodayDateString = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Meses 0-11
    const year = now.getFullYear();
    return `${year}-${month}-${day}`;
  };

  const getTomorrowDateString = () => {
    const now = new Date();
    now.setDate(now.getDate() + 1); // Sumar un día
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    return `${year}-${month}-${day}`;
  };

  test('Debe renderizar los componentes y encontrar el texto "*All fields are required"', () => {
    render(
      <MemoryRouter>
        <BookingPage />
      </MemoryRouter>
    );

    // Verificamos que el texto estático existe en el documento
    // Usamos una expresión regular (/.../i) para ignorar mayúsculas/minúsculas
    const textElement = screen.getByText(/\*All fields are required/i);
    expect(textElement).toBeInTheDocument();
    
    // Opcional: Verificar que el Header simulado también se cargó
    expect(screen.getByTestId('header-mock')).toBeInTheDocument();
  });

  test('Debe renderizar y mostrar el input de tipo submit', () => {
    render(
      <MemoryRouter>
        <BookingPage />
      </MemoryRouter>
    );

    // Buscamos el botón por su rol accesible y su nombre (el texto visible o value)
    const submitButton = screen.getByRole('button', { name: /Confirm reserve!/i });

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute('type', 'submit');
  });

  test('Al cambiar la fecha a HOY, debe mostrar solo 3 opciones de hora. Al cambiar a otro día, debe mostrar todas.', () => {
    render(
      <MemoryRouter>
        <BookingPage />
      </MemoryRouter>
    );

    // 1. Localizamos los elementos del formulario
    // 'Choose date' debe coincidir con el texto del <label> asociado al input date
    const dateInput = screen.getByLabelText(/Choose date/i);
    
    // --- ESCENARIO A: Seleccionar fecha de "Mañana" (Todas las opciones) ---
    const tomorrow = getTomorrowDateString();
    
    // Simulamos que el usuario cambia la fecha
    fireEvent.change(dateInput, { target: { value: tomorrow } });

    // Verificamos que estén todas las opciones (6 valores + 1 placeholder vacío)
    const optionsAll = screen.getAllByRole('option');
    expect(optionsAll.length).toBe(7); 
    
    // Verificamos extremos para asegurar que no se ha filtrado nada
    expect(screen.getByText('17:00')).toBeInTheDocument(); 
    expect(screen.getByText('22:00')).toBeInTheDocument();


    // --- ESCENARIO B: Seleccionar fecha de "HOY" (Opciones restringidas) ---
    const today = getTodayDateString();

    fireEvent.change(dateInput, { target: { value: today } });

    // Según tu lógica en el reducer: si es hoy, filtra time >= "20:00"
    // Deberían quedar: "20:00", "21:00", "22:00" (3 opciones + 1 placeholder)
    
    // Verificamos que las opciones tempranas (17-19h) YA NO están en el documento
    expect(screen.queryByText('17:00')).not.toBeInTheDocument();
    expect(screen.queryByText('18:00')).not.toBeInTheDocument();
    expect(screen.queryByText('19:00')).not.toBeInTheDocument();

    // Verificamos que las opciones tardías (20-22h) SÍ están
    expect(screen.getByText('20:00')).toBeInTheDocument();
    expect(screen.getByText('21:00')).toBeInTheDocument();
    expect(screen.getByText('22:00')).toBeInTheDocument();

    // Verificamos la cantidad total de opciones renderizadas (3 válidas + 1 placeholder = 4)
    const optionsToday = screen.getAllByRole('option');
    expect(optionsToday.length).toBe(4);
  });

});