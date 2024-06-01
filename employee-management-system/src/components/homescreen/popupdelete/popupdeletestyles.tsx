import styled from 'styled-components';

export const PopupContainer = styled.div`
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

export const PopupContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 5px;
  width: 400px;
  text-align: center;
`;

export const PopupHeader = styled.h2`
  margin-bottom: 1rem;
`;

export const PopupBody = styled.p`
  margin-bottom: 1rem;
`;

export const PopupFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const Button = styled.button<{ danger?: boolean }>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: ${({ danger }) => (danger ? '#ff5722' : '#ccc')};
  color: white;
  cursor: pointer;

  &:hover {
    background-color: ${({ danger }) => (danger ? '#e64a19' : '#aaa')};
  }
`;
