import styled from 'styled-components';

export const Container = styled.article`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  color: white;
  margin-bottom: 1.25rem;
`;

export const Button = styled.button`
  border: none;
  padding: 0.8rem;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;
