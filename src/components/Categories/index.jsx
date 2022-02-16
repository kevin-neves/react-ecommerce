import React from 'react';
import { Container } from './styles';
import { categories } from '../../data';
import CategoryItem from '../CategoryItem';

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => {
        return <CategoryItem key={item.id} item={item} />;
      })}
    </Container>
  );
};

export default Categories;
