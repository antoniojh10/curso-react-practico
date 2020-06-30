import React from 'react';

// Styles
import '../assets/styles/components/Categories.scss';

const Categories = ({ children, title }) => (
  <React.Fragment>
    <h3 class="categories__title">{title}</h3>
    {children}
  </React.Fragment>
);

export default Categories;
