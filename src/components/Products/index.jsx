import React from 'react';
import { Container } from './styles';
import { popularProducts } from '../../data';
import Product from '../Product';

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product key={item.id} img={item.img} />
      ))}
    </Container>
  );
};

export default Products;
