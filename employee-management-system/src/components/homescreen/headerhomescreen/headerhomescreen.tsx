
import React from 'react';
import { HeaderContainer, Logo, UserGreeting, AddNewButton, BodyContainer, GeneralContainer, UserContainer, ExitIcon, LabelTitle, UserIcon
 } from './headerhomescreenstyles';

interface HeaderProps {
  onAddNew: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddNew }) => {
  return (
    <GeneralContainer>
      <HeaderContainer>
      <Logo><span>front-end-</span>emcash</Logo>
      <UserContainer>
        <UserIcon  src="/assets/homescreen/usercircle.svg"/>
        <UserGreeting>Olá, EmCasher</UserGreeting>
        <ExitIcon src="/assets/homescreen/exiticonhomescreen.svg" />
      </UserContainer>
      </HeaderContainer>
    <BodyContainer>
      <LabelTitle>Lista de Funcionários</LabelTitle>
      <AddNewButton onClick={onAddNew}>Adicionar novo</AddNewButton>
    </BodyContainer>
   </GeneralContainer>
    
    
  );
  
};

export default Header;
