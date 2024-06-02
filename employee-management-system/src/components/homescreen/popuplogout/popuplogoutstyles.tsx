import styled from 'styled-components';

export const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const PopupContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 80%;
  text-align: center;
`;

export const PopupHeader = styled.h2`
  margin-bottom: 10px;
`;

export const PopupBody = styled.p`
  margin-bottom: 20px;
`;

export const PopupFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  background-color: #ff4d4f;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

export const ButtonCancel = styled(Button)`
  background-color: #ccc;
  color: black;
`;
