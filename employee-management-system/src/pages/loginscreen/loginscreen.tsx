import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  LeftSide,
  ContentLeft,
  RightSide,
  ContentRight,
  Logo,
  LoginForm,
  Input,
  Button,
  ErrorMessage,
  Title,
  Subtitle,
  FooterText,
  Link,
  Illustration,
  SmallText,
  ForgotPassword,
  HelpText,
  FormTop
} from './loginscreenstyles';
import api from '../../services/api/api';
//import { fakeAuth } from '../../services/loginscreenservice/authService'; 


const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log(username);
    const result= await api.post("/login", {
        usuario:username, senha:password
     })
     console.log(result);
     localStorage.setItem("emcash_token",result.data.access_token);

    if (result.status===200){
      return navigate('/homescreen');
    }
    return setError('Usuário e/ou senha incorretos.');
      

    // const isAuthenticated = await fakeAuth(username, password);
    // if (isAuthenticated) {
    //   navigate('/homescreen');
    // } else {
    //   setError('Usuário e/ou senha incorretos.');
    // }
  };

  // const fakeAuth = (username: string, password: string) => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       if (username === 'admin' && password === 'admin') {
  //         resolve(true);
  //       } else {
  //         resolve(false);
  //       }
  //     }, 1000);
  //   });
  // };



  return (
    <Container>
      <LeftSide>
        <Logo><span>front-end-</span>emcash</Logo>
        <ContentLeft>
        <Illustration src="/assets/loginscreen/illustrationloginscreen.svg" alt="Illustration" />
        </ContentLeft>
        <SmallText>O investimento evoluiu. O empréstimo também.</SmallText>
      </LeftSide>
      <RightSide>
        <ContentRight>
          <FormTop>
            <Title>Seja bem-vindo!</Title>
          <Subtitle>Insira os seus dados nos campos abaixo para acessar a sua conta.</Subtitle>
          </FormTop>
          <LoginForm>
            <Input
              type="text"
              placeholder="Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ForgotPassword>
              <Link href="#">Esqueci minha senha</Link>
            </ForgotPassword>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <Button onClick={handleLogin}>Entrar</Button>
            <FooterText>
            Ainda não tem conta? <Link href="#">Cadastrar</Link>
            </FooterText>
          </LoginForm>
        </ContentRight>
        <HelpText>
          <Link href="#">Precisa de ajuda?</Link>
        </HelpText>
      </RightSide>
    </Container>
  );
};

export default LoginScreen;
