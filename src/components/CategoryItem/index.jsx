import React from 'react';
import P from 'prop-types';
import { Button, Container, Image, Info, Title } from './styles';

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

CategoryItem.propTypes = {
  item: P.object,
};

export default CategoryItem;
