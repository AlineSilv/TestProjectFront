import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, jest } from '@jest/globals';
import '@testing-library/jest-dom/extend-expect';
import "@testing-library/jest-dom";
import React from 'react';
import Header from '../../src/components/homescreen/headerhomescreen/headerhomescreen';

jest.mock('../../src/components/homescreen/popuplogout', () => () => <div data-testid="PopupLogout">Popup Logout</div>);

describe('Header', () => {
  test('should render header component with all elements', () => {
    const mockOnAddNew = jest.fn();

    render(<Header onAddNew={mockOnAddNew} />);

    expect(screen.getByText('front-end-emcash')).toBeInTheDocument();
    expect(screen.getByText('Olá, EmCasher')).toBeInTheDocument();
    expect(screen.getByText('Lista de Funcionários')).toBeInTheDocument();
    expect(screen.getByText('Adicionar novo')).toBeInTheDocument();
  });

  test('should call onAddNew when Add New button is clicked', () => {
    const mockOnAddNew = jest.fn();

    render(<Header onAddNew={mockOnAddNew} />);

    fireEvent.click(screen.getByText('Adicionar novo'));

    expect(mockOnAddNew).toHaveBeenCalled();
  });

  test('should show logout popup when exit icon is clicked', () => {
    const mockOnAddNew = jest.fn();

    render(<Header onAddNew={mockOnAddNew} />);

    fireEvent.click(screen.getByAltText('Exit Icon'));

    expect(screen.getByTestId('PopupLogout')).toBeInTheDocument();
  });
});