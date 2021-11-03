import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

afterEach(cleanup);

// arquivo App.test.js pode servir de exemplo
describe('Teste da aplicação, testando o botão e sua funcionalidade', () => {
  const TASK = 'Beber Água';

  beforeEach(() => {
    render(<App />);
  });

  test('Verificando se o botão está na tela e se ele contém o texto "Adicionar"', () => {
    const addButton = screen.getByRole('button', { name: /adicionar/i });
    expect(addButton).toBeInTheDocument();
  });

  test(`Ao clicar no botão, é necessário adicionar o que o usuário digitou à lista`, () => {
    const taskInput = screen.getByLabelText(/tarefa:/i);
    const addButton = screen.getByRole('button', { name: /adicionar/i });
    userEvent.type(taskInput, TASK);
    userEvent.click(addButton);
    const taskName = screen.getByText(TASK);
    expect(taskName).toBeInTheDocument();
  });
});
