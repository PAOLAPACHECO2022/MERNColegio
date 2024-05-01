import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import LoginPage from '../LoginPage';

const mockStore = configureStore([]);

describe('<LoginPage />', () => {
  let store;

  beforeEach(() => {
    // Crear un mock store con el estado inicial
    store = mockStore({
      user: null,
      token: null,
    });
  });

  test('renders the LoginPage component', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText('Welcome to the School')).toBeInTheDocument();
  });

  test('simula la entrada y el envío del formulario para admin/teacher', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      </Provider>
    );

    const emailInput = screen.getByPlaceholderText('name@example.com');
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByText('LOGIN');

    // Simular la entrada de datos en el formulario
    fireEvent.change(emailInput, { target: { value: 'pao@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: 'pao2024' } });

    // Simular el envío del formulario
    fireEvent.click(loginButton);

    // Verificar si el componente tiene el comportamiento esperado
  });

  test('prueba el cambio entre tipos de usuario', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      </Provider>
    );

    const changeLoginText = screen.getByText("I'm not an admin or teacher.");
    fireEvent.click(changeLoginText);

    // Verificar que el cambio a "loginStudent" ocurrió
    expect(screen.getByText('DNI')).toBeInTheDocument();
  });
});
