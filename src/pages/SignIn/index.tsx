import React from "react";
import logoImg from "../../assets/logo.svg";
import { Background, Container, Content } from "./styles";
import { FiLogIn } from "react-icons/fi";
// import signInBackgroundImg from "../../assets/sign-in-background.png";

// import { Container } from './styles';

const SignIn: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <img src={logoImg} alt="" />
          <form action="">
            <h1>Faça seu logon</h1>
            <input placeholder="E-mail" />
            <input type="password" placeholder="Senha" />

            <button type="submit">Entrar</button>

            <a href="forgot">Esqueci minha senha</a>
          </form>

          <a href="login">
            <FiLogIn />
            Criar conta
          </a>
        </Content>
        <Background />
      </Container>
    </>
  );
};

export default SignIn;
