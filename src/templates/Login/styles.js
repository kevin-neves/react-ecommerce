import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: block;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: '';
    background: url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
      center;
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    background-size: cover;
  }
`;

export const Wrapper = styled.article`
  width: 25%;
  padding: 20px;
  background-color: #fff;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 300;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

export const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const Link = styled.a`
  margin: 5px 0q;
  font-size: 0.75rem;
  text-decoration: underline;
  cursor: pointer;
`;
