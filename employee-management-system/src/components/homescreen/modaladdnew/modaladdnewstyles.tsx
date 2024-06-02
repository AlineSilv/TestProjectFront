import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 5px;
  width: 400px;
`;

export const ModalHeader = styled.h2`
  margin-bottom: 1rem;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ModalFooter = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: flex-end;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: #ff5722;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #e64a19;
  }
`;

export const ButtonCancel = styled.button`
margin-right:20px;
border: none;
background: none;
color: orange;
cursor: pointer;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;