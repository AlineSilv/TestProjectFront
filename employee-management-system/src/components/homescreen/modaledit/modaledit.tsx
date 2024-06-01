import React, { useState } from 'react';
import api from '../../../services/api/api';
import { ModalContainer, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, Button } from './modaleditstyles';

const ModalEdit: React.FC<{ onClose: () => void, employee: any }> = ({ onClose, employee }) => {
  const [formData, setFormData] = useState(employee);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      await api.patch(`/funcionario/${employee.id}`, formData);
      onClose();
      window.location.reload(); // Recarregar a página para refletir a mudança
    } catch (error) {
      console.error('Error updating employee', error);
    }
  };

  return (
    <ModalContainer>
      <ModalContent>
        <ModalHeader>Editar Funcionário</ModalHeader>
        <ModalBody>
          <Input type="text" name="name" value={formData.name} placeholder="Nome completo" onChange={handleChange} />
          <Input type="text" name="cpf" value={formData.cpf} placeholder="CPF/CNPJ" onChange={handleChange} />
          <Input type="text" name="phone" value={formData.phone} placeholder="Celular" onChange={handleChange} />
          <Input type="email" name="email" value={formData.email} placeholder="E-mail" onChange={handleChange} />
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Cancelar</Button>
          <Button onClick={handleSubmit}>Salvar Alterações</Button>
        </ModalFooter>
      </ModalContent>
    </ModalContainer>
  );
};

export default ModalEdit;
