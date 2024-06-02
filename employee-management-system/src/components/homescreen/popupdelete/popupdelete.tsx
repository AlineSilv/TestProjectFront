import React from 'react';
import { PopupContainer, PopupContent, PopupHeader, PopupBody, PopupFooter, Button } from './popupdeletestyles';
import api from '../../../services/api/api';
import { AxiosError } from 'axios';

interface Employee {
  id: string;
  nome: string;
  cpf: string;
  celular: string;
  email: string;
}
interface PopupDeleteProps {
  onClose: () => void;
  employee: Employee;
}

const PopupDelete: React.FC<PopupDeleteProps> = ({ onClose, employee }) => {
  const handleDelete = async () => {
    const token = localStorage.getItem("emcash_token");
    console.log(token);
    console.log(employee);
    if (!token) {
      console.error("Token not found in localStorage");
      return;
    }
    if (employee) {
      try {
        await api.delete(`/funcionario/${employee.id}`, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
        onClose();
        window.location.reload(); 
      } catch (err: unknown) {
        const error = err as AxiosError;
        console.error('Error deleting employee', error);
        if (error.response) {
          console.error('Server response:', error.response.data);
        } else {
          console.error('Error message:', error.message);
        }
      }
    }
  };
  return (
    <PopupContainer>
      <PopupContent>
        <PopupHeader>Apagar Funcionário</PopupHeader>
        <PopupBody>Esta ação é irreversível. Tem certeza que deseja apagar este funcionário do sistema?</PopupBody>
        <PopupFooter>
          <Button onClick={onClose}>Cancelar</Button>
          <Button onClick={handleDelete}>Apagar</Button>
        </PopupFooter>
      </PopupContent>
    </PopupContainer>
  );
};

export default PopupDelete;
