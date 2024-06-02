import React, { useState } from 'react';
import { HeaderContainer, Logo, UserGreeting, AddNewButton, BodyContainer, GeneralContainer, UserContainer, ExitIcon, LabelTitle, UserIcon } from './headerhomescreenstyles';
import PopupLogout from '../popuplogout/popuplogout'; 

interface HeaderProps {
  onAddNew: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddNew }) => {
  const [showLogout, setShowLogout] = useState(false);

  return (
    <GeneralContainer>
      <HeaderContainer>
        <Logo><span>front-end-</span>emcash</Logo>
        <UserContainer>
          <UserIcon src="/assets/homescreen/usercircle.svg"/>
          <UserGreeting>Olá, EmCasher</UserGreeting>
          <ExitIcon src="/assets/homescreen/exiticonhomescreen.svg" onClick={() => setShowLogout(true)} />
        </UserContainer>
      </HeaderContainer>
      <BodyContainer>
        <LabelTitle>Lista de Funcionários</LabelTitle>
        <AddNewButton onClick={onAddNew}>Adicionar novo</AddNewButton>
      </BodyContainer>
      {showLogout && <PopupLogout onClose={() => setShowLogout(false)} />}
    </GeneralContainer>
  );
};

export default Header;
