import React from 'react';
import { PopupContainer, PopupContent, PopupHeader, PopupBody, PopupFooter, Button } from './popupdeletestyles';

interface PopupDeleteProps {
  onClose: () => void;
  onDelete: () => void;
}

const PopupDelete: React.FC<PopupDeleteProps> = ({ onClose, onDelete }) => {
  return (
    <PopupContainer>
      <PopupContent>
        <PopupHeader>Apagar Funcionário</PopupHeader>
        <PopupBody>Esta ação é irreversível. Tem certeza que deseja apagar este funcionário do sistema?</PopupBody>
        <PopupFooter>
          <Button onClick={onClose}>Cancelar</Button>
          <Button onClick={onDelete} danger>Apagar</Button>
        </PopupFooter>
      </PopupContent>
    </PopupContainer>
  );
};

export default PopupDelete;
