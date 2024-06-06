// TagEstado.js
import React from 'react';
import classes from './TagEstado.module.css';

const TagEstado = ({ estado }) => {
  let color = '';
  switch (estado) {
    case 'pendiente':
      color = classes.pendiente;
      break;
    case 'expirado':
      color = classes.expirado;
      break;
    case 'resuelto':
      color = classes.resuelto;
      break;
    default:
      color = '';
  }

  return (
    <div className={`${classes.tag} ${color}`}>
      {estado}
    </div>
  );
};

export default TagEstado;
