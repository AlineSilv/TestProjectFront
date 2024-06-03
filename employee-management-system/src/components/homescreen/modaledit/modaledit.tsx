import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import api from '../../../services/api/api';
import { 
  ModalContainer, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  FormGroup, 
  Label, 
  Input, 
  Button,
  ButtonCancel,
  ErrorMessage 
} from './modaleditstyles';

const schema = z.object({
  nome: z.string().min(3, "Este campo é obrigatório"),
  cpf: z.string().min(11, "Um CPF válido deve conter no mínimo 11 caracteres"),
  celular: z.string().min(10, "Um número válido deve conter no mínimo 10 caracteres"),
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
          <FormGroup>
            <Input type="text" id="nome" {...register('nome')} placeholder=" " />
            <Label htmlFor="nome">Nome completo</Label>
            {errors.nome && <ErrorMessage>{errors.nome.message}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Input type="text" id="cpf" {...register('cpf')} placeholder=" " />
            <Label htmlFor="cpf">CPF/CNPJ</Label>
            {errors.cpf && <ErrorMessage>{errors.cpf.message}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Input type="text" id="celular" {...register('celular')} placeholder=" " />
            <Label htmlFor="celular">Celular</Label>
            {errors.celular && <ErrorMessage>{errors.celular.message}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Input type="email" id="email" {...register('email')} placeholder=" " />
            <Label htmlFor="email">E-mail</Label>
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <ButtonCancel className="cancel" onClick={onClose}>Cancelar</ButtonCancel>
          <Button className="save" onClick={handleSubmit(onSubmit)}>Salvar Alterações</Button>
        </ModalFooter>
      </ModalContent>
    </ModalContainer>
  );
};

export default ModalEdit;
