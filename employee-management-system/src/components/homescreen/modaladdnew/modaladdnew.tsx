import React, { useState } from 'react';
import api from '../../../services/api/api';
import { ModalContainer, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, Button, ButtonCancel } from './modaladdnewstyles';

const ModalAddNew: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [formData, setFormData] = useState({ nome: '', cpf: '', cnpj:null, celular: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    console.log(formData);
    const token = localStorage.getItem("emcash_token")
    try {
      await api.post('/funcionario/cadastro', formData, {
        headers:{
          "Authorization":`Bearer ${token}`
        }
        
      });
      onClose();
      window.location.reload(); // Recarregar a página para refletir a mudança
    } catch (error) {
      console.error('Error adding employee', error);
    }
  };

  return (
    <ModalContainer>
      <ModalContent>
        <ModalHeader>Adicionar Novo Funcionário</ModalHeader>
        <ModalBody>
          <Input type="text" name="nome" placeholder="Nome completo" onChange={handleChange} />
          <Input type="text" name="cpf" placeholder="CPF/CNPJ" onChange={handleChange} />
          <Input type="text" name="celular" placeholder="Celular" onChange={handleChange} />
          <Input type="email" name="email" placeholder="E-mail" onChange={handleChange} />
        </ModalBody>
        <ModalFooter>
            <ButtonCancel onClick={onClose}>Cancelar</ButtonCancel>
          <Button onClick={handleSubmit}>Adicionar</Button>
          
        </ModalFooter>
      </ModalContent>
    </ModalContainer>
  );
};

export default ModalAddNew;
