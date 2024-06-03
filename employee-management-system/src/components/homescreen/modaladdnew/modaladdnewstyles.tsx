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
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 400px;
  height:550px;
`;

export const ModalHeader = styled.h2`
  font-family: 'Manrope', sans-serif;
  padding-left:10%;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-bottom: 32px;
`;

export const ModalBody = styled.div`
  width:350px;
  height:350px;
  display: flex;
  padding-left:5%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModalFooter = styled.div`
  width:350px;
  height:44px;
  margin-top:32px;
  margin-bottom:32px;
  display: flex;
  justify-content: flex-end;
`;

export const Input = styled.input`
  width:300px;
  height:55px;
  padding: 0.5rem;
  margin-bottom:24px;
  border: 1px solid #1B1B1B;
  border-radius: 12px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

input::placeholder {
  color: black;
}

input:focus {
  border-color: orange; 
  outline: none;
}
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
padding: 0.5rem 1rem;
border: none;
background: none;
color: orange;
cursor: pointer;

&:hover {
  background-color: #eeee;
  border-radius: 5px;
}
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;