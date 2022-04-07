import React from "react";
import { Form } from "@unform/web";
import {
  FiLogIn,
  FiMail,
  FiLock,
  FiUser,
  FiArrowDownLeft,
} from "react-icons/fi";

import Input from "../../components/Input";
import Button from "../../components/Button";
import { Container, Content, Background } from "./styles";

import logoImg from "../../assets/logo.svg";

const SignUp: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }
  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu Cadastro</h1>

          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="login">
          <FiArrowDownLeft />
          Voltar para Logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
