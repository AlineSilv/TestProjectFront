import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import api from '../../../services/api/api';
import { ModalContainer, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, Button, ErrorMessage } from './modaleditstyles';

const schema = z.object({
  nome: z.string().min(3, "Este campo é obrigatório"),
  cpf: z.string().min(11, "Um CPF valido deve conter no minimo 11 caracteres"),
  celular: z.string().min(10, "Um numero valido deve conter no minimo 10 caracteres"),
  email: z.string().email("Formato de e-mail inválido"),
});

type FormData = z.infer<typeof schema>;

const ModalEdit: React.FC<{ onClose: () => void, employee: any }> = ({ onClose, employee }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: employee,
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const token = localStorage.getItem("emcash_token");
    try {
      await api.patch(`/funcionario/${employee.id}`, data, {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
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
          <Input type="text" {...register('nome')} placeholder="Nome completo" />
          {errors.nome && <ErrorMessage>{errors.nome.message}</ErrorMessage>}
          <Input type="text" {...register('cpf')} placeholder="CPF/CNPJ" />
          {errors.cpf && <ErrorMessage>{errors.cpf.message}</ErrorMessage>}
          <Input type="text" {...register('celular')} placeholder="Celular" />
          {errors.celular && <ErrorMessage>{errors.celular.message}</ErrorMessage>}
          <Input type="email" {...register('email')} placeholder="E-mail" />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Cancelar</Button>
          <Button onClick={handleSubmit(onSubmit)}>Salvar Alterações</Button>
        </ModalFooter>
      </ModalContent>
    </ModalContainer>
  );
};

export default ModalEdit;
