import React, { useState } from 'react';
import api from '../../../services/api/api';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ModalContainer, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, Button, ButtonCancel, ErrorMessage } from './modaladdnewstyles';


const schema = z.object({
  nome: z.string().min(3, "Este campo é obrigatório"),
  cpf: z.string().min(11, "Um CPF valido deve conter no minimo 11 caracteres"),
  celular: z.string().min(10, "Um numero válido conter no minimo 10 caracteres"),
  email: z.string().email("Formato de e-mail inválido"),
});

type FormData = z.infer<typeof schema>;


const ModalAddNew: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const token = localStorage.getItem("emcash_token");
    try {
      await api.post('/funcionario/cadastro', data, {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      onClose();
      window.location.reload(); 
    } catch (error) {
      console.error('Error adding employee', error);
    }
  };

  return (
    <ModalContainer>
      <ModalContent>
        <ModalHeader>Adicionar Novo Funcionário</ModalHeader>
        <ModalBody>
        <Input type="text" placeholder="Nome completo" {...register('nome')} />
          {errors.nome && <ErrorMessage>{errors.nome.message}</ErrorMessage>}
          <Input type="text" placeholder="CPF/CNPJ" {...register('cpf')} />
          {errors.cpf && <ErrorMessage>{errors.cpf.message}</ErrorMessage>}
          <Input type="text" placeholder="Celular" {...register('celular')} />
          {errors.celular && <ErrorMessage>{errors.celular.message}</ErrorMessage>}
          <Input type="email" placeholder="E-mail" {...register('email')} />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </ModalBody>
        <ModalFooter>
          <ButtonCancel onClick={onClose}>Cancelar</ButtonCancel>
          <Button onClick={handleSubmit(onSubmit)}>Adicionar</Button>
        </ModalFooter>
      </ModalContent>
    </ModalContainer>
  );
};

export default ModalAddNew;
