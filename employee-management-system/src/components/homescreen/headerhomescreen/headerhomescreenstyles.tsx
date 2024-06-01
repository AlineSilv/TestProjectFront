import styled from 'styled-components';

export const GeneralContainer = styled.div`
width: 100%;
max-width: 1200px;
margin-bottom: 1.5rem;
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 1.5rem;
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 4px rgba(0, 1, 1, 0.1);
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ff5722;

  span {
    color: black;
  }
`;

export const UserContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width:auto;
`;

export const UserIcon = styled.img`
width:20px;
`;

export const UserGreeting = styled.div`
padding-left:15px;
padding-right:20px;
font-size: 1rem;
color: #333;
`;

export const ExitIcon = styled.img`
padding-right:20px;
width:20px;
`;
export const BodyContainer = styled.div`
display: flex;
aling-items:start;
align-items: center;
width:auto;
`;

export const LabelTitle = styled.p`
padding-right: 20px;
font-size: 1.5rem;
font-weight: bold;
`;

export const AddNewButton = styled.button`
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


