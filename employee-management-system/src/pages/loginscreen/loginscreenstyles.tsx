import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const LeftSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #f5f5f5;
`;

export const RightSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #ffffff;
`;

export const Logo = styled.h1`
  color: #f60;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin: 0.5rem 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  border: none;
  border-radius: 5px;
  background-color: #f60;
  color: white;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #e55a00;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-top: 0.5rem;
`;

export const Title = styled.h2`
  color: #f60;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  color: #666;
  margin-bottom: 2rem;
  text-align: center;
`;

export const FooterText = styled.p`
  margin-top: 1rem;
  color: #666;
  font-size: 0.875rem;
`;

export const Link = styled.a`
  color: #f60;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Illustration = styled.img`
  width: 100%;
  max-width: 500px;
  margin-bottom: 2rem;
`;

export const SmallText = styled.p`
  margin-top: 1rem;
  color: #666;
  font-size: 0.875rem;
  text-align: center;
`;
