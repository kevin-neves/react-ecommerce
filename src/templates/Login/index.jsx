import React from 'react';
import { Container, Wrapper, Title, Form, Input, Button, Link } from './styles';

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Form>
          <Title>SIGN IN</Title>
          <Form>
            <Input placeholder="username" />
            <Input placeholder="password" />
            <Button>LOGIN</Button>
            <Link>DO NOT YOU REMEMBER THE PASSORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
          </Form>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
