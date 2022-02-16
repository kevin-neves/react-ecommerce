import styled from 'styled-components';

export const Container = styled.section`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e9ebed;
  position: relative;
`;

export const Circle = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

export const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

export const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  justify-content: center;
  align-items: center;
  transition: all 250ms ease;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
