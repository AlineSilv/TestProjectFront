import React, { useEffect, useState } from 'react';
import api from '../../../services/api/api';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { TableContainer, TableRow, TableHeader, TableCell, EditButton, DeleteButton, EditIconTable, DeleteIconTable, BoxIcon, EyeOpenIcon } from './homescreentablestyles';

interface Employee {
  id: string;
  nome: string;
  cpf: string;
  celular: string;
  email: string;
}

interface TableProps {
  onEdit: (employee: Employee) => void;
  onDelete: (employee: Employee) => void;
}

const Table: React.FC<TableProps> = ({ onEdit, onDelete }) => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchEmployees = async () => {
    const token = localStorage.getItem("emcash_token")
      try {
        const response = await api.get('/funcionarios', {
          headers:{
            "Authorization":`Bearer ${token}`
          }
        } );
        setEmployees(response.data);
        console.log(response);
      } catch (error) {
        console.error('Error fetching employees', error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <TableContainer>
      <thead>
        <TableRow>
          <TableHeader><BoxIcon src="/assets/homescreen/iconboxtoselect.svg" /></TableHeader>
          <TableHeader>Nome completo</TableHeader>
          <TableHeader>CPF/CNPJ<EyeOpenIcon src="/assets/homescreen/iconeyeon.svg"/></TableHeader>
          <TableHeader>Celular</TableHeader>
          <TableHeader>E-mail</TableHeader>
          <TableHeader>Editar</TableHeader>
          <TableHeader>Apagar</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <TableRow key={employee.id}>
            <TableCell><BoxIcon src="/assets/homescreen/iconboxtoselect.svg" /></TableCell>
            <TableCell>{employee.nome}</TableCell>
            <TableCell>{employee.cpf}</TableCell>
            <TableCell>{employee.celular}</TableCell>
            <TableCell>{employee.email}</TableCell>
            <TableCell>
              <EditButton onClick={() => onEdit(employee)}>
                <EditIconTable />
              </EditButton>
            </TableCell>
            <TableCell>
              <DeleteButton onClick={() => onDelete(employee)}>
                <DeleteIconTable />
              </DeleteButton>
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </TableContainer>
  );
};

export default Table;
