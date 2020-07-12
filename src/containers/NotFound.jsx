import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <React.Fragment>
    <h1>No encontrado</h1>
    <Link to="/">Regresar al Home</Link>
  </React.Fragment>
);

export default NotFound;
