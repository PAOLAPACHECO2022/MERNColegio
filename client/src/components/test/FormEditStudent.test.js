import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';

import FormEditStudent from '../FormEditStudent';
import rootReducer from 'state'; // Ajusta según tu estructura

// Mock del store de Redux
const store = createStore(rootReducer, {
  token: 'mockToken', // Ajusta según tus necesidades
});

// Datos de prueba para el estudiante
const mockStudentData = {
  firstName: 'John',
  lastName: 'Doe',
  dni: '123-45-678',
  phone: '123-456-7890',
  fechaNacimiento: '2000-01-01',
  nacionality: 'USA',
  _id: 'student123',
};

// Test para renderizar el componente
test('renders the FormEditStudent component', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <FormEditStudent
          studentData={mockStudentData}
          setStudentData={() => {}}
          gradeId="grade123"
        />
      </MemoryRouter>
    </Provider>
  );

  expect(screen.getByText(/Edit Student/i)).toBeInTheDocument(); // Verifica que se renderiza el título
  expect(screen.getByPlaceholderText('John')).toBeInTheDocument(); // Verifica el campo de nombre
  expect(screen.getByPlaceholderText('Doe')).toBeInTheDocument(); // Verifica el campo de apellido
  expect(screen.getByPlaceholderText('123-45-678')).toBeInTheDocument(); // Verifica el campo de DNI
});

// Test para simular la entrada y el envío del formulario
test('submits the form with updated data', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <FormEditStudent
          studentData={mockStudentData}
          setStudentData={() => {}}
          gradeId="grade123"
        />
      </MemoryRouter>
    </Provider>
  );

  const firstNameInput = screen.getByPlaceholderText('John'); // Asegúrate de usar el placeholder correcto
  const lastNameInput = screen.getByPlaceholderText('Doe');
  const dniInput = screen.getByPlaceholderText('123-45-678');
  const phoneInput = screen.getByPlaceholderText('123-456-7890'); 
  const submitButton = screen.getByText(/Submit/i);

  // Simula cambios en los campos
  fireEvent.change(firstNameInput, { target: { value: 'Jane' } });
  fireEvent.change(lastNameInput, { target: { value: 'Smith' } });
  fireEvent.change(dniInput, { target: { value: '87654321' } });
  fireEvent.change(phoneInput, { target: { value: '987-654-3210' } });

  // Simula el envío del formulario
  fireEvent.click(submitButton);
});
